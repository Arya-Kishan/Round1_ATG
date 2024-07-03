import React, { useState } from 'react'
import checkIcon from '../../assets/checkIcon.svg'
import check2Icon from '../../assets/check2Icon.svg'
import locationIcon from '../../assets/locationIcon.svg'
import location2Icon from '../../assets/location2Icon.svg'
import peoplesIcon from '../../assets/peoplesIcon.svg'
import group2Icon from '../../assets/group2Icon.svg'
import basketIcon from '../../assets/basketIcon.svg'
import cart2Icon from '../../assets/cart2Icon.svg'
import plusIcon from '../../assets/plusIcon.svg'
import '../../App.css'

const AddList = () => {

  const [data, setData] = useState({ people: false, place: false, product: false, program: false })

  const categoryArr = [
    {
      pic: peoplesIcon,
      pic2: group2Icon,
      title: "people",
      desc: "An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.",
      btnText: 'Connect',
      color: "8064A2"
    },
    {
      pic: locationIcon,
      pic2: location2Icon,
      title: "place",
      desc: "An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
      btnText: 'Meet Up',
      color: "77933C"
    },
    {
      pic: basketIcon,
      pic2: cart2Icon,
      title: "product",
      desc: "An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.",
      btnText: 'Get It',
      color: "C0504D"
    },
    {
      pic: checkIcon,
      pic2: check2Icon,
      title: "program",
      desc: "An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.",
      btnText: 'Attend',
      color: "0096C8"
    }
  ]

  const handleMouseEnter = (category) => {
    if (category == 'people') {
      setData({ people: true, place: false, product: false, program: false })
    } else if (category == "place") {
      setData({ people: false, place: true, product: false, program: false })
    }
    else if (category == "product") {
      setData({ people: false, place: false, product: true, program: false })
    }
    else if (category == "program") {
      setData({ people: false, place: false, product: false, program: true })
    }

  }

  const handleMouseLeave = (category) => {
    setData({ people: false, place: false, product: false, program: false })
  }


  return (
    <div className='w-full h-dvh flex justify-center bg-[#EBEDF0]'>

      <div className='w-[840px] h-[542px] flex flex-col bg-[#ffffff] p-[40px] mt-[24px]'>

        <div className='flex justify-center items-center gap-[14px] lg:gap-[16px] mb-[32px]'>
          <img className='w-[26px] h-[26px]' src={plusIcon} alt="" srcset="" />
          <h1 className='capitalize font-semibold text-[20px] lg:text-[24px]'>add your listing</h1>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-[24px]'>

          {categoryArr.map((e) => (
            <div onMouseEnter={() => handleMouseEnter(e.title)} onMouseLeave={() => handleMouseLeave(e.title)} className={`${e.title} w-[90%] h-fit lg:w-[360px] lg:h-[175px] flex flex-col justify-center items-center gap-[10px] px-[16px] py-[16px] lg:py-[24px] border-2 rounded-[8px]`}>

              {/* icons and title */}
              <div className='w-full flex justify-start lg:items-center gap-[24px]'>

                {!data[e.title] ? <img className='w-[32px] h-[32px] lg:w-[32px] lg:h-[32px]' src={e.pic} alt="" srcset="" /> : <img className='w-[32px] h-[32px] lg:w-[32px] lg:h-[32px]' src={e.pic2} alt="" srcset="" />}

                <span className='font-semibold text-[18px] lg:text-[24px] capitalize'>{e.title}</span>

              </div>

              {/* description */}
              <p className='text-start h-[81px] text-[12px] mt-[12px] lg:mt-[24px]'>{e.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default AddList