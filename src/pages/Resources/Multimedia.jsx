import React from 'react';
import s1 from './../../assets/Gallery/1.jpg'
import s2 from './../../assets/Gallery/2.jpg'
import s3 from './../../assets/Gallery/3.jpg'
import s4 from './../../assets/Gallery/4.jpg'
const Multimedia = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl text-red-600 font-bold text-center'><span className=' text-green-800'>OUR</span> Gallery</h1>
                <div className=' grid grid-cols-4 gap-4 mt-8'>
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                    <img src={s3} alt="" />
                    <img src={s4} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Multimedia;