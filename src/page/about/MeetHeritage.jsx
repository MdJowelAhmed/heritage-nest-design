import React from 'react';

const MeetHeritage = () => {
    return (
        <div className='max-w-[1216px] mx-auto mb-16  h-[304px] flex justify-between'>
            <div className='w-[696px]'>
                <div className='flex items-center gap-2 mb-4 text-[#EE6611]'>
                    <p className='h-1 w-20 bg-green-600'></p>
                    <p className='font-poppins'> Meet the Team For Book Consultation </p>
                </div>
                <h2 className='font-montserrat font-bold text-4xl leading-[48px] mb-6'>Meet the stewards of your heritage journey
                </h2>
                <p className='font-poppins text-[#6B7280] mb-[56px]'>each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
                </p>
                <button className='bg-[#0059B1] text-white py-2 px-6 rounded-md'>Book Consultation Now</button>
            </div>
            <img src="https://img.freepik.com/free-photo/hand-holding-small-house-with-tree-top_123827-24001.jpg" alt="hand in house" className='w-[384px] rounded-md'/>
        </div>
    );
};

export default MeetHeritage;