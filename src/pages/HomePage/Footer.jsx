import React from 'react'
import fb from '../../assets/fbIcon.svg'
import twitter from '../../assets/twitterIcon.svg'
import insta from '../../assets/instaIcon.svg'
import pin from '../../assets/pinIcon.svg'
import gmail from '../../assets/gmailIcon.svg'
import youtube from '../../assets/youtubeIcon.svg'
import telegram from '../../assets/telegramIcon.svg'
import mail from '../../assets/mailIcon.svg'

const Footer = () => {

    const hobby = ["About Us", "Our Services", "Work with Us", "FAQ", "Contact Us"]

    const how = ["Sign Up", "Add a Listing", "Claim Listing", "Post a Query", "Add a Blog Post", "Other Queries"]

    const links = ["Listings", "Blog Posts", "Shop/Stoe", "Community"]

    const footerArr = [
        {
            title: "HobbyQueue",
            arr: hobby
        },
        {
            title: "How Do I",
            arr: how
        },
        {
            title: "Quick Links",
            arr: links
        },
    ]

    const imgArr = [fb, twitter, insta, pin, gmail, youtube, telegram, mail]

    return (
        <div className='flex p-[24px] lg:py-[60px] lg:px-[102px] bg-white'>

            <div className='flex flex-col lg:flex-row gap-[32px] lg:gap-[190px]'>

                {footerArr.map((e) => (
                    <div className='w-[110px] flex flex-col gap-[8px] text-[14px]'>
                        <p className='font-bold mb-[8px] text-[12px] lg:text-[14px]'>{e.title}</p>
                        {e.arr.map((elem) => (<p className=' text-[9px] sm:text-[12px] lg:text-[14px]'>{elem}</p>))}
                    </div>
                ))}


                <div>

                    <p className='font-bold text-[14px]'>Social Media</p>

                    <div className='flex gap-[16px] lg:gap-[24px] mt-[16px] mb-[50px]'>{imgArr.map((e) => (<img src={e} />))}</div>

                    <span className='font-bold text-[14px]'>Invite Friends</span>

                    <div className='flex justify-start items-center border-2 border-[#8064A2] rounded-[8px] overflow-hidden mt-[16px]'>
                        <input className='w-full p-2 border-none outline-none' type="text" placeholder='Email ID' />
                        <span className='w-[60px] h-[40px] text-[12px] text-white flex justify-center items-center bg-[#8064A2]'>Invite</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer