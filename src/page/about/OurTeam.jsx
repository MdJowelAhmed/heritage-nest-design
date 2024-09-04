import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const OurTeam = () => {
    return (
        <div className='max-w-[1216px] mx-auto mb-16'>
            <div className='flex items-center gap-2 mb-4'>
                <p className='h-1 w-20 bg-green-600'></p>
                <p> Our story </p>
            </div>
            <h2 className='font-montserrat font-bold text-4xl mb-16'>Discover the Faces Behind Our Success</h2>
            <div className='flex gap-8'>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/positive-male-student-messages-social-networks-with-friends-has-pleasant-smile_273609-8221.jpg" alt="kabir" className='w-[384px] h-[417px] object-cover'/>
                    <IoIosArrowBack className='absolute left-1 top-1/2 text-4xl bg-blue-400 p-2 rounded-full'/>
                </div>
                <img src="https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg" alt="abul"  className='w-[384px] h-[417px] object-cover'/>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/handsome-male-entrepreneur-using-laptop_176420-17902.jpg" alt="babul"  className='w-[384px] h-[417px] object-cover'/>
                    <IoIosArrowForward className='text-4xl bg-blue-400 p-2 rounded-full absolute top1/2 right-1 bottom-60'/>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;