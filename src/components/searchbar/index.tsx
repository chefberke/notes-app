"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "@/lib/features/notesSlice";

function Searchbar() {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(searchText));
  }, [searchText, setSearchText]);

  return (
    <div>
      <div className="relative">
        <input
          onChange={(e: any) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search your notes..."
          className="border-gray-300 px-5 py-3 rounded-xl w-[50rem] outline-none max-xl:w-[35rem] max-lg:w-[25rem] max-md:w-[15rem] max-sm:w-[13rem] max-sm:px-2 shadow-md max-sm:h-full"
          type="text"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Searchbar;
