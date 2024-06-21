import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="w-[250px] h-[350px] mx-16 my-12  pb-3 rounded-xl  overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl ">
      <div className="relative w-full h-2.5/5">
        <img
          src={book.image_url}
          alt={book.name}
          className="w-[250px] h-[160px]  rounded-xl rounded-b-none"
        />
      </div>
      <div className="flex flex-col  items-center p-3">
        <h1 className="text-lg font-bold font-sans">{book.name}</h1>
        <p className="text-sm mb-3 font-semibold">by {book.author}</p>
        <p className="text-sm mb-3 font-semibold">Credit - {book.price}</p>
        <p className="text-sm mb-3 font-semibold">Sold By {book.seller_name}</p>
        <Link to={`/product/${book.id}`}>
          <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-0.5 hover:scale-110 hover:bg-yellow-500 rounded px-2 p-1 text-black  font-semibold bg-yellow-300 w-[100px]">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
