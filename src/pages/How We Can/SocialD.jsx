import React from 'react';
import img from '../../assets/how we can/SocialD.jpg'
import { FaUserTie } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const SocialD = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl font-bold text-center'>Social dialogue</h1>
                {/* Date  */}
                <div className=' flex items-center gap-1'>
                    <FaUserTie /> <p>Admin</p>  <LuCalendarDays /><p> 24 may 09 Sep</p>
                </div>
                {/* img  */}
                <div className='p-5'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <p className='text-justify mt-4'>A strong social consensus is crucial for transformative change. The initiative will strengthen mechanisms among governments, employers’ and workers’ organizations, and other key stakeholders and avoid disruptions of the social fabric, National or subnational governments with concrete commitments to implement just transition and green jobs measures in their own countries, or to support other countries </p>

            </div>
        </div>
    );
};

export default SocialD;