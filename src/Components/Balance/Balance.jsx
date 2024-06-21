import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Balance = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    balance: 0,
  });

  const [addAmount, setAddAmount] = useState(""); // State to store the amount to add

  const { User } = useAuth();

  useEffect(() => {
    if (User) {
      setUser({
        username: User.username,
        email: User.email,
        balance: User.balance,
      });
    }
  }, [User]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleAddMoney = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Convert amount to currency subunits (e.g., 1 INR = 100 paise)
    const amountInPaise = Number(addAmount) * 100;

    const options = {
      key: "rzp_test_Oa95jLPD02g5KJ", // Replace with your Razorpay Key ID
      amount: amountInPaise.toString(), // Amount in currency subunits. Convert amount to paise
      currency: "INR",
      name: "Acme Corp", // Your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: user.username, // User's name
        email: user.email, // User's email
        contact: "9000090000", // User's phone number (optional)
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleAmountChange = (e) => {
    setAddAmount(e.target.value);
  };

  return (
    <div className="flex items-center h-[600px] w-[400px] lg:w-full">
      <div className="w-[300px] lg:w-[450px] h-[370px] ml-12 lg:ml-48 my-12 pb-3 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl">
        <div className="relative w-full h-2.5/5">
          <img
            src="/assets/bal.png"
            alt="reload"
            className="w-[350px] h-[200px] rounded-xl rounded-b-none"
          />
        </div>
        <div className="flex flex-col items-center p-3">
          <h1 className="text-lg mb-4 font-extrabold font-sans text-[#023047]">
            Name: {user.username}
          </h1>
          <p className="text-lg mb-3 bg-[#ffb703]  border-gray-500 border-2  px-2 p-1 rounded font-semibold text-white">
            Balance - {user.balance}
          </p>
          <div className="flex ">
            <input
              name="add"
              type="number"
              value={addAmount}
              onChange={handleAmountChange}
              placeholder="Enter amount to add"
              className=" mx-2 p-1 border border-gray-300 rounded"
            />
            <button
              className="bg-[#219ebc] px-2 p-1 rounded"
              onClick={handleAddMoney}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-[600px] hidden lg:block  w-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/balance.svg)",
        }}
      ></div>
    </div>
  );
};

export default Balance;
