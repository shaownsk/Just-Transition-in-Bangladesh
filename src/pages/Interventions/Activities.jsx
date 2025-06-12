import React from 'react';
import c1 from './../../assets/Activities/a1.webp';
import c2 from '../../assets/Publications/Just-Transition-Poster.jpg';
import c3 from '../../assets/Activities/c3.jpg'
import c4 from '../../assets/Activities/c4.jpg'
import c5 from '../../assets/Activities/c5.jpg'
import c6 from '../../assets/Activities/c6.jpg'
import c7 from '../../assets/Activities/c7.jpg'
import c8 from '../../assets/Activities/c8.jpg'


const Activities = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl font-bold text-center'>Activities</h1>
                <div className='grid grid-cols-3 gap-4 pt-5'>
                    {/* card-1 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c1}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Global warming to eat up 5pc work hours by 2030: Experts</h2>
                            <p>The RMG factories should control heat exposure through environment-friendly methods. The workers at readymade garment (RMG) factories suffer from physical discomforts due to excessive heat exposure inflicted by global warming which eats up a significant amount of their work hours.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                className=' h-60'
                                src={c2}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Publication Flyer and Poster on '' Just Transition''</h2>
                            <p>OSHE foundation with partnership of FES, Bangladesh published an educational poster on Just Transition to raise mass awareness among the trade union people as part of campaign actions on this issue.

                                Please have a look at the poster to learn about it's message.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c3}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Network Building Alliance Meeting (Second Phase)</h2>
                            <p>With aiming to build a Network Alliance with trade unions, environmental activists, civil social organizations..</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c4}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Network and Alliances Building Meeting</h2>
                            <p>Dialogue Build-up Meeting on Environment and Climate Change (First Phase) with aiming of to raise a strong social movement against climate change, demands towards green jobs, labor rights for climate vulnerable people</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-5 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c5}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">FES, Bangladesh- OSHE Foundation Project Kick-off Meeting</h2>
                            <p>Project Kick-off Meeting was held to launch the project towards initiative for Just Transition in Bangladesh</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-6 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c6}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Press Conference on Initiatives for Just Transition in Bangladesh</h2>
                            <p>A press conference was held prior to COP 27 to upheld the demand for climatic vulnerable and displaced labor</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-7 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c7}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">National Dialogue Just Transition and Social Protection for Climate Adaptation in Bangladesh</h2>
                            <p>A National Dialogue Just Transition and Social Protection for Climate Adaptation was held by OSHE Foundation in associated with FES, Bangladesh</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* card-8 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={c8}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">National Dialogue on Just Transition in Bangladesh: Sustainable Green Skills for Climate Adaptation</h2>
                            <p>OSHE Foundation in associated with FES, Bangladesh has organized National Dialogue on Just Transition in Bangladesh: Sustainable Green Skills for Climate Adaptation</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Activities;