import React from 'react'

const Suggestions = () => {
  return (
    <div className='w-[210px] h-[25dvh] bg-white border border-gray-300 p-3 rounded-md '>
      <div className=" flex flex-col-2 gap-1  rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>





        <h1 className='font-Montserrat font-semibold text-sm -mt-0.5 text-gray-400'>Suggestions</h1>
      </div>
      <div className='flex flex-cols-3 gap-2'>
        <div className="bg-[#5A5FBC] text-white px-2  rounded-sm text-[12px] w-fit mt-3 font-semibold">
          Q. 1-12
        </div>
        <div className="bg-[#5A5FBC] text-white px-2  rounded-sm text-[12px] w-fit mt-3 font-semibold">
          Q. 12-32
        </div>
        <div className="bg-[#5A5FBC] text-white px-1  rounded-sm text-[12px] w-fit mt-3 font-semibold">
          Q. 32-40
        </div>
      </div>
      <div className='flex flex-cols-3 gap-2'>
        <div className='mt-2 bg-[#e4e5fc] text-white px-2 py-0.5 rounded-sm text-[12px] w-fit h-fit font-semibold border-2 border-dashed
       border-violet-400 flex   '>
          <h1 className='text-xl mb-1 text-black'>60</h1>
          <h1 className='mt-2 text-black  text-semibold text-md'>sec</h1>

        </div>
        <div className='mt-2 bg-[#e4e5fc] text-white px-2 py-0.5 rounded-sm text-[12px] w-fit h-fit font-semibold border-2 border-dashed
       border-violet-400 flex   '>
          <h1 className='text-xl mb-1 text-black'>1.5</h1>
          <h1 className='mt-2 text-black  text-semibold text-md'>min</h1>

        </div>
        <div className='mt-2 bg-[#e4e5fc] text-white px-2 py-0.5 rounded-sm text-[12px] w-fit h-fit font-semibold border-2 border-dashed
       border-violet-400 flex   '>
          <h1 className='text-xl mb-1 text-black'>3</h1>
          <h1 className='mt-2 text-black  text-semibold text-md'>min</h1>

        </div>

      </div>
      <div className='p-2  flex flex-cols-3'>
        <h1 className='font-semibold mr-8 text-[#059794]'>Easy </h1>
        <h1 className='font-semibold text-yellow-400 mr-5'>Medium</h1>
        <h1 className='font-semibold text-red-600'>Hard</h1>
      </div>
    </div>
  )
}

export default Suggestions
