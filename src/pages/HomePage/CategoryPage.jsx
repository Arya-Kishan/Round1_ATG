import React from 'react'
import checkIcon from '../../assets/checkIcon.svg'
import locationIcon from '../../assets/locationIcon.svg'
import peoplesIcon from '../../assets/peoplesIcon.svg'
import basketIcon from '../../assets/basketIcon.svg'

const CategoryPage = () => {

    const categoryArr = [
        {
            pic: peoplesIcon,
            title: "People",
            desc: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
            btnText: 'Connect',
            color: "8064A2"
        },
        {
            pic: locationIcon,
            title: "Place",
            desc: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
            btnText: 'Meet Up',
            color: "77933C"
        },
        {
            pic: basketIcon,
            title: "Product",
            desc: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
            btnText: 'Get It',
            color: "C0504D"
        },
        {
            pic: checkIcon,
            title: "Program",
            desc: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
            btnText: 'Attend',
            color: "0096C8"
        }
    ]

    return (
        <div className='w-full h-fit px-[24px] py-[48px] lg:p-[100px] bg-[#ffffff]'>

            <div className='flex flex-wrap justify-center items-center gap-[24px]'>

                {categoryArr.map((e) => (
                    <div className={`w-[90%] h-[216px] lg:w-[608px] lg:h-[297px] flex flex-col justify-center items-center gap-[10px] p-[24px] lg:px-[44px] lg:py-[40px] border-2 border-gray-300`}>

                        {/* icons and title */}
                        <div className='lg:w-full flex justify-start items-center gap-5'>
                            <img className='w-[32px] h-[32px] lg:w-[32px] lg:h-[32px]' src={e.pic} alt="" srcset="" />
                            <span className='font-semibold text-[18px] lg:text-[24px]'>{e.title}</span>
                        </div>

                        {/* description */}
                        <p className='text-center lg:text-start h-[81px] text-[12px] lg:text-[18px] mt-[12px] lg:mt-[24px]'>{e.desc}</p>

                        {/* button */}
                        <div className='w-full lg:mt-[32px]'>
                            <p className='w-full lg:w-[121px] h-[32px] lg:h-[40px] text-[12px] lg:text-[14px] font-semibold flex justify-center items-center text-[#8064A2] border-2 border-[#8064A2] rounded-[8px]'>{e.btnText}</p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default CategoryPage