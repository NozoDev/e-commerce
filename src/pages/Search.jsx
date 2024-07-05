import React from "react";

export const Search = () => {
  return (
    <form className="">
      <div className="flex relative items-center cursor-pointer">
        <input
          className="pl-10 pr-4 py-2 border rounded cursor-pointer"
          type="text"
          placeholder="What are you loocking for?"
        />{" "}
        <i className="bx bx-search absolute left-3 text-gray-300"></i>
        <div className="flex p-2 gap-4">
          <i className="bx bx-heart text-xl animate-bounce hover:text-red-400"></i>
          <i class="bx bx-cart text-xl"></i>
        </div>
      </div>
    </form>
  );
};
