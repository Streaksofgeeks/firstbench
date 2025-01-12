import React from 'react'

const ResponseTime = () => {
  return (
    <div className='w-[210px] h-[25dvh] bg-white border border-gray-300 p-3 rounded-md '>
      <div className=" flex flex-col-2 gap-1  rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="gray" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>




        <h1 className='font-Montserrat font-semibold text-sm -mt-0.5 text-gray-400'>Response Time</h1>
      </div>

      <div className="bg-[#5A5FBC] text-white px-2 py-0.5 rounded-sm text-[12px] w-fit mt-3 font-semibold">
        Std Time - 2min
      </div>
      <div className='mt-2 bg-[#e4e5fc] text-white px-2 py-0.5 rounded-sm text-[12px] w-full h-11 font-semibold border-2 border-dashed
       border-violet-400 flex   '>
        <h1 className='text-3xl mb-1 text-[#10a6a4]'>60</h1>
        <h1 className='mt-1 text-gray-400  text-semibold text-xl'>%</h1>
        <p className='mt-3 ml-1 text-gray-400 text-[12px]'>Ans took</p>
      </div>
      <div className='border border-gray-300 mt-2'></div>
      <h1 className='font-sans font-semibold text-xl mt-3 ml-7'>You are <span className='text-red-600'>slow</span> !</h1>
    </div>
  )
}

export default ResponseTime
