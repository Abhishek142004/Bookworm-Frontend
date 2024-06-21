import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await fetch(
        "https://bookworm-backend-qj4r.onrender.com/api/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Feedback Submitted ");
        setFormData({
          email: "",
          message: "",
        });
      } else {
        toast.error("error");
        setFormData({
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Jammu,India+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-16 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md mr-16">
            <h2 className="text-[#fb8500]  text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className=" hidden lg:block leading-relaxed mb-5 text-[#023047] ">
              We are always looking to improve. Your thoughts and suggestions
              help us serve you better.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4 justify-center">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-[#023047]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-[#219ebc] focus:border-[#023047] focus:ring-2 focus:ring-[#fb8500] text-base outline-none text-[#023047] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-[#023047]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-[#219ebc] focus:border-[#023047] focus:ring-2 focus:ring-[#fb8500] h-32 text-base outline-none text-[#023047] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white hover:bg-[#219ebc] border-0 py-2 px-6 focus:outline-none bg-[#023047] rounded text-lg"
              >
                Submit Feedback
              </button>
              <p className="text-xs text-[#023047] mt-3">
                Join our community and stay updated.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
