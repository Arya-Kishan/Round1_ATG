import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import searchIcon from "../assets/searchIcon.svg"
import searchIcon1 from "../assets/searchIcon1.svg"
import hamIcon from "../assets/hamIcon.svg"
import bookMarkIcon from "../assets/bookMarkIcon.svg"
import notificationIcon from "../assets/notificationIcon.svg"
import cartIcon from "../assets/cartIcon.svg"
import exploreIcon from "../assets/exploreIcon.svg"
import downSelectIcon from "../assets/downSelectIcon.svg"
import hobbyIcon from "../assets/hobbyIcon.png"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-[90%] lg:w-auto m-auto h-[48px] lg:h-[80px] flex justify-between lg:justify-center items-center font-poppins bg-white shadow-nav'>

            {/* logo */}
            <img className='w-[156px] h-[32px] lg:w-[293px] lg:h-[60px]' src={logo} alt="" srcset="" />

            {/* input box */}
            <div className='hidden lg:flex w-[300px] h-[40px] rounded-[8px] justify-center items-center ml-[35px]'>
                <input className='w-full h-full bg-[#EBEDF0]  rounded-tl-[8px] rounded-bl-[8px] p-2 border-none outline-none' type="text" placeholder='Search Here...' />
                <p className='w-[40px] h-full bg-[#8064A2] rounded-tr-[8px] rounded-br-[8px] flex justify-center items-center'><img className='w-[16px] h-[16px]' src={searchIcon} alt="" srcset="" /></p>
            </div>

            {/* explore and hobbies */}
            <div className='hidden lg:flex gap-[24px] h-[24px] ml-[90px] text-black font-medium'>

                <div onClick={() => setToggle(!toggle)} className='w-[107px] flex gap-[4px] relative'>
                    <img className='w-[24px] h-full' src={exploreIcon} alt="" srcset="" />
                    <p>Explore</p>
                    <img className='w-[24px] h-full' src={downSelectIcon} alt="" srcset="" />
                    {toggle && <div className='absolute -bottom-[229px] left-0 flex flex-col text-[#6D747A] z-10'>
                        <p className='lg:w-[220px] lg:h-[42px] bg-white flex justify-center items-center p-[12px] border-b-[1px] border-[#CED4DA]'>people - community</p>
                        <p className='lg:w-[220px] lg:h-[42px] bg-white flex justify-center items-center p-[12px] border-b-[1px] border-[#CED4DA]'>places - venus</p>
                        <p className='lg:w-[220px] lg:h-[42px] bg-white flex justify-center items-center p-[12px] border-b-[1px] border-[#CED4DA]'>programs - events</p>
                        <p className='lg:w-[220px] lg:h-[42px] bg-white flex justify-center items-center p-[12px] border-b-[1px] border-[#CED4DA]'>products - store</p>
                        <p className='lg:w-[220px] lg:h-[42px] bg-white flex justify-center items-center p-[12px] border-b-[1px] border-[#CED4DA]'>blogs</p>
                    </div>}
                </div>

                <div className='w-[107px] flex gap-[4px]'>
                    <img className='w-[24px] h-full' src={hobbyIcon} alt="" srcset="" />
                    <p>Hobbies</p>
                    <img className='w-[24px] h-full' src={downSelectIcon} alt="" srcset="" />
                </div>

            </div>

            {/* iocns bell */}
            <div className='flex gap-[24px] ml-[24px]'>
                <img className='block lg:hidden' src={searchIcon1} alt="" srcset="" />
                <img className='hidden lg:block' src={bookMarkIcon} alt="" srcset="" />
                <img src={notificationIcon} alt="" srcset="" />
                <img className='block lg:hidden' src={hamIcon} alt="" srcset="" />
                <img className='hidden lg:block' src={cartIcon} alt="" srcset="" />
            </div>

            {/* SIGN IN */}
            <div className='hidden w-[112px] h-[40px] lg:flex justify-center items-center border-[2px] border-[#8064A2] rounded-[8px] text-[#8064A2] ml-[24px]'>
                Sign In
            </div>

        </div>
    )
}

export default Navbar