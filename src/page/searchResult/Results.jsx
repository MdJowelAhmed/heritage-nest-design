import { IoLocationOutline } from "react-icons/io5";


const Results = () => {
    return (
        <div className="max-w-[1216px] mx-auto">
            <div className="w-[820px] ml-20">
                <div className=" flex gap-8 mb-2">
                    <h2 className="bg-[#0059B1] text-white w-[176px] px-2">Properties(400)</h2>
                    <h2 className="bg-[#ECF5FF]  w-[176px] text-[#4B5563] px-2">New Projects(400)</h2>
                    <h2 className="bg-[#ECF5FF]  w-[176px] text-[#4B5563] px-2">Pre-launch offers</h2>
                </div>
                <hr />
                <h2 className="text-[24px] my-8 font-medium">400 results for rental   </h2>

                <div className="flex gap-8 w-[800px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijDUNfjCyxXZ3bgJDkZr8H7Nyzy2TsKFPIQ&s" alt="hotel pic" className="h-[184px] w-40" />

                    <div>
                        <div className="flex justify-between gap-1">
                            <h3 className="font-montserrat text-xl font-semibold">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h3>
                            <h3 className="font-montserrat font-bold text-2xl">$3000000</h3>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                                <IoLocationOutline />
                                <address>Meadowshire Park, Greenfield, USA</address>
                            </div>
                            <button className="border-2 px-2">Bid Property</button>
                        </div>
                        <div className="divider divider-start font-medium font-poppins">Property Details</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;