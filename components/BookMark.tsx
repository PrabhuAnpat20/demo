import React from 'react'
import BookCard from './BookCard'
export default function BookMark() {
  return (
    <div className=" mx-auto md:ml-32 md:mr-10 ">
      <div>
        <p className=" font-bold text-2xl mb-1  md:text-4xl "> Internships</p>
        <hr className=" bg-[#134467] h-1 w-3/5 md:w-[400px]" />
        <div className=" flex  my-3">
          <img src="book.png" alt="" className=" h-4 my-auto" />
          <p className=" ml-2">Bookmarks</p>
        </div>
      </div>

      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  )
}
