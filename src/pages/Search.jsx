import React from "react";

export const Search = () => {
  return (
    <form>
      <div className="flex relative items-center">
        <input
          className="pl-10 pr-4 py-2 border rounded"
          type="text"
          placeholder="What are you loocking for?"
        />{" "}
        <i className="bx bx-search absolute left-3 text-gray-300"></i>
        <div className="flex p-2 gap-1">
          <i className="bx bx-heart text-xl"></i>
          <i class="bx bx-cart text-xl"></i>
        </div>
      </div>
    </form>
  );
};
