import React from 'react';

const NeedToHome = () => {
    return (
        <div className="max-w-[1216px] mx-auto mb-16">
            <div className='w-[1007px] p-8 h-[148px] bg-[#ECF5FF] ml-20 flex gap-8 items-center'>
                <div className='w-[296px]'>
                    <h2 className='font-montserrat text-xl font-bold mb-3'>Need To Home Loan?</h2>
                    <p className='text-[#535353]'>Select How much Home loan you can take</p>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <p className='p-2 border-2 bg-[#8AB3DB] w-[140px] h-[2px]'></p>
                        <p>$20K</p>
                    </div>
                    <div>
                        <p className='p-2 border-2 bg-[#8AB3DB] w-[140px] h-[2px]'></p>
                        <p>$30K</p>
                    </div>
                    <div>
                        <p className='p-2 border-2 bg-[#8AB3DB] w-[140px] h-[2px]'></p>
                        <p>$40K</p>
                    </div>
                    <div>
                        <p className='p-2 border-2 bg-[#8AB3DB] w-[120px] h-[2px]'></p>
                        <p>$50K</p>
                    </div>
                    <div>
                        <p className='p-2 border-2 bg-[#8AB3DB] w-[80px] h-[2px]'></p>
                        <p>$60K</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NeedToHome;