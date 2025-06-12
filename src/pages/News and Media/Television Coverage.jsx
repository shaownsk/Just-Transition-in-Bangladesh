import React from 'react';

const TelevisionCoverage = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl text-red-600 font-bold text-center'><span className=' text-green-800'>OUR</span> Gallery</h1>
                {/* Documentary */}
                <div className='mt-5'>
                    <h1 className='font-bold text-xl'>Documentary</h1>
                    <div className=' grid grid-cols-2 gap-4 mt-8'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/X25cVrKH9mI?si=9Q_mZ94q1UTiskmD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XnhEZJx9mJE?si=1ZIFrgXz-X06QbOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                {/* Learn more about Just Transition */}
                <div className='mt-5'>
                    <h1 className='font-bold text-xl'>Learn more about Just Transition</h1>
                    <div className=' grid grid-cols-4 gap-4 mt-8'>
                        <iframe  src="https://www.youtube.com/embed/tfga1_GVhGI?si=-NrpDH4bK34bED1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/myBTUMOIYU8?si=OXuV45b7tk6vRZr1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/NrNQzCjI8A4?si=khMadnuuXvUTNXrL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/EVznQrR5soQ?si=7QUFCKBt4dSSvoOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </div>
                {/* News Coverage */}
                <div className='mt-5'>
                    <h1 className='font-bold text-xl'>News Coverage</h1>
                    <div className=' grid grid-cols-4 gap-4 mt-8'>
                        <iframe  src="https://www.youtube.com/embed/2omkLczyn74?si=50Pwcm1mxE_UucJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/V2efnSjnNIg?si=R_qzacWdmOHbeOnd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/ICjbMwnXe1E?si=ix7xziVcq530uSQ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe  src="https://www.youtube.com/embed/8CZinCR7n2A?si=aLJWQzTZR18RvsU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default TelevisionCoverage;