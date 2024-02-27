import BookMark from "@/components/BookMark"
import Filter from "@/components/Filter"

const Bookmarks = () => {
  return (
    // <div className='absolute m-auto inset-0 w-fit h-fit'>Bookmarks</div>
         
    <>
    <div className="flex  p-8 my-48 ">
      <Filter/>
      <BookMark/>
    </div>
  </>
    )
}

export default Bookmarks