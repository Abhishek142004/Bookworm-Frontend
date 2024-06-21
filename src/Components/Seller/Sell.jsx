import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/AuthContext";

const Sell = () => {
  const [formData, setFormData] = useState({
    userName: "",
    bookName: "",
    authorName: "",
    category: "Romance",
    priceOrCredit: "",
    imageUrl: "",
    created_by: "",
  });

  const { isAuthenticated, User } = useAuth();

  useEffect(() => {
    if (User) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        created_by: User._id,
      }));
    }
  }, [User]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("You need to login to sell a book.");
      return;
    }

    // Send formData to the server to update the Books.json file
    fetch("https://bookworm-backend-qj4r.onrender.com/api/auth/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Book added successfully!");
        setFormData({
          userName: "",
          bookName: "",
          authorName: "",
          category: "Romance",
          priceOrCredit: "",
          imageUrl: "",
          created_by: User._id, // Update created_by with User._id
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error adding book. Please try again.");
      });
  };

  return (
    <div className="my-12 flex items-center justify-center">
      <div>
        <img
          src="/assets/F-C.jpg"
          className="h-[500px] w-auto ml-48 rounded-xl"
          alt="Reload"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[500px] mx-36 p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-3 text-center text-[#ffb703]">
          Sell Your Book
        </h2>
        <div className="mb-3 flex items-center">
          <label
            className="block w-[130px] text-gray-700 text-sm font-bold mr-2 mb-2"
            htmlFor="userName"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-3 flex items-center">
          <label
            className="block w-[130px] mr-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="bookName"
          >
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={formData.bookName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-3 flex items-center">
          <label
            className="block w-[130px] mr-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="authorName"
          >
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-3 flex items-center">
          <label
            className="block w-[130px] mr-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          >
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="History">History</option>
            <option value="Travel">Travel</option>
            <option value="Anime">Anime</option>
          </select>
        </div>
        <div className="mb-3 flex items-center">
          <label
            className="block w-[130px] mr-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="priceOrCredit"
          >
            Price
          </label>
          <input
            type="text"
            id="priceOrCredit"
            name="priceOrCredit"
            value={formData.priceOrCredit}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-3 flex items-center">
          <label
            className="block w-[130px] mr-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#219ebc] text-white py-2 px-4 rounded-md  transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
