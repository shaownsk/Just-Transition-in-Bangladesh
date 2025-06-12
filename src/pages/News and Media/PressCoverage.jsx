import React from 'react';

const PressCoverage = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl text-red-600 font-bold text-center'>Press Coverage & Media Report</h1>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Date</th>
                                <th>Content</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>15 Jun 2022</td>
                                <td>
                                    Team Europe Initiative: Joint engagement towards a green and just energy transition in Bangladesh</td>
                                <a href="https://en.prothomalo.com/environment/joint-engagement-towards-a-green-and-just-energy-transition-in-bangladesh">https://en.prothomalo.com/environment/joint-engagement-towards-a-green-and-just-energy-transition-in-bangladesh</a>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>20 Dec 2022</td>
                                <td>Insufficient and complex climate financing process is one of the obstacles in Bangladesh's environment-friendly development. Experts said this in a workshop organized at the NEC conference room in the capital yesterday.</td>
                                <a href="https://www.ittefaq.com.bd/624974/%E0%A6%9C%E0%A6%9F%E0%A6%BF%E0%A6%B2-%E0%A6%9C%E0%A6%B2%E0%A6%AC%E0%A6%BE%E0%A7%9F%E0%A7%81-%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A7%9F%E0%A6%A8-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0">The complex climate financing process is one of the obstacles in Bangladesh's environment-friendly development</a>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>23 Jan 2023</td>
                                <td>
                                    Bangladesh could avoid billions in climate damages and lost GDP growth this decade by making timely investments to withstand the projected impact of climate change, according to a new study by Standard Chartered.
                                    The study titled "The Adaptation Economy" revealed that without investing a minimum of $1.2 billion in adaptation by 2030, Bangladesh could face projected damages and lost GDP growth of $11.6 billion – nearly 10 times that amount.</td>
                                <a href="https://www.thedailystar.net/business/economy/news/bangladesh-can-save-billions-early-investment-3227876">https://www.thedailystar.net/business/economy/news/bangladesh-can-save-billions-early-investment-3227876</a>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default PressCoverage;