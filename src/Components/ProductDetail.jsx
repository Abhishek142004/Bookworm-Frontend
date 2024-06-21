import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Books from "../Books.json";
import { useAuth } from "../store/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const { User } = useAuth();
  const { productId } = useParams();
  const [productdt, setProductDt] = useState({
    userId: "",
    productId: productId,
    quantity: 1,
  });

  useEffect(() => {
    if (User) {
      setProductDt((prevProductDt) => ({
        ...prevProductDt,
        userId: User._id,
      }));
    }
  }, [User]);

  const product = Books.find((book) => book.id.toString() === productId);

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Need to Login");
      }
      const response = await fetch(
        "https://bookworm-backend-qj4r.onrender.com/api/cart/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productdt),
        }
      );

      if (response.ok) {
        toast.success("Item added to cart successfully");
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-8 bg-white md:py-16">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 xl:gap-2">
          <div className="shrink-0 max-w-md lg:max-w-lg m">
            <img
              className="w-full"
              src={product.image_url}
              alt={product.name}
            />
          </div>
          <div className="p-6 rounded bg-gray-100">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {product.name}
            </h1>
            <div className="text-sm text-gray-400">by {product.author}</div>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex  ">
              <span className="text-sm lg:text-lg font-bold text-gray-900 mr-8 md:mr-1">
                Buy at Credit {product.price}
              </span>
              <div className=" border-2 lg:block hidden border-gray-800  h-[20px]"></div>
              <span className="text-sm lg:text-lg font-bold text-gray-900">
                Category: {product.category}
              </span>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                onClick={addToCart}
                className="text-white mt-4 sm:mt-0 bg-[#219ebc] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>
            <hr className="my-6 md:my-8 border-gray-400" />
            <div className="mb-4">
              Thank you for your purchase! Your support means the world to us.
              Enjoy your new book, and happy reading!
            </div>
            <p className="text-lg font-semibold">Abhishek Yadav</p>
            <p className="text-sm text-gray-400">Owner, Bookworm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
