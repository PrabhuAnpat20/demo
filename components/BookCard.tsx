import React from 'react'

export default function BookCard() {
  return (
    <>
    <div className=" shadow-xl mt-3  rounded-3xl   ">
      <div className=" flex h-[150px] sm:h-[200px] md:h-[250px]">
        <img
          src="pic.jpg"
          alt=""
          className="     rounded-tl-3xl rounded-bl-3xl "
        />
        <div className=" mx-5 my-auto  ">
          <p className=" font-bold text-sm px-3 sm:text-xl md:text-2xl ">React.js Developer</p>
          <hr className=" bg-[#134467] h-1 w-full" />
          <p className="   font-medium text-[7px]  my-4 sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            excepturi nisi perspiciatis eius labore ut itaque omnis. Iusto,
            repellendus sed! Quaerat, ut voluptas dolores exercitationem
            impedit provident dolorem neque commodi minima praesentium, maxime
            odit dolor ipsum amet sequi pariatur similique consequuntur velit
            quo accusamus dolore. Asperiores reiciendis consequatur facere
            porro at eaque. Ea eaque ad reiciendis, voluptatibus ipsum
            similique dolore?
          </p>
        </div>
      </div>
    </div>
  </> 
  )
}
