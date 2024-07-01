import React from 'react'
import addIcon from '../assets/addIcon.svg'

const AddPage = () => {
    return (
        <div className='w-full h-fit lg:h-[484px] flex justify-center items-center bg-[#F7FDFF] px-[24px] lg:p-0 my-[48px]'>

            <div className='w-[90%] h-[236px] lg:w-[1240px] lg:h-[284px] flex flex-col gap-[12px] lg:gap-[32px] border-2 border-gray-200 p-[24px] lg:p-[40px] bg-white rounded-[8px]'>

                {/* ADD ICON AND TITLE */}
                <div className='w-full flex justify-center lg:justify-start gap-4'>
                    <img className='w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]' src={addIcon} alt="" srcset="" />
                    <span className='font-semibold text-[18px] lg:text-[24px]'>Add Your Own</span>
                </div>

                {/* DESCRIPTION */}
                <p className='text-[12px] lg:text-[18px] leading-[20px] lg:leading-[30px]'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>

                {/* BUTTON */}
                <p className='min-w-[264px] lg:w-[121px] h-[32px] lg:h-[40px] flex justify-center items-center rounded-[8px] border-2 border-[#8064A2] text-[#8064A2] text-[12px] lg:text-[18px] font-semibold p-2'>Add new</p>

            </div>

        </div>
    )
}

export default AddPage