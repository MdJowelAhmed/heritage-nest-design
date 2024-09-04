import { CiImageOn } from "react-icons/ci";
import { FaRegSquare } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


const PopularProperties = () => {
    return (
        <div className="max-w-[1216px] mx-auto mb-[76px]">
            <div >
                <div className="flex justify-between mb-6">
                    <h3 className="text-[32px] font-montserrat">Popular Properties</h3>
                    <p className="text-[#0059B1] font-poppins">See All Property</p>
                </div>
                <div className="flex gap-8">
                    {/* 1st card  */}
                    <div className="w-[385px] p-6 shadow-md">
                        <div className="mb-6 relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8u9kRmO8Q0_g8qRQ5Ka_IkXoV03QtStUMw&s" alt="hotel" className="w-[385px] h-[200px]" />
                            <IoIosArrowBack className='absolute left-1 top-1/2 text-4xl bg-blue-400 p-2 rounded-full'/>
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

                    {/* 2nd card  */}
                    <div className="w-[385px] p-6 shadow-md">
                        <div className="mb-6 relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJPMyQRuFO6ADL4V5fNeK80N48vmuKwZdXQ&s" alt="hotel" className="w-[385px] h-[200px]" />
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

                    {/* 3th card  */}
                    <div className="w-[385px] p-6 shadow-md">
                        <div className="mb-6 relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkakFZ2cK_DHjcLtWlB71cmSthnZx4AmZeTNXdgsa4sMe2r1TLzhm4iCG-Ppsk8CQnnQ&usqp=CAU" alt="hotel" className="w-[385px] h-[200px]" />
                            <IoIosArrowForward className='text-4xl bg-blue-400 p-2 rounded-full absolute top1/2 right-0 bottom-20' />
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

export default PopularProperties;