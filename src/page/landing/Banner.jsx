import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero h-[544px]"
            style={{
                backgroundImage: "linear-gradient(to top, #000000, #000000b8, #00000000), url(https://images.pexels.com/photos/6000576/pexels-photo-6000576.jpeg?cs=srgb&dl=pexels-mmrshanto70-6000576.jpg&fm=jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                    <h1 className="mb-8 text-6xl font-montserrat font-bold">Your Portal to India's Exquisite Real Estate</h1>
                    <p className="mb-5 font-poppins font-medium">
                    Seamlessly connecting you to the heartbeat of India's prime properties.
                    </p>
                   <div>
                    <p className='bg-[#0059B1] px-6 py-4 w-72'>Find Property</p>
                   </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;