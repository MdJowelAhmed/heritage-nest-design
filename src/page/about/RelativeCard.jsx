import React from 'react';

const RelativeCard = () => {
    return (
        <div className='max-w-[1216px] mx-auto'>
            <div className='relative h-[583px] mb-16'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PDisiaLKB8-ObK5QkvyJeJ5sqte11NJ2BnhiddPPdEk1ZQNxTXqCW7qsHzuOBnj75gI&usqp=CAU" alt="house" className='w-[904px] h-[455px]' />

                <div className='p-8 bg-[#ECF5FF] w-[592px] h-[270px] absolute right-2 -bottom-1'>
                    <div className='flex items-center gap-2'>
                        <p className='h-1 w-20 bg-green-600'></p>
                        <p> Our story </p>
                    </div>
                    <h2 className='text-3xl font-bold font-montserrat leading-[48px] mb-6'>Efficient and Transparent
                        Home Buying Solutions</h2>
                    <p className='font-poppins text-sm'>In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
                </div>
            </div>

            <div className='relative h-[583px] mb-16'>
                <img src="https://cdn.create.vista.com/api/media/small/132127534/stock-photo-business-people-shaking-hands-finishing-up-a-meeting" alt="mushafa" className='float-right w-[904px] h-[455px]' />

                <div className='p-8 bg-[#FDF0E7] w-[592px] h-[270px] absolute left-2 -bottom-1'>
                    <div className='flex items-center gap-2'>
                        <p className='h-1 w-20 bg-green-600'></p>
                        <p> Our story </p>
                    </div>
                    <h2 className='text-3xl font-bold font-montserrat leading-[48px] mb-6'>Efficient and Transparent
                        Home Buying Solutions</h2>
                    <p className='font-poppins text-sm'>To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default RelativeCard;