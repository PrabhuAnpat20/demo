import React from 'react'

export default function FilterCard() {
  return (
    <div className="p-2 m-2 font-sans ">
    <h1 className=" px-2 text-4xl font-semibold py-2">Lists</h1>
    <ul>
      <div className="flex  border-gray-400 border-b-2 justify-between cursor-pointer">
        <li className="  px-2 py-1 text-xl ">All</li>
        <button className="  w-[40px] font-bold py-1 px-1 my-1  bg-gray-200 rounded-md">
          124
        </button>
      </div>
      <div className="flex border-gray-400 border-b-2  justify-between cursor-pointer">
        <li className=" px-2 py-1 text-xl ">WebDev</li>
        <button className=" w-[40px] font-bold  py-1 px-1 my-1  bg-gray-200 rounded-md">
          35
        </button>
      </div>
      <div className="flex border-gray-400 border-b-2  justify-between cursor-pointer">
        <li className=" px-2 py-1 text-xl ">Interships</li>
        <button className="w-[40px]  py-1 px-1 my-1 font-bold bg-gray-200 rounded-md">
          10
        </button>
      </div>
      <div className="flex border-gray-400 border-b-2  justify-between cursor-pointer">
        <li className=" px-2 py-1 text-xl  ">Helpful Tips</li>
        <button className=" w-[40px] py-1 px-1 my-1  bg-gray-200 font-bold rounded-md">
          28
        </button>
      </div>

      <div className="flex border-gray-400 border-b-2  justify-between cursor-pointer">
        <li className=" px-2 py-1 text-xl ">App Dev</li>
        <button className=" w-[40px] py-1 px-1 my-1  bg-gray-200 font-bold rounded-md">
          13
        </button>
      </div>
      <div className="flex border-gray-400 border-b-2  justify-between cursor-pointer">
        <li className=" px-2 py-1 text-xl ">News</li>
        <button className=" w-[40px] py-1 px-1 my-1  bg-gray-200 font-bold rounded-md">
          59
        </button>
      </div>
    </ul>
    <h3 className=" text-blue-500 text-center pt-3 cursor-pointer">
      show more
    </h3>
  </div>
  )
}
