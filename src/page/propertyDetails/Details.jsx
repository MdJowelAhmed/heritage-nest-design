import React from 'react';
import { FaBath, FaBed } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdBalcony } from 'react-icons/md';

const Details = () => {
    return (
        <div className='max-w-[1216px] mx-auto mb-12'>
            <div className='w-[800px] mb-2'>
                <div className="flex justify-between gap-1 ">
                    <h3 className="font-montserrat text-xl font-semibold">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h3>
                    <h3 className="font-montserrat font-bold text-2xl">$3000000</h3>
                </div>
                <div className="flex gap-1 items-center">
                    <IoLocationOutline />
                    <address>Meadowshire Park, Greenfield, USA</address>
                </div>
            </div>
            <hr />
            <div className='mt-4 flex gap-8'>
                <div className='w-[800px] '>
                    <div className='mb-12'>
                        <img src="https://www.pymnts.com/wp-content/uploads/2016/05/Hotel-Room-Secondary-Market.jpg?w=457" alt="Hotel room" className='w-full h-96 mb-4' />
                        <div className='flex gap-4'>
                            <img src="https://i.pinimg.com/originals/61/7f/7c/617f7c6da36595b1e0727ecc8872d1de.jpg" alt="room" className='w-[290px] h-40' />
                            <img src="https://i.pinimg.com/originals/61/7f/7c/617f7c6da36595b1e0727ecc8872d1de.jpg" alt="room" className='w-[290px] h-40' />
                            <div className='relative'>
                                <img src="https://i.pinimg.com/originals/61/7f/7c/617f7c6da36595b1e0727ecc8872d1de.jpg" alt="room" className='w-[188px] h-40  linear-gradient(to top, #000000, #000000b8, #00000000)' />
                                <div className="absolute inset-0 bg-black opacity-70"></div>
                                <p className='absolute top-16 text-white left-10 font-poppins'>View more</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#F9FAFB] p-6'>
                        <h2 className='font-semibold font-montserrat mb-8 text-2xl'>Overview</h2>
                        <div className='flex gap-16 bg-[#FFFFFF] py-2 px-8 mb-6'>
                            <div className='flex gap-2 items-center'>
                                <FaBed />
                                <p>2 Beds</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaBath />
                                <p>2 Baths</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdBalcony />
                                <p>2 Balcony</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                < MdBalcony />
                                <p>Fully furnished</p>
                            </div>
                        </div>

                        <div className='flex gap-8'>
                            <div>
                                <p className='text-[#5C5C5C] font-poppins'>Carpet area</p>
                                <p className='font-medium font-poppins'>2200 sqrft </p>
                                <p className='text-[#5C5C5C] font-poppins mb-6'> $ 225 sqrft </p>
                                <p className='text-[#5C5C5C] font-poppins'>Facing</p>
                                <p className='font-medium font-poppins'>North-East </p>
                            </div>
                            <div>
                                <p className='text-[#5C5C5C] font-poppins'>Floor</p>
                                <p className='font-medium font-poppins mb-12'>Second (Out of 6th floor) </p>

                                <p className='text-[#5C5C5C] font-poppins'>Additional rooms</p>
                                <p className='font-medium font-poppins'>1 servant room & 1 gust room</p>
                            </div>
                            <div>
                                <p className='text-[#5C5C5C] font-poppins'>Transaction Type</p>
                                <p className='font-medium font-poppins mb-12'>Ready to Move </p>

                                <p className='text-[#5C5C5C] font-poppins'>Age of construction</p>
                                <p className='font-medium font-poppins'>New construction </p>
                            </div>
                            <div>
                                <p className='text-[#5C5C5C] font-poppins'>Lift</p>
                                <p className='font-medium font-poppins mb-12'>1 </p>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-[390px] '>
                    <div className='bg-[#ECF5FF] p-6 mb-8'>
                        <p className='font-poppins text-[#6B7280]'>Property value</p>
                        <h2 className='font-montserrat font-bold text-xl my-2'>300k - 310k </h2>
                        <p className='font-poppins text-[#6B7280] mb-8'>Your bid can not be than 10% of the property Minimum value.</p>

                        <div>
                            <p className='font-poppins'>Min</p>
                            <input type="text" placeholder='$ 280k' className='border-2 ml-6 pl-6' />
                            <p className='font-poppins'>Max</p>
                            <input type="text" placeholder='$ 305k' className='border-2 ml-6 pl-6' />
                        </div>

                        <ul className="timeline w-full mb-12">
                            <li>
                                <div className="timeline-start"></div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end ">$ 280k</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start"></div>
                                <div className="timeline-middle">
                                    <svg

                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end ">305k</div>
                                <hr />
                            </li>
                        </ul>

                        <button className='bg-[#0059B1] text-white  ml-20 py-1 px-3 rounded-md mx-auto'>Bid Property</button>
                    </div>
                    <img src="https://global.discourse-cdn.com/niantic/original/2X/2/2294ba85c8ca410292c2cf5bbe8751c43c95fdaa.jpeg" alt="map" className='h-[422px] w-[384]'/>
                </div>
            </div>
        </div>
    );
};

export default Details;