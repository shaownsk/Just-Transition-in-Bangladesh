import React from 'react';
import { FaUserTie } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const Green = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl font-bold text-center'>Green Job Initiative in Bangladesh</h1>
                {/* Date  */}
                <div className=' flex items-center gap-1'>
                    <FaUserTie /> <p>Admin</p>  <LuCalendarDays /><p> 24 may 11 Dec</p>
                </div>
                {/* img  */}
                {/* <div className='p-5'>
                    <img className='w-full' src={img} alt="" />
                </div> */}
                <p className='text-justify mt-4'>The ILO Green Jobs initiative was piloted in Bangladesh from 2008 to 2010 as a part of the regional programme of the ILO Regional Office for Asia and the Pacific, based in BangkokDuring the first phase, several key activities and outputs were realized.</p>
                    <br />
                    <br />
                    <div>
                        <li>A series of joint advocacy and awareness workshops were successfully completed at national and regional levels for ILO constituents and partners.</li>
                        <li>Research studies included assessments and sectoral studies  in Agriculture, Construction, Renewable Energy and Waste Management. </li>
                        <li>Green jobs were created through successful public-private partnerships between ILO, Grameen Shakti and BMET, a private sector training provider. </li>
                    </div>
            </div>
        </div>
    );
};

export default Green;