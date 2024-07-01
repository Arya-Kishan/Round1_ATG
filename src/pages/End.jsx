import React from 'react'
import bigImg3 from "../assets/bigImg3.svg"
import bigImg4 from "../assets/bigImg4.svg"

const Hobby = () => {
    return (
        <div className='w-full h-[267px] lg:h-[662px] bg-[#F7FDFF] flex flex-col justify-center items-center lg:items-start p-[23px] lg:p-[100px]'>

            <p className='w-[90%] lg:w-auto text-[18px] lg:text-[36px] font-medium italic'>Your <span className='text-[#8064A2]'>Hobby</span>, Your <span className='text-[#0096C8]'>Community</span></p>

            <div className='w-[90%]' >
            <p className='w-[104px] h-[28px] lg:w-[147px] lg:h-[46px] flex justify-center items-center bg-[#8064A2] font-semibold text-[14px] lg:text-[20px] mt-[24px] lg:mt-[30px] text-white rounded-[8px] p-2'>Get Started</p>
            </div>

            <div className='flex justify-center gap-[17px] lg:gap-[71px] mt-[48px] lg:mt-[100px]'>

                <img className='w-[40%] lg:w-auto lg:h-auto' src={bigImg3} alt="" srcset="" />
                <img className='w-[40%] lg:w-auto lg:h-auto' src={bigImg4} alt="" srcset="" />

            </div>



        </div>
    )
}

export default Hobby