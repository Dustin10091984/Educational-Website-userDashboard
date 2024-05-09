import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import HeaderPublic from "@/components/HeaderPublic";
import { ToastContainer } from "react-toastify";
import Bg from "@/components/LandingPage/Bg";
import Footer from "@/components/Footer";
import { TbShoppingCartCog } from "react-icons/tb";
// import Cookies from 'js-cookie'
import {
  fetchProducts,
  setCategoryFilter,
  resetFilters,
} from "@/redux/features/products/productsSlice";
import ProductCard from "@/components/ProductCard";
import { initializeCart } from "@/redux/features/cart/cartSlice";
const shop = () => {
  const cartItems = useSelector((state) => state.cartR.items);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsR.entities);
  const isLoading = useSelector((state) => state.productsR.isLoading);
  const isError = useSelector((state) => state.productsR.isError);
  const filters = useSelector((state) => state.productsR.filters);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      dispatch(initializeCart(JSON.parse(cartFromStorage)));
    }
  }, [dispatch]);

  useEffect(() => {
    // const accessToken = Cookies.get('authToken')
    // if (accessToken) {
    dispatch(fetchProducts());
    // }
  }, [dispatch]);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  const filteredProducts =
    filters.category === "all"
      ? products
      : products.filter((product) => product.category === filters.category);

  // Compute unique categories from the products list
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryFilter = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <div className="">
        <ToastContainer containerId={"friendRequest"} />
      <Bg />
      <HeaderPublic />
      <div className="w-full m-auto  px-12 py-12 pt-24">
        {/* <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Products
      </h1> */}
        {/* Category Filter */}
        <div className="flex justify-center gap-10 py-4">
          <button
            onClick={() => dispatch(resetFilters())}
            className="text-white"
          >
            همه{" "}
          </button>
          {categories.map((category) => (
            <button
              className="text-white"
              key={category}
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-12 pt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default shop;
