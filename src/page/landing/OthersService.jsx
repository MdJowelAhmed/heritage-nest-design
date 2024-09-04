import { AiOutlineHome } from "react-icons/ai";


const OthersService = () => {
    return (
        <div className="container px-10 mb-16">
            <h1 className="text-4xl font-montserrat font-bold text-center mb-16 text-[#333333]">Others Service</h1>

            <div className="flex justify-center gap-8">
                <div className="w-96 bg-[#ECF5FF] flex  p-6 gap-8">
                    <AiOutlineHome className="w-20 h-12 rounded-sm px-1 bg-[#EE6611] text-white" />
                    <div>
                        <h2 className="text-[24px] font-montserrat font-semibold mb-4 text-[#333333]">Advanced Property Search</h2>
                        <p className="text-[#818181] font-poppins text-sm  font-medium">Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div className="w-96 bg-[#ECF5FF] flex  p-6 gap-8">
                    <AiOutlineHome className="w-20 h-12 rounded-sm px-1 bg-[#EE6611] text-white" />
                    <div>
                        <h2 className="text-[24px] font-montserrat font-semibold mb-4 text-[#333333]">Advanced Property Search</h2>
                        <p className="text-[#818181] text-sm  font-poppins font-medium">Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
                <div className="w-96 bg-[#ECF5FF] flex  p-6 gap-8 ">
                    <AiOutlineHome className="w-20 h-12 rounded-sm px-1 bg-[#EE6611] text-white" />
                    <div>
                        <h2 className="text-[24px] font-montserrat font-semibold mb-4 text-[#333333]">Advanced Property Search</h2>
                        <p className="text-[#818181] text-sm font-poppins font-medium">Effortlessly find your dream property with advanced search filters.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OthersService;