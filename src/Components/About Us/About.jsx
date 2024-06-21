import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="body-font">
        <div className="container px-2 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-lg tracking-widest font-medium title-font mb-1 text-[#023047] ">
              Welcome to BookWorm
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#ffb703]">
              Unleashing the Power of Books
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#023047]">
              Our mission is to connect readers with their next great adventure.
              Whether you're into romance, horror, fantasy, history, or any
              other genre, we have something for everyone. Our passion for books
              drives us to provide a seamless and enjoyable shopping experience
              for all book lovers.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#fb8500]">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-[#023047]">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#023047]">
                We strive to be the guiding light for readers, leading them to
                new literary horizons. Our mission is to illuminate the path to
                your next favorite book.
              </p>
              <a className="inline-flex items-center text-[#219ebc]">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#fb8500]">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-[#023047]">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#023047]">
                BookWorm acts as a catalyst for your reading journey. We bring
                together diverse genres and stories, igniting curiosity and a
                lifelong love for reading.
              </p>
              <a className="inline-flex items-center text-[#219ebc]">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#fb8500]">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-[#023047]">
                Neptune
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#023047]">
                Dive into the depths of knowledge with BookWorm. Like the vast,
                mysterious oceans of Neptune, our collection of books offers
                endless exploration and discovery.
              </p>
              <a className="inline-flex items-center text-[#219ebc]">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-[#fb8500]">
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-[#023047]">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4 text-[#023047]">
                We understand the deep emotional connection between readers and
                their books. Our carefully curated selection aims to touch your
                soul.
              </p>
              <a className="inline-flex items-center text-[#219ebc]">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <Link to="/about/contact">
            <button className="flex mx-auto mt-8 text-white py-2 px-8 rounded text-lg hover:bg-[#219ebc] bg-[#023047]">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
