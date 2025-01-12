import React from 'react'


const Improvements = () => {
  return (
    <div className='w-[210px] h-[25dvh] bg-white border border-gray-300 p-3 rounded-md '>
      <div className=" flex flex-col-2 gap-1  rounded-lg">
        <svg fill="#BABABA" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          width="15px" height="15px" viewBox="0 0 453.946 453.946"
          xml:space="preserve">
          <g>
            <path fill="#BABABA" stroke="#000000" stroke-width="4" d="M453.946,42.138V72.4h-129.12v109.396H215.879v121.064H102.895v108.947H0v-30.264h72.631V272.599h112.984V151.534h108.947
		V42.138H453.946z M173.419,85.298L90.541,96.132c-1.212,0.154-2.155,1.103-2.323,2.308c-0.171,1.203,0.482,2.373,1.596,2.861
		l33.277,14.431l-55.218,55.212c-1.052,1.064-1.058,2.772,0,3.831l19.115,19.115c1.052,1.058,2.767,1.052,3.824,0l55.219-55.219
		l14.431,33.272c0.481,1.111,1.652,1.773,2.855,1.602c0.605-0.089,1.138-0.37,1.537-0.769c0.408-0.405,0.686-0.949,0.768-1.561
		l10.835-82.881c0.109-0.833-0.169-1.664-0.769-2.261C175.097,85.487,174.255,85.197,173.419,85.298z"/>
          </g>
        </svg>



        <h1 className='font-Montserrat font-semibold text-sm -mt-0.5 text-gray-400'>Improvements</h1>
      </div>

      <h1 className='mt-3 text-sm'>Subject Understanding</h1>
      <div className='mt-2  '>
        <div className='flex space-x-1'>
          <button className="bg-[#1CB9B4] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Geography
          </button>
          <button className="bg-[#EAB308] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Politics
          </button>
          <button className="bg-[#1CB9B4] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Current Affairs
          </button>
        </div>
        <div className='flex space-x-1 mt-2'>
          <button className="bg-[#B91C1C] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            General Studies
          </button>
          <button className="bg-[#1CB9B4] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Mathematics
          </button>

        </div>
        <div className='flex space-x-1 mt-2'>
          <button className="bg-[#C5C9CF] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Social Studies
          </button>
          <button className="bg-[#B91C1C] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            English Literature
          </button>

        </div>
        <div className='flex space-x-1 mt-2'>
          <button className="bg-[#EAB308] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Indian History
          </button>
          <button className="bg-[#1CB9B4] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
            Economics
          </button>

        </div>
      </div>

    </div>
  )
}

export default Improvements
