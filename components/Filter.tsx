// import React from 'react'
// import FilterCard from './FilterCard'

// export default function Filter() {
//   return (
//     <div className="hidden md:shadow-2xl h-[100%] w-3/12  py-4 px-2 my-4 mx-10 rounded-xl sticky top-48  ">
//     <FilterCard/>
//   </div>
//   )
// }

import React from 'react';
import FilterCard from './FilterCard';

export default function Filter() {
  return (
    <div className="hidden md:block shadow-2xl h-[100%]  py-4 my-4 rounded-xl sticky top-48">
      <FilterCard />
    </div>
  );
}