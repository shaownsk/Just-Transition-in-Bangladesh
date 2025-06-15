import React from 'react';
import { FaUserTie } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import img from '../../assets/how we can/Advocacy.jpg'


const Advocacy = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl font-bold text-center'>Advocacy, Training and Workshop</h1>
                {/* Date  */}
                <div className=' flex items-center gap-1'>
                    <FaUserTie /> <p>Admin</p>  <LuCalendarDays /><p> 24 may 05 Dec</p>
                </div>
                {/* img  */}
                <div className='p-5'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <p className='text-justify mt-4'>The initiative will drive change—on mindsets, lives, and the environment—at the national and international levels, finding and spreading shared messages, amplifying voices and Workers’ and employers’ organizations advocating for and contributing to a just transition and green jobs at local, national  levels, Civil society organizations contributing to a just transition. </p>

            </div>
        </div>
    );
};

export default Advocacy;