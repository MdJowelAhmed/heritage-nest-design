import React from 'react';
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div
            className="hero h-[544px] mb-20"
            style={{
                backgroundImage: "linear-gradient(to top, #000000, #000000b8, #00000000), url(https://images.pexels.com/photos/6000576/pexels-photo-6000576.jpeg?cs=srgb&dl=pexels-mmrshanto70-6000576.jpg&fm=jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                    <h1 className="mb-8 text-6xl font-montserrat font-bold leading-[72px]">Your Portal to India's Exquisite Real Estate</h1>
                    <p className="mb-16 font-poppins font-medium">
                        Seamlessly connecting you to the heartbeat of India's prime properties.
                    </p>
                    <div className='flex bg-[#0059B1] px-6 py-4 w-60 items-center justify-center gap-4 rounded-md mx-auto'>
                        <CiSearch />
                        <p className='font-montserrat'>Find Property</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;