

import React from 'react';
import img from '../assets/bgImg.jpg';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Button = () => {
  const { page } = useSelector((state) => state.page);
   
  return (
    <div className="relative h-[300px]">
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className=" text-stone-900 text-4xl font-bold mb-4">{page}</h1>
        <div className="flex flex-row items-center justify-center text-lg text-black">
          <Link to="/" className="mr-2">
            Shop
          </Link>
          <IoIosArrowForward className="text-xl" />
          <Link to="/cart" className="ml-2">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Button;

