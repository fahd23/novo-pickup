import React from "react";
import Wrapper from "../components/Wrapper";
import ProductCard from "./../components/ProductCard";
import RelatedProducts from "./../components/RelatedProducts";
import { HiOutlineSearch } from "react-icons/hi";
const Home = () => {
  return (
    <Wrapper className="py-10">
      <div className="flex flex-wrap items-center">
        <label className="text-lg font-semibold">Filter :</label>
        <input
          type="text"
          className="border-black border-solid border-[1px] rounded-sm py-1 px-2 md:mx-2"
        />
        <button className="p-4 py-[5px] bg-zinc-800 text-white rounded md:mx-1 md:my-0 m-1 hidden sm:flex">
          Search
        </button>
        <button className="p-3 py-[8px] bg-zinc-800 text-white rounded md:mx-2 md:my-0 m-2 sm:hidden">
          <HiOutlineSearch />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <RelatedProducts />
    </Wrapper>
  );
};

export default Home;
