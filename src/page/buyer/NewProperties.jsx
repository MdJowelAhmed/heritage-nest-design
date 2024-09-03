import React from 'react';
import { CiImageOn } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

const NewProperties = () => {
    return (
        <div className="max-w-[1216px] mx-auto mb-[76px]">
            <div >
                <div className="flex justify-between mb-6">
                    <h3 className="text-[32px] font-montserrat">New Listed Properties</h3>
                    <p className="text-[#0059B1] font-poppins">See All Property</p>
                </div>
                <div className="flex gap-8">
                    {/* 1st card  */}
                    <div className="w-[385px] p-6 shadow-md">
                        <div className="mb-6 relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzFANuyYwNOBsuPpNGmI9hlUJ7NdnouTQ4A&s" alt="hotel" className="w-full" />
                            <div className="absolute flex items-center gap-2 bg-white bottom-5 left-3 px-2">
                                <CiImageOn />
                                <span>20</span>

                            </div>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h3 className="bg-[#C5E2FF]">Appertment</h3>
                            <div className="flex items-center gap-1 ">
                                <span className="bg-[#EE6611] w-3 h-3 rounded-md"></span>
                                <p> Ready to move</p>
                            </div>
                        </div>
                        <hr />
                        <h2 className="text-xl font-montserrat font-semibold">SunnySlope Suites</h2>
                        <div className="flex items-center gap-1 font-poppins mb-8 text-[#6B7280]">
                            <IoLocationOutline />
                            <p>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <div>
                            <h3 className="font-semibold font-poppins text-[24px]">$ 250000</h3>
                        </div>
                    </div>

                    {/* 1st card  */}
                    <div className="w-[385px] p-6 shadow-md">
                        <div className="mb-6 relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzFANuyYwNOBsuPpNGmI9hlUJ7NdnouTQ4A&s" alt="hotel" className="w-full" />
                            <div className="absolute flex items-center gap-2 bg-white bottom-5 left-3 px-2">
                                <CiImageOn />
                                <span>20</span>

                            </div>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h3 className="bg-[#C5E2FF]">Appertment</h3>
                            <div className="flex items-center gap-1 ">
                                <span className="bg-[#EE6611] w-3 h-3 rounded-md"></span>
                                <p> Ready to move</p>
                            </div>
                        </div>
                        <hr />
                        <h2 className="text-xl font-montserrat font-semibold">SunnySlope Suites</h2>
                        <div className="flex items-center gap-1 font-poppins mb-8">
                            <IoLocationOutline />
                            <p>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <div>
                            <h3 className="font-semibold font-poppins text-[24px]">$ 250000</h3>
                        </div>
                    </div>

                    {/* 1st card  */}
                    <div className="w-[385px] p-6 shadow-md">
                        <div className="mb-6 relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzFANuyYwNOBsuPpNGmI9hlUJ7NdnouTQ4A&s" alt="hotel" className="w-full" />
                            <div className="absolute flex items-center gap-2 bg-white bottom-5 left-3 px-2">
                                <CiImageOn />
                                <span>20</span>

                            </div>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h3 className="bg-[#C5E2FF]">Appertment</h3>
                            <div className="flex items-center gap-1 ">
                                <span className="bg-[#EE6611] w-3 h-3 rounded-md"></span>
                                <p> Ready to move</p>
                            </div>
                        </div>
                        <hr />
                        <h2 className="text-xl font-montserrat font-semibold">SunnySlope Suites</h2>
                        <div className="flex items-center gap-1 font-poppins mb-8">
                            <IoLocationOutline />
                            <p>Meadowshire Park, Greenfield, USA</p>
                        </div>
                        <div>
                            <h3 className="font-semibold font-poppins text-[24px]">$ 250000</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProperties;