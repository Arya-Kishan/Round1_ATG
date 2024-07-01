import React from 'react'
import quoteIcon from '../assets/quoteIcon.svg'
import playIcon from '../assets/playIcon.svg'
import dotIcon from '../assets/dotIcon.svg'
import girl1 from '../assets/girl1.svg'
import micIcon from '../assets/micIcon.svg'

const TestimonialPage = () => {
    return (
        <div className='w-full h-[672px] flex justify-center items-center bg-white mt-[90px] lg:my-0'>

            <div className='w-[90%] max-h-[612px] lg:w-[1240px] lg:h-[472px] bg-[#F7F5F9] border-2 rounded-[8px] p-[24px] lg:p-[40px]'>

                {/* heading testimonial */}
                <div className='w-full flex gap-[24px]'>
                    <img className='w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]' src={quoteIcon} alt="" />
                    <span className='font-semibold text-[18px] lg:text-[24px]'>Testimonials</span>
                </div>

                {/* description */}
                <p className='text-[12px] lg:text-[18px] leading-[20px] lg:leading-[30px] text-[#6D747A] mt-[12px] lg:mt-[34px]'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>

                {/* music playback and dancing pic */}
                <div className='flex flex-col lg:flex-row gap-[32px] lg:gap-[80px] mt-[24px] lg:mt-[35px]'>

                    {/* music palyback */}
                    <div className='w-[264px] h-[64px] lg:w-[776px] lg:h-[100px] flex justify-center items-center gap-[10px] lg:gap-[20px] bg-[#CCC1DA] rounded-[8px] order-2 lg:order-1'>

                        <img className='w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]' src={playIcon} alt="" srcset="" />

                        <div className='flex justify-center items-center'>
                            <img src={dotIcon} alt="" srcset="" />
                            <span className='w-[123px] lg:w-[468px] h-[2px] bg-white'></span>
                            <span className='text-[8px] lg:text-[12px] text-[#8064A2] ml-[12px]'> 00:00</span>
                        </div>

                        <div className='relative'>
                            <img className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]' src={girl1} alt="" srcset="" />
                            <img className='w-[9px] h-[12px] lg:w-[32px] lg:h-[32px]  absolute top-[40%] -left-[10%]' src={micIcon} alt="" srcset="" />
                        </div>

                    </div>

                    {/* dancing giel */}
                    <div className='h-[60px] lg:h-[100px] flex justify-center items-center gap-[24px] order-1 lg:order-2'>
                        <img className='w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]  ' src={girl1} alt="" srcset="" />
                        <p className='flex flex-col'>
                            <span className='text-[#8064A2] text-[16px] lg:text-[18px]'>Shubha Nagarajan</span>
                            <span className='text-[#0096C8] text-[12px] lg:text-[14px]'>Classical Dancer</span>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default TestimonialPage