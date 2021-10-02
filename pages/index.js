import { useState } from "react"

export default function Home() {
  const [carousel,setCarousel] = useState([])
  return (
    <>
    <div
      id='navbar'
      className='flex flex-wrap justify-between py-3 w-[100vw] bg-gray-700 '
    >
      <div className='flex flex-col text-white px-3'>
        <a href='#' >Arifa Khan</a>
        <a href='#' >Academy of Youth</a>
      </div>
      <div className='flex text-white px-6 gap-10 justify-between items-center'>
        <div className='flex flex-wrap gap-5'>
          <a href='#' className='navlink'>About Us</a>
          <a href='#' className='navlink'>Projects</a>
          <a href='#' className='navlink'>Talents</a>
          <a href='#' className='navlink'>Submit Job</a>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href='#' className='navlink'>Login</a>
          <a href='#' className='navlink'>Register</a>
        </div>
      </div>
    </div>
    <div id="header" className=' flex m-1'>
      <div className="flex w-[100%] min-h-[15rem] bg-gray-500 m-4 text-center"></div>
    </div>
    <div id="content" className='flex flex-wrap m-1 justify-around'>
      <div className="flex min-w-[10rem] w-[15rem] m-4 min-h-[10rem] bg-gray-300"></div>
      <div className="flex min-w-[10rem] w-[15rem] m-4 min-h-[10rem] bg-gray-300"></div>
      <div className="flex min-w-[10rem] w-[15rem] m-4 min-h-[10rem] bg-gray-300"></div>
      <div className="flex min-w-[10rem] w-[15rem] m-4 min-h-[10rem] bg-gray-300"></div>
    </div>
    </>
  )
}
