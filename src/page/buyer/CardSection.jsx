import React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';

const CardSection = () => {
    return (
        <div className='max-w-[1216px] mt-48 mx-auto flex gap-[56px]'>
            <div className='bg-[#FDF0E7] p-6 w-70'>
                <h2 className='text-[#D95D0F] font-bold font-montserrat'>2K+</h2>
                <p className='font-poppins text-[#1F2937] font-medium mb-8'>New Flat Listed</p>
                <div className='flex justify-between text-[#EE6611] items-center'>
                    <p>View All</p>
                    <IoArrowDownOutline />
                </div>
            </div>
            <div className='bg-[#FDF0E7] p-6 w-70'>
                <h2 className='text-[#D95D0F] font-bold font-montserrat'>2K+</h2>
                <p className='font-poppins text-[#1F2937] font-medium'>New Flat Listed</p>
                <div className='flex justify-between text-[#EE6611]'>
                    <p>View All</p>
                    <IoArrowDownOutline />
                </div>
            </div>
        </div>
    );
};

export default CardSection;