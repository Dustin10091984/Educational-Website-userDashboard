import React, { useEffect } from "react";
import Link from "next/link";
import HeaderPublic from "@/components/HeaderPublic";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart  
} from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdDeleteForever } from "react-icons/md";

// import Bg from '@/components/LandingPage/Bg'

const cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartR.items);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = window.localStorage.getItem("cart");
      const cartData = JSON.parse(storedCart);
      // Calculate the total number of products ordered

      // Perform operations with myData
    }
  });
  const selectTotal = (state) =>
    state.cartR.items.reduce(
      (total, item) => total + item.cost * item.quantity,
      0
    );
  const subtotal = useSelector(selectTotal);
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  const deliveryCost = 5000;
  const totalWithDelivery = total + deliveryCost;

  const handleDelete = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch removeFromCart action with itemId
  };
  const isValidHttpUrl = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const handlePlaceOrder = async () => {
    const authToken = Cookies.get("authToken");
    if (!authToken) {
      toast.error("برای ادامه نیاز به ورود یا ثبت نام دارید", {
        onClose: () => {
          router.push("/login");
        },
        autoClose: 2000,
      });
    }

    // Extract the cart from localStorage
    const storedCart = localStorage.getItem("cart");
    const cartData = storedCart ? JSON.parse(storedCart) : [];

    // Create an array of order items
    const orderItems = cartData.map((item) => ({
      product: item.id,
      price_each: item.cost,
      quantity: item.quantity,
    }));

    // Create the total order details including additional costs
    // const orderDetails = {
    //   items: orderItems, // your items array
    //   subtotal: subtotal, // calculated subtotal of items
    //   vat: vat, // calculated VAT
    //   deliveryCost: deliveryCost, // delivery cost
    //   totalWithDelivery: totalWithDelivery, // final total
    // }

    // Define your API endpoint
    const apiEndpoint = "https://api.ebsalar.com/api/v1/front/order/";

    // Create the fetch request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("authToken")}`, // assuming the token is stored in a cookie
      },
      body: JSON.stringify(orderItems),
      // body: JSON.stringify(orderDetails),
    };

    // Make the API call
    try {
      const response = await fetch(apiEndpoint, requestOptions);
      const responseData = await response.json();
      if (response.ok) {
        const paymentUrl = responseData.results;
        router.push(paymentUrl);
        console.log("Order placed successfully", responseData);
        localStorage.removeItem("cart");
      } else {
        console.error("Failed to place order", responseData);
      }
    } catch (error) {
      console.error("Error while placing order", error);
      // Handle network errors - maybe show a message to the user
    }
  };

  return (
    <div className=" w-full min-h-screen  relative bg-black  z-50 ">
      {/* <Bg/> */}
      <HeaderPublic />
      <ToastContainer />

      <div className="  absolute   rotate-180  top-0  w-full  opacity-50 -z-10">
        <svg
          width="100%"
          height="10%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,405 C 95.09230769230771,435.9730769230769 190.18461538461543,466.94615384615383 270,449 C 349.8153846153846,431.05384615384617 414.3538461538461,364.1884615384615 478,321 C 541.6461538461539,277.8115384615385 604.4000000000001,258.30000000000007 696,233 C 787.5999999999999,207.69999999999996 908.0461538461536,176.61153846153846 1000,146 C 1091.9538461538464,115.38846153846154 1155.4153846153847,85.25384615384615 1224,66 C 1292.5846153846153,46.746153846153845 1366.2923076923075,38.37307692307692 1440,30 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.265"
            //  className="animate-flip-up animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate-reverse path-0"></path><defs><linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#eb144c"></stop></linearGradient></defs><path d="M 0,700 L 0,545 C 64.9,532.0192307692307 129.8,519.0384615384614 214,500 C 298.2,480.9615384615385 401.70000000000005,455.86538461538464 480,441 C 558.3,426.13461538461536 611.4000000000001,421.5 679,401 C 746.5999999999999,380.5 828.7,344.13461538461536 926,320 C 1023.3,295.86538461538464 1135.8,283.96153846153845 1224,261 C 1312.2,238.03846153846155 1376.1,204.01923076923077 1440,170 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4"
            //  className="animate-flip-up animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-alternate-reverse path-1"></path><defs><linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#eb144c"></stop></linearGradient></defs><path d="M 0,700 L 0,685 C 78.63076923076923,685.2089743589744 157.26153846153846,685.4179487179488 226,665 C 294.73846153846154,644.5820512820512 353.5846153846153,603.5371794871795 450,576 C 546.4153846153847,548.4628205128205 680.4,534.4333333333333 758,531 C 835.6,527.5666666666667 856.8153846153846,534.7294871794873 915,498 C 973.1846153846154,461.2705128205128 1068.3384615384616,380.64871794871794 1162,342 C 1255.6615384615384,303.35128205128206 1347.8307692307692,306.675641025641 1440,310 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53"
            className="animate-flip-up animate-infinite animate-duration-[8000ms] animate-ease-in-out animate-alternate-reverse path-2"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,825 C 95.83076923076922,834.6551282051282 191.66153846153844,844.3102564102564 277,833 C 362.33846153846156,821.6897435897436 437.1846153846154,789.4141025641026 510,758 C 582.8153846153846,726.5858974358974 653.6,696.0333333333334 720,684 C 786.4,671.9666666666666 848.4153846153846,678.4525641025641 927,647 C 1005.5846153846154,615.5474358974359 1100.7384615384617,546.1564102564103 1189,507 C 1277.2615384615383,467.8435897435897 1358.6307692307691,458.9217948717949 1440,450 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className=" path-3"
          ></path>
        </svg>
      </div>

      <div className="  absolute   bottom-0  w-full    opacity-75 -z-10">
        <svg
          width="100%"
          height="10%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,405 C 95.09230769230771,435.9730769230769 190.18461538461543,466.94615384615383 270,449 C 349.8153846153846,431.05384615384617 414.3538461538461,364.1884615384615 478,321 C 541.6461538461539,277.8115384615385 604.4000000000001,258.30000000000007 696,233 C 787.5999999999999,207.69999999999996 908.0461538461536,176.61153846153846 1000,146 C 1091.9538461538464,115.38846153846154 1155.4153846153847,85.25384615384615 1224,66 C 1292.5846153846153,46.746153846153845 1366.2923076923075,38.37307692307692 1440,30 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0"
            //  className="animate-flip-up animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate-reverse path-0"></path><defs><linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#eb144c"></stop></linearGradient></defs><path d="M 0,700 L 0,545 C 64.9,532.0192307692307 129.8,519.0384615384614 214,500 C 298.2,480.9615384615385 401.70000000000005,455.86538461538464 480,441 C 558.3,426.13461538461536 611.4000000000001,421.5 679,401 C 746.5999999999999,380.5 828.7,344.13461538461536 926,320 C 1023.3,295.86538461538464 1135.8,283.96153846153845 1224,261 C 1312.2,238.03846153846155 1376.1,204.01923076923077 1440,170 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4"
            className="animate-flip-up animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-alternate-reverse path-1"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,685 C 78.63076923076923,685.2089743589744 157.26153846153846,685.4179487179488 226,665 C 294.73846153846154,644.5820512820512 353.5846153846153,603.5371794871795 450,576 C 546.4153846153847,548.4628205128205 680.4,534.4333333333333 758,531 C 835.6,527.5666666666667 856.8153846153846,534.7294871794873 915,498 C 973.1846153846154,461.2705128205128 1068.3384615384616,380.64871794871794 1162,342 C 1255.6615384615384,303.35128205128206 1347.8307692307692,306.675641025641 1440,310 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="animate-flip-up animate-infinite animate-duration-[8000ms] animate-ease-in-out animate-alternate-reverse path-2"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,825 C 95.83076923076922,834.6551282051282 191.66153846153844,844.3102564102564 277,833 C 362.33846153846156,821.6897435897436 437.1846153846154,789.4141025641026 510,758 C 582.8153846153846,726.5858974358974 653.6,696.0333333333334 720,684 C 786.4,671.9666666666666 848.4153846153846,678.4525641025641 927,647 C 1005.5846153846154,615.5474358974359 1100.7384615384617,546.1564102564103 1189,507 C 1277.2615384615383,467.8435897435897 1358.6307692307691,458.9217948717949 1440,450 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className=" path-3"
          ></path>
        </svg>
      </div>

      <h2 className="text-md text-gray-400 pt-28 animate-fade-left animate-once animate-duration-[400ms]  w-full text-center mb-5">
        {" "}
        سبد خرید شما
      </h2>
      <div className="animate-fade-left animate-once animate-duration-[400ms] container p-4 rounded-md sm:rounded-none z-50 shadow-2xl b-24 shadow-black  backdrop-blur-xl  mx-auto ">
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="py-6 flex sm:flex-col w-full    justify-between items-center space-x-4"
            >
              {isValidHttpUrl(item.banner) ? (
                // If you have a valid image URL, display the image
                <img
                  src={item.banner}
                  alt={item.title}
                  className="h-24 w-24 object-cover rounded-lg"
                />
              ) : (
                // If not, display a placeholder or keep the area blank
                <div className="h-24 w-24 bg-[#ffffff00] flex items-center border border-gray-800 rounded-md justify-center">
                  <span className="text-pink-600">No Image</span>
                </div>
              )}

              <div>
                <div className="flex flex-row-reverse py-4 w-full justify-between">
                  <h3 className="text-md text-gray-300  whitespace-nowrap">
                    {item.title}
                  </h3>

                  <button
                    onClick={() => router.push(`/productDetail/${item.id}`)}
                    className=" text-pink-600"
                  >
                    جزئیات
                  </button>
                </div>
                <div className="flex justify-between min-w-56  space-x-4 items-center">
                  <MdDeleteForever
                    onClick={() => handleDelete(item.id)}
                    className="text-[30px] text-[white] mr-[40px] hover:text-[red] cursor-pointer [transition:all_0.5s_ease-in-out] "
                  />

                  <button
                    onClick={() => dispatch(decrementQuantity(item))}
                    className="text-gray-50 text-2xl bg-[#11ad5711] h-10 w-10 shadow-md shadow-[#0a040765] rounded-full  "
                  >
                    -
                  </button>
                  <span className="mx-3 text-gray-50">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item))}
                    className="text-gray-50 text-2xl bg-[#11ad5711] h-10 w-10 shadow-md shadow-[#0a040765] rounded-full  "
                  >
                    +
                  </button>
                  <p className="text-gray-300">{item.cost.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 flex flex-col justify-center items-center">
          <div className="flex w-full border-y-2 border-gray-600 py-2 justify-between">
            <h3 className="text-gray-200 text-sm">
              {subtotal.toLocaleString()}
            </h3>
            <p className="text-gray-200 text-sm">جمع مبلغ فاکتور (تومان)</p>
          </div>

          <div className="flex w-full border-b-2 border-gray-600 py-2 justify-between">
            <h3 className="text-gray-200 text-sm">{vat.toLocaleString()}</h3>
            <p className="text-gray-200 text-sm">ارزش افزوده</p>
          </div>

          <div className="flex w-full border-b-2 border-gray-600 py-2 justify-between">
            <h3 className="text-gray-200 text-sm">
              {deliveryCost.toLocaleString()}
            </h3>
            <p className="text-gray-200 text-sm">هزینه حمل</p>
          </div>

          <div className="flex w-full  py-2 justify-center space-x-4">
            <h3 className="text-green-400 text-sm">
              {totalWithDelivery.toLocaleString()}
            </h3>
            <p className="text-green-400 text-sm">:جمع کل</p>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between items-center">
          <button
            onClick={handlePlaceOrder}
            className="border border-pink-600 bg-rose-800 hover:bg-red-700 text-sm text-white py-2 px-4 rounded-md shadow-xl "
          >
            پرداخت آنلاین
          </button>
          <Link href="/shop">
            <button className=" hover:bg-green-700 text-white text-sm  py-2 px-4 rounded">
              خرید بیشتر
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cart;
