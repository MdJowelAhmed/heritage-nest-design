import React from 'react';
import { BiCricketBall, BiTennisBall } from 'react-icons/bi';
import { BsHouseGearFill } from 'react-icons/bs';
import { GiAmericanFootballHelmet, GiHappySkull, GiLift, GiSecurityGate, GiWaterSplash } from 'react-icons/gi';
import { IoIosWifi } from 'react-icons/io';
import { MdBatterySaver, MdOutlineSendToMobile } from 'react-icons/md';
import { PiParkDuotone } from 'react-icons/pi';
import { TbBallAmericanFootball, TbCurrencyManat } from 'react-icons/tb';
import { WiFire } from 'react-icons/wi';

const Amenities = () => {
    return (
        <div className='max-w-[1216px] mx-auto bg-[#F9FAFB] p-6'>
            <h2 className='text-2xl font-montserrat font-semibold mb-8'>Amenities</h2>
            <div className='ml-6 font-montserrat'>
                <div className='grid grid-cols-4 grid-rows-6 gap-8 p-6'>
                    <li className='items-center flex gap-2'> <MdBatterySaver /> Power Backup</li>
                    <li className='items-center flex gap-2'> <GiLift /> Lift</li>
                    <li className='items-center flex gap-2'> <BsHouseGearFill /> club House</li>
                    <li className='items-center flex gap-2'> <TbCurrencyManat /> Gymnasium</li>
                    <li className='items-center flex gap-2'> <PiParkDuotone /> park</li>
                    <li className='items-center flex gap-2'> <MdBatterySaver /> Family intercon</li>
                    <li className='items-center flex gap-2'> <GiSecurityGate /> security</li>
                    <li className='items-center flex gap-2'> <GiWaterSplash /> Water storage</li>
                    <li className='items-center flex gap-2'> <GiLift /> contract</li>
                    <li className='items-center flex gap-2'> <TbCurrencyManat /> Gymnasium</li>
                    <li className='items-center flex gap-2'> <IoIosWifi  /> Wifi service</li>
                    <li className='items-center flex gap-2'> <MdBatterySaver /> Outdoor tennis</li>
                    <li className='items-center flex gap-2'> <GiHappySkull />
                   Garden</li>
                    <li className='items-center flex gap-2'> <WiFire /> Hosport</li>
                    <li className='items-center flex gap-2'> <MdOutlineSendToMobile /> Wifi Mobile</li>
                    <li className='items-center flex gap-2'> <TbBallAmericanFootball /> Football</li>
                    <li className='items-center flex gap-2'> <GiAmericanFootballHelmet /> Power Backup</li>
                    <li className='items-center flex gap-2'> <PiParkDuotone /> park</li>
                    <li className='items-center flex gap-2'> <IoIosWifi  /> Wifi service</li>
                    <li className='items-center flex gap-2'> <BiTennisBall /> Outdoor tennis</li>
                    <li className='items-center flex gap-2'> <BiCricketBall /> Cricket</li>
                    <li className='items-center flex gap-2'> <TbCurrencyManat /> Gymnasium</li>
                    <li className='items-center flex gap-2'> <GiLift /> contract</li>
                    <li className='items-center flex gap-2'> <TbBallAmericanFootball /> Football</li>
                </div>
            </div>
        </div>
    );
};

export default Amenities;