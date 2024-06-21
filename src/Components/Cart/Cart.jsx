import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Books from "../../Books.json"; // Assuming Books.json is in the client side

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuthenticated, User } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async (total) => {
    const parsedTotal = parseFloat(total);
    const userBalance = parseFloat(User.balance);

    if (parsedTotal <= userBalance) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://bookworm-backend-qj4r.onrender.com/api/auth/update",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: parsedTotal }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          toast(`Checkout successful! New balance: ${data.balance}`);
          navigate("/"); // Redirect to home page
        } else {
          alert("Failed to update balance");
        }
      } catch (error) {
        console.error("Error updating balance:", error);
      }
    } else {
      toast.error("Insufficient balance to proceed with checkout.");
    }
  };

  // Function to fetch cart items from backend
  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://bookworm-backend-qj4r.onrender.com/api/cart/get",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.items);
      } else {
        console.error("Failed to fetch cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Function to find product details from Books.json based on productId
  const findProductDetails = (productId) => {
    return Books.find((book) => book.id.toString() === productId.toString());
  };

  // Function to remove an item from the cart
  const removeFromCart = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://bookworm-backend-qj4r.onrender.com/api/cart/remove`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: itemId, userId: User._id }),
        }
      );

      if (response.ok) {
        fetchCartItems(); // Refresh cart items after successful removal
      } else {
        console.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const totalAmount = cartItems
    .reduce((acc, item) => {
      const productDetails = findProductDetails(item.productId);
      if (!productDetails) return acc; // Skip undefined product details
      return acc + productDetails.price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="flex justify-center my-8">
      <div className="flex flex-col w-[1000px] p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y ">
          {cartItems.map((item) => {
            const productDetails = findProductDetails(item.productId);
            if (!productDetails) return null; // Handle case where product details are not found
            return (
              <li
                key={item._id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-contain w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={productDetails.image_url}
                    alt={productDetails.name}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {productDetails.name}
                        </h3>
                        <p className="text-sm dark:text-gray-600">
                          by {productDetails.author}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          {productDetails.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => removeFromCart(productDetails.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="space-y-1 text-right">
          <pre>
            Total amount :<span className="font-semibold">{totalAmount}</span>
          </pre>
          <p className="text-sm dark:text-gray-600">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-[#023047]"
            >
              Back to shop
            </button>
          </Link>
          <button
            type="button"
            onClick={() => handleCheckout(totalAmount)}
            className="px-6 py-2 border rounded-md dark:bg-[#219ebc] dark:text-gray-50 dark:border-[#023047]"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
