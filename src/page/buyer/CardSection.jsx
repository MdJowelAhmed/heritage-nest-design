import React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';

const CardSection = () => {
    return (
        <div className='max-w-[1216px] mt-48 mx-auto flex gap-[56px] mb-16'>
            <div className='bg-[#FDF0E7] p-6 w-[280px]'>
                <h2 className='text-[#D95D0F] font-bold font-montserrat text-4xl'>2K+</h2>
                <p className='font-poppins text-[#1F2937] font-medium mb-8'>New Flat Listed</p>
                <div className='flex justify-between text-[#EE6611] items-center'>
                    <p>View All</p>
                    <IoArrowDownOutline />
                </div>
            </div>
            <div className='bg-[#ECF5FF] p-6 w-[280px]'>
              
                <p className='font-poppins text-[#1F2937] font-medium my-8'>New Flat Listed</p>
                <div className='flex justify-between text-[#0059B1] items-center'>
                    <p>View All</p>
                    <IoArrowDownOutline />
                </div>
            </div>
            <div className='bg-[#FDF0E7] p-6 w-[280px]'>
                <h2 className='text-[#D95D0F] font-bold font-montserrat text-4xl'>2K+</h2>
                <p className='font-poppins text-[#1F2937] font-medium mb-8'>New Flat Listed</p>
                <div className='flex justify-between text-[#EE6611] items-center'>
                    <p>View All</p>
                    <IoArrowDownOutline />
                </div>
            </div>
            <div className='bg-[#ECF5FF] p-6 w-[280px]'>
                <h2 className='text-[#0059B1] font-bold font-montserrat text-4xl'>2K+</h2>
                <p className='font-poppins text-[#1F2937] font-medium mb-8'>New Flat Listed</p>
                <div className='flex justify-between text-[#0059B1] items-center'>
                    <p>View All</p>
                    <IoArrowDownOutline />
                </div>
            </div>
        </div>
    );
};

export default CardSection;