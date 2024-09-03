import React from 'react';
import { AiOutlineDollar, AiTwotonePropertySafety } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FindProperties = () => {
    return (
        <div style={{
            backgroundImage: " url(https://static.vecteezy.com/system/resources/previews/041/461/103/non_2x/ai-generated-luxurious-hotel-room-with-a-breathtaking-view-of-the-bustling-city-below-showcasing-towering-skyscrapers-and-vibrant-city-lights-photo.jpeg)",
        }} className='h-[309px] parent-container relative max-w-[1440px] mx-auto'>
            <div className='w-[870px] h-[350px] shadow-xl bg-white  child-card absolute -top-30% left-1/2 transform -translate-x-1/2 translate-y-1/4 p-8 rounded-sm '>
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
                        <input type="text" placeholder='Search Properties' className='border-2 pl-10 py-1 w-full mb-[46px]' />
                    </div>

                    <div className='flex gap-8 mb-8'>
                        {/* location  */}
                        <div>
                            <div className='flex  items-center mb-4 gap-2'>
                                <IoLocationOutline />
                                <h3>Location</h3>
                            </div>
                            <div className='relative'>
                                <input type="text" className='border-2 bg-[#ECF5FF]' />
                                <MdOutlineKeyboardArrowDown className='absolute top-1 left-36' />
                            </div>
                        </div>

                        {/* property type  */}
                        <div>
                            <div className='flex  items-center mb-4 gap-2'>
                                <AiTwotonePropertySafety />
                                <h3>property Type</h3>
                            </div>
                            <div className='relative'>
                                <input type="text" className='border-2 bg-[#ECF5FF]' />
                                <MdOutlineKeyboardArrowDown className='absolute top-1 left-36' />
                            </div>
                        </div>

                        {/* budget  */}
                        <div>
                            <div className='flex  items-center mb-4 gap-2'>
                                <AiOutlineDollar />
                                <h3>Budget</h3>
                            </div>
                            <div className=''>
                                <input type="text" className='border-2 bg-[#ECF5FF]' />

                            </div>
                        </div>
                    </div>
                    <Link to='/search'>
                        <div className='flex bg-[#0059B1] py-2 text-center items-center justify-center gap-4 rounded-md mx-auto'>

                            <p className='font-montserrat w-full text-white'>Find Property</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FindProperties;