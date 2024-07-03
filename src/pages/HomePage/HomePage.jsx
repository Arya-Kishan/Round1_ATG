import React, { useState } from 'react'
import homeImg1 from '../assets/homeImg1.svg'
import homeImg2 from '../assets/homeImg2.svg'
import googleIcon from '../assets/googleIcon.svg'
import faceBookIcon from '../assets/faceBookIcon.svg'
import lockIcon from '../assets/lockIcon.png'
import showIcon from '../assets/showIcon.svg'
import hideIcon from '../assets/hideIcon.svg'

const HomePage = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='w-full flex flex-col lg:flex-row pt-[32px] lg:pt-[100px] text-start'>

            <div className='w-full h-full flex justify-center items-center pl-1 lg:pl-[100px]'>

                <div className='w-[90%] lg:max-w-[707px] h-fit lg:h-[578px] flex flex-col justify-center items-center'>

                    <p className='w-full text-black font-semibold italic text-[18px] lg:text-[36px]'>Explore your <span className='text-[#0096C8]'>hobby</span> or <span className='text-[#8064A2]'>passion</span></p>

                    <p className='text-[12px] lg:text-[14px] mt-[16px] lg:mt-[32px] leading-[20px] lg:leading-[30px]'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. <span className='hidden lg:block'>Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span>
                    </p>

                    <p className='hidden lg:block mt-[16px] leading-[30px]'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>

                    <div className='hidden lg:flex mt-[80px]'>

                        <img className='w-[50%] lg:w-[336px] lg:h-[216px]' src={homeImg1} alt="" srcset="" />
                        <img className='w-[50%] lg:w-[336px] lg:h-[216px]' src={homeImg2} alt="" srcset="" />

                    </div>

                </div>

            </div>

            <div className='w-full flex justify-center '>

                <div className='flex flex-col w-[90%] lg:w-[410px] lg:h-[434px]'>

                    {/* SIGN AND JOIN BUTTON */}
                    <p className='flex justify-center lg:justify-start gap-[32px] font-semibold text-[16px] lg:text-[20px] text-[#8064A2] mt-[30px] lg:mt-0'>
                        <span onClick={() => setToggle(false)} className={`drop-shadow-lg shadow-black p-1 ${!toggle && "border-b-2 border-[#8064A2]"}`}>Sign In</span>
                        <span onClick={() => setToggle(true)} className={`drop-shadow-lg shadow-black p-1 ${toggle && "border-b-2 border-[#8064A2]"}`}>Join In</span>
                    </p>

                    {/* CONTINUE WITH GOOGLE AND FB */}
                    <div className='flex flex-col gap-[16px] mt-[32px] order-3 lg:order-1'>
                        <div className='h-[32px] lg:h-[40px] flex justify-center items-center relative border-2 border-[#8064A2] rounded-lg'>
                            <img className='absolute top-[50%] -translate-y-[50%] left-[24px]' src={googleIcon} alt="" />
                            <p className='text-center'>Continue with google</p>
                        </div>

                        <div className='h-[32px] lg:h-[40px] flex justify-center items-center relative border-2 border-[#8064A2] rounded-lg'>
                            <img className='absolute top-[50%] -translate-y-[50%] left-[24px]' src={faceBookIcon} alt="" />
                            <p className='text-center'>Continue with facebook</p>
                        </div>
                    </div>

                    {/* OR CONNECT WITH */}
                    <div className='flex justify-center items-center gap-[8px] mt-[28px] order-2 lg:order-2'>
                        <span className='w-full bg-[#CED4DA] h-[2px]'></span>
                        <p className='w-full text-[12px] lg:text-[14px]'>Or connect with</p>
                        <span className='w-full bg-[#CED4DA] h-[2px]'></span>
                    </div>

                    {/* INPUTS EMAIL AND PASSWORD AND REMEMBER ME AND FORGOT PASSWORD f */}
                    <div className='flex flex-col gap-4 lg:gap-[24px] mt-[24px] order-1 lg:order-3'>

                        {/* INPUTS EMAIL AND PASSWORD */}
                        <div className='flex flex-col gap-[16px]'>
                            {/* INPUT EMAIL*/}
                            <input className='w-full h-[32px] lg:h-[40px] border-2 border-gray-200 p-2 outline-none rounded-[8px]' type="text" placeholder='Email' />

                            {/* INPUT PASSWORD*/}
                            <div className='flex justify-center items-center w-full h-[32px] lg:h-[40px] border-2 border-gray-200  rounded-[8px] relative'>
                                <input className='w-full h-[24px] lg:h-[36px] p-2 border-none outline-none' type="text" placeholder='Password' />
                                <img className='w-[16px] h-[16px] mr-[12px]' src={hideIcon} alt="" srcset="" />
                                {toggle && <p className='absolute -bottom-[20px] right-0 text-[12px]'>Password Strength</p>}
                            </div>
                        </div>

                        {/* REMEMBER ME OR FORGOT PASSWORD */}
                        {!toggle && <>
                            <div className='w-full flex justify-between items-center text-[12px] lg:text-[16px]'>

                                {/* REMEMBER ME */}
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <input type="checkbox" name="" id="" />
                                    <span>Remember</span>
                                </div>

                                {/* FORGOT PASSWORD */}
                                <div className='flex justify-center items-center gap-[8px]'>
                                    <img className='w-[16px] h-[16px]' src={lockIcon} alt="" />
                                    <span>Forgot Password</span>
                                </div>

                            </div>

                            <p className='flex justify-center items-center mt-[24px] h-[32px] lg:h-[40px] border-2 border-[#8064A2] rounded-[8px]'>Continue</p>
                        </>}

                    </div>

                    {toggle && <p className='hidden lg:flex justify-center items-center mt-[42px] h-[40px] border-2 bg-[#8064A2] rounded-[8px] order-4'>Agree and Continue</p>}


                </div>

            </div>

            <div className='lg:hidden flex justify-center items-center lg:justify-normal lg:items-start mt-[40px] lg:mt-[80px]'>

                <img className='w-[40%] lg:w-[336px] lg:h-[216px]' src={homeImg1} alt="" srcset="" />
                <img className='w-[40%] lg:w-[336px] lg:h-[216px]' src={homeImg2} alt="" srcset="" />

            </div>

        </div>
    )
}

export default HomePage