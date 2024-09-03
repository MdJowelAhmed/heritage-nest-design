

const PopularProperties = () => {
    return (
        <div className="max-w-[1216px] mx-auto">
            <div className="flex justify-between mb-6">
                <h3 className="text-[32px] font-montserrat">Popular Properties</h3>
                <p className="text-[#0059B1] font-poppins">See All Property</p>
            </div>
            <div className=''>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzFANuyYwNOBsuPpNGmI9hlUJ7NdnouTQ4A&s" alt="hotel" />

                <div className="flex">
                    <h3>Appertment</h3>
                    <p>Ready to move</p>
                </div>
                <hr />
                <h2>SunnySlope Suites</h2>
            </div>
        </div>
    );
};

export default PopularProperties;