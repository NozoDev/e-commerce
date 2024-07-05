import React, { useState } from "react";

export const Search = () => {
  const [counter, setCounter] = useState(0);
  const addHandleClick = () => {
    if (counter >= 100) return;
    setCounter(counter + 1);
  };
  return (
    <form className="">
      <div className="flex relative items-center cursor-pointer">
        <input
          className="pl-10 pr-4 py-2 border rounded cursor-pointer"
          type="text"
          placeholder="What are you loocking for?"
        />{" "}
        <i className="bx bx-search absolute left-3 text-gray-300"></i>
        <div className="flex p-2 gap-4 items-center">
          <i
            onClick={addHandleClick}
            className="bx bx-heart text-2xl animate-bounce hover:text-red-400"
          >
            {counter}
          </i>
          <i class="bx bx-cart text-2xl"></i>
        </div>
      </div>
    </form>
  );
};
