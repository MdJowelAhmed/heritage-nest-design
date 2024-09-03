import React from 'react';
import { CiSearch } from "react-icons/ci";

const FindProperties = () => {
    return (
        <div style={{
            backgroundImage: " url(https://static.vecteezy.com/system/resources/previews/041/461/103/non_2x/ai-generated-luxurious-hotel-room-with-a-breathtaking-view-of-the-bustling-city-below-showcasing-towering-skyscrapers-and-vibrant-city-lights-photo.jpeg)",
        }} className='h-[309px] parent-container relative'>
            <div className='w-[800px] h-96 shadow-xl bg-white  child-card absolute -top-50% left-1/2 transform -translate-x-1/2 translate-y-1/2 p-8'>
                <div>
                    <ul className='flex gap-8 text-[#0059B1]'>
                        <li className='border-b-2 border-blue-950'>Buy</li>
                        <li>Rent</li>
                        <li>PG</li>
                        <li>Plot</li>
                        <li>Commercial</li>

                    </ul>
                    <hr />
                    <div className='flex gap-4 mt-10 relative text-center justify-center'>
                        <CiSearch className='absolute left-4 top-3' />
                        <input type="text" placeholder='Search Properties' className='border-2 pl-10 py-1 w-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindProperties;