import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { title, category, cost, description, level, available, banner } =
    product;

  // Function to determine if the URL is valid for an image
  const isValidHttpUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  };

  const goToDetailPage = () => {
    router.push(`/productDetail/${product.id}`);
  };

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        cost: product.cost,
        quantity: 1, // This is a simplification, you might want to handle quantity inside the cart slice.
        banner: product.banner,
      })
    );
    // toast.success('product added to your shopping cart')
    if (!toast.isActive(1, "friendRequest")) {
      toast.success('product added to your shopping cart')
}
    //   onClose: () => {
    //     router.push('/studentBoard')
    //   },
    //   autoClose: 3000,
    // })
    // router.push('/cart')
  };

  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300  backdrop-blur-xl">
      <div className="h-48 w-full bg-[#ffffff28]">
        {isValidHttpUrl(banner) ? (
          // If you have a valid image URL, display the image
          <img
            src={banner}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        ) : (
          // If not, display a placeholder or keep the area blank
          <div className="flex items-center justify-center h-full">
            <span>No Image</span>
          </div>
        )}
      </div>
      <div className="p-4 relative">
        <h5 className="text-md text-gray-100 w-full pt-6 text-center ">
          {title}
        </h5>
        <p className="text-sm w-full  absolute top-2 right-2 text-right text-gray-400">
          {category}
        </p>
        <div className="flex space-x-4 py-2 my-2 border-y-2 border-gray-800 justify-center items-center w-full">
          <p className="text-sm  text-center  text-blue-400">تومان </p>
          <p className="text-md  text-center  text-gray-200">{cost} </p>
        </div>

        <div className="h-24 overflow-y-scroll scrollbar-hide">
          <p className="text-gray-400 w-full text-right text-sm mb-4 h-full">
            {description?.split(" ").slice(0, 5).join(" ") + "..."}
          </p>
        </div>
        <div className="  absolute top-2 left-2 flex justify-between items-center">
          <span
            className={`px-2 inline-flex text-xs leading-5  rounded-full ${
              available ? " text-green-600" : " text-pink-600"
            }`}
          >
            {available ? "در دسترس" : "خارج از دسترس"}
          </span>
          <span className="text-sm  text-gray-400 px-2 ">{level}</span>
        </div>
      </div>

      <div className="flex flex-col ">
        <button
          onClick={goToDetailPage}
          className="bg-gradient-to-r from-[#7b2a6f71] to-[#8a0327]  text-white text-sm py-2 px-4 rounded"
        >
          جزئیات بیشتر
        </button>
        <button
          // onClick={handleAddToCart}
          onClick={addToCartHandler}
          className=" bg-[rgba(252,252,252,0.89)]  text-sm text-gray-900  py-2 px-4 rounded-b"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
