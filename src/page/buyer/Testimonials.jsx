import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { MdOutlineStarBorder } from 'react-icons/md';

const Testimonials = () => {
    return (
        <div className='max-w-[1216px] mx-auto mb-20'>
            <h1 className='text-[40px] font-montserrat font-bold mb-12 text-center'>Testimonials</h1>
            <div className='flex gap-8'>
                <div className='w-[592px] p-8 bg-[#ECF5FF]'>
                    <div className='list-none flex text-center justify-center mb-9'>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className=' text-4xl'><MdOutlineStarBorder /></li>
                    </div>
                    <p className='font-poppins text-[#818181] mb-9 text-center'>The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.</p>

                    <div className='text-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s" alt="profile pic" className='h-16 w-16 rounded-full mx-auto' />
                        <h3 className='text-xl font-semibold font-montserrat'>Jowel Ahmed</h3>
                    </div>
                </div>
                <div className='w-[592px] p-8 bg-[#ECF5FF]'>
                    <div className='list-none flex text-center justify-center mb-9'>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className='text-[#FEC84B] text-4xl'><IoStarSharp /></li>
                        <li className=' text-4xl'><MdOutlineStarBorder /></li>
                    </div>
                    <p className='font-poppins text-[#818181] mb-9 text-center'>The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.</p>

                    <div className='text-center'>
                        <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" alt="profile pic" className='h-16 w-16 rounded-full mx-auto' />
                        <h3 className='text-xl font-semibold font-montserrat'>Tony Stark</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;