import React from 'react';
import p1 from './../../assets/Publications/Just-Transition-Poster.jpg'
import p2 from './../../assets/Publications/JT-Project-flyer(1).jpg'
const Publications = () => {
    return (
        <div>
             <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                            <h1 className=' text-2xl font-bold text-center'>Relevant research, <span className=' text-red-600'>information & documents</span></h1>
                            <div className=' grid grid-rows-1 gap-4 mt-8'>
                                <img src={p1} alt="" />
                                <img src={p2} alt="" />
                            </div>
            
                        </div>
        </div>
    );
};

export default Publications;