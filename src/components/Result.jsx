import React from 'react';
import image from '../assets/img.png';
import profile from '../assets/profile2.jpg';
import { FaInfoCircle } from 'react-icons/fa';

const Results = () => {
  return (
    <div className="p-3   ml-24">
      <div className="w-72 h-[86dvh] bg-[#f6f4fe] border border-gray-300 flex flex-col items-center p-4 rounded-xl">
        <img
          src={image}
          alt="Image description"
          className="w-[40%] h-[70px] mb-2"
        />
        <h1 className="text-xl font-semibold text-[#5A5FBC]">Your Result!</h1>
        <p className="text-[9px] text-gray-400 font-Montserrat font-semibold">
          All your insights & details in one place
        </p>

        <div className="w-[95%] h-[70%] bg-white border-gray-300 border rounded-lg shadow-md flex flex-col   p-2 mt-4 gap-4">
          <div className="w-full flex mt-2 border bg-[#f8f8fe] rounded-md">
            {/* SVG and Button */}
            <div className="flex items-center gap-2 ml-2">
              <div className="w-8 h-8 flex bg-[#DBD8F7] justify-center items-center rounded-sm top-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <button className="bg-[#5A5FBC] text-white px-2 py-1 rounded-full text-[8px] font-semibold">
                  You've Passed
                </button>
                <div className="text-[11px] text-gray-400 font-semibold">
                  <span className="text-lg text-black font-bold">136</span>
                  /250
                </div>
              </div>
            </div>

            {/* Divider and Square */}
            <div className="flex items-center ml-7 gap-1">
              <div className="h-10 border-l-2
                border-gray-300 mr-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-7 bg-[#35a99a]  flex justify-center items-center border border-gray-300 rounded-sm">
                  <p className="text-[10px] font-bold text-white">76%</p>
                </div>
                <p className="mt-0.5 text-[8px] font-extrabold text-[#35a99a] ">
                  ACCURACY
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-17 flex flex-col bg-[#f5f4ff] rounded-md p-0.5 -mb-16">
            {/* Top Score Section */}
            <div className="flex -mb-4 border-b border-gray-600 bg-[#f8f8fe]">
              <div className="flex items-center gap-2 ml-2">
                <div className="w-8 h-8 flex bg-[#DBD8F7] justify-center items-center rounded-sm top-1">
                  <img src={profile} alt="Profile" className='border border-gray-300 border-l-2' />
                </div>
                <div>
                  <p className="font-bold text-[#5A5FBC] text-[10px]">Top Score</p>
                  <div className="text-[11px] text-gray-400 font-semibold">
                    <span className="text-lg text-black font-bold">136</span> /240
                  </div>
                </div>
              </div>
            </div>

            {/* Accuracy Section */}
            <div className="border-b-0.5 border-gray-600 my-1 mt-4"></div>

            {/* Text "by Purushottam Jha" */}
            <div className="flex gap-5">
              <p className="text-[10px] text-black mt-0.5">
                By <span className="font-bold">Purushottam Jha</span>
              </p>

              {/* Rounded Accuracy Button */}
              <button className="bg-[#35a99a] text-white px-1 py-0.5 rounded-full text-[9px] font-semibold h-4 w-20 ml-3 justify-center items-center">
                92% Accuracy
              </button>
            </div>
          </div>

          {/* Improve your Marks Section */}
          <div className="mt-14 ">
            <h1 className='font-semibold text-m font-sans'>Improve your Marks</h1>
            <p className='text-[10px] font-sans font-semibold text-gray-400'>Improve your score by practicing more.</p>
            <button className="bg-[#5A5FBC]  text-white px-2 py-1 rounded-md text-sm w-full font-semibold mt-4">
              Practice more
            </button>
          </div>
        </div>

        <div className="w-[95%] h-[45%] bg-white border-gray-300 border rounded-lg shadow-md flex flex-col  items-center pl-2 pt-2 mt-4 gap-4">
          <div className='gap-5 ml-1'>
            <h1 className='font-bold '>Revisit Paper</h1>
            <p className='text-[12px] font-sans font-semibold text-gray-400'>Challenge your friends by simply <b />
              sharing a link to ths test</p></div>

          <button className='flex justify-center items-center bg-[#5A5FBC]  p-0.5 rounded-md gap-1 w-[80%]'>
            <svg className="text-white" width="20px" height="20px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <g id="Interface / External_Link">
                <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
            <h1 className='text-white  mb-1 font-monserrat'>Visit</h1>
          </button>

          <div className='flex gap-2'>'
            <FaInfoCircle className='text-gray-400 text-sm' />
            <p className='text-[7px] font-semibold text-gray-500'>Instructions for how to upload your handwritten <br />material in given</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Results;
