import React from 'react'

const Compare = () => {
  return (
    <div className="w-72 h-[25dvh] bg-white border border-gray-300 flex flex-col-2 gap-2 p-3 rounded-lg">
      <div className='w-4 h-4 border-2 border-gray-400  bg-white items-center justify-center rounded-sm '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="gray" className="size-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

      </div>
      <h1 className='font-Montserrat font-semibold text-sm -mt-0.5 text-gray-400'>Compare Accuracy</h1>
    </div>
  )
}

export default Compare
