import React from 'react';
import s1 from "./../assets/slide/s1.png"
import s2 from "./../assets/slide/s2.png"
import s3 from "./../assets/slide/s3.png"
import s4 from "./../assets/slide/s4.png"
import s5 from "./../assets/slide/s5.png"
import logo1 from "./../assets/patner-logo/bftuc-logo.jpg"
import logo2 from "./../assets/patner-logo/bspan-logo.jpg"
import logo3 from "./../assets/patner-logo/frid-logo.png"
import logo4 from "./../assets/patner-logo/Ituc-logo.jpg"
import logo5 from "./../assets/patner-logo/LIE-logo.jpg"
import { NavLink } from 'react-router';


const Home = () => {
    return (
        <div>
            <section>

                <div class="carousel w-full pt-5 ">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src={s1} class="w-full" />
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide5" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={s2} class="w-full" />
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={s3} class="w-full" />
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src={s4} class="w-full" />
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide5" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" class="carousel-item relative w-full">
                        <img src={s5} class="w-full" />
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                {/* Latest news: */}
                <div class="bg-blue-900 h-10">
                    <div class="w-10/12 mx-auto flex">
                        <p class="bg-red-700 w-30 text-center h-10 text-lg pt-1 text-white"> Latest news: </p>
                        <marquee behavior="" direction="" class="pt-1 text-white text-lg"> hello bangladesh</marquee>
                    </div>
                </div>


            </section>
            {/* climate actions start */}
            <div class="my-10 w-11/12 mx-auto ">
                <h1 class="text-center text-3xl font-bold text-green-800">Climate Actions for Just Transition in Bangladesh</h1>

                <div class="grid grid-cols-2 my-10 gap-x-10 items-center ">
                    <p className='text-lg text-justify'>Bangladesh is recognized worldwide as one of the countries most vulnerable in relation to global warming and climate change. This is due to its unique geographical location, dominance of floodplains, low elevation from sea, high population density and overwhelming dependence on nature.
                        <br />The industry and workers of Bangladesh at coastal areas and river sides in agriculture and fishery sector has already identified as most vulnerable group in relation to impacts of global warming in Bangladesh.<br />Combating global warming is a work place issue as workplaces burn energy consumes resources and generates waste. <br />
                        Globally, the industry alone is responsible for over half of carbon dioxide emissions increasing the greenhouse effects every year. Making workplaces sustainable is the key to make jobs and productivity sustainable.

                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kmC9V_KMLaw?si=ZXmWvtoH9Y-gyMlP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <button class="btn btn-sm bg-red-500 text-white">READ MORE</button>
            </div>
            {/* Activities & Action */}
            <section class="bg p-10">
                <div>
                    <h1 class="text-4xl font-bold text-center text-white">How We Can</h1>
                </div>
                {/* carousel */}
                <div class="carousel w-full">
                    <div id="slide-1" class="carousel-item relative w-full">
                        {/* cards */}
                        <div class="grid grid-cols-4 gap-6 w-11/12 mx-auto p-2 mt-16">
                            {/* card-1 */}
                            <div class="card bg-base-100 shadow-sm h-auto">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Social dialogue</h2>
                                    <p class="text-justify">The initiative will strengthen mechanisms
                                        among governments, employers' and
                                        workers' organizations, and other key
                                        stakeholders and avoid disruptions of the
                                        social fabric.</p>
                                    <div class="card-actions">
                                        <NavLink to='/SocialD'><button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button></NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* card-2  */}
                            <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Capacity development</h2>
                                    <p>The initiative will support governments,
                                        employers' and workers' organizations as
                                        they develop their strategies to advance
                                        climate and decent work goals.</p>
                                    <div class="card-actions">
                                        <NavLink to='/capacity'><button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button></NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* card-3  */}
                            <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Advocacy, Training and Workshop</h2>
                                    <p>The initiative will drive change-on
                                        mindsets, lives, and the environment-at
                                        the national and international levels,
                                        finding and spreading shared messages
                                        and amplifying voices.</p>
                                    <div class="card-actions">
                                        <NavLink to='/Advocacy'><button class="btn btn-primary  bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button></NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* card-4 */}
                            <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Green Job Initiative in Bangladesh</h2>
                                    <p>The ILO Green Jobs initiative was piloted
                                        in Bangladesh from 2008 to 2010 as a part
                                        of the regional programme of the ILO
                                        Regional Office for Asia and the Pacific,
                                        based in Bangkok</p>
                                    <div class="card-actions">
                                        <NavLink to='/Green_Job'><button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide-2" class="btn btn-circle">❮</a>
                            <a href="#slide-2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* slide-2  */}
                    <div id="slide-2" class="carousel-item relative w-full">
                        <div class="grid grid-cols-4 gap-6 w-11/12 mx-auto p-2 mt-16">
                            {/* s2-card-1 */}
                            <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Network Building Alliance</h2>
                                    <p>Dialogue Build-up Network on Environment
                                        and Climate Change</p>
                                    <div class="card-actions">
                                        <button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white"><NavLink to=''>READ MORE</NavLink></button>
                                    </div>
                                </div>
                            </div>
                            {/* card-2 */}
                            <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Campaign for Just Transition</h2>
                                    <p>campaign seeks to influence the decision
                                        making progress of trade union, by which
                                        representatives are chosen or referendums
                                        decisions o develop a common vision for
                                        what a just transition means for their
                                        impacted workers, communities and
                                        businesses.</p>
                                    <div class="card-actions">
                                        <NavLink to=''><button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button> </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* card-3 */}
                            <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Green Jobs, The key to
                                        Sustainable Development</h2>
                                    <p></p>
                                    <div class="card-actions">
                                        <button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                            {/* card-4 */}
                            {/* <div class="card bg-base-100 shadow-sm ">
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title font-bold text-xl">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div class="card-actions">
                                        <button class="btn btn-primary bg-white text-gray-500 border-black hover:bg-red-500 hover:text-white">READ MORE</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide-1" class="btn btn-circle">❮</a>
                            <a href="#slide-1" class="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </section>
            <section className='my-8'>
                <h1 class="font-bold text-3xl text-center text-green-600">Development Partners <span class="text-red-500">& Allies</span></h1>
                <div className='flex gap-7 items-center justify-around w-4/5 mx-auto mt-6'>
                    <img class="w-[150px]" src={logo1} alt="" />
                    <img class="w-[150px]" src={logo2} alt="" />
                    <img class="w-[150px]" src={logo5} alt="" />
                    <img class="w-[150px]" src={logo4} alt="" />
                    <img class="w-[150px]" src={logo3} alt="" />
                </div>
            </section>
            {/* Resources & Innovation section  */}
            <section class="bg-1 p-10">
                <div>
                    <h1 class="text-4xl font-bold text-center text-white">Resources & Innovation</h1>
                </div>
                <div class="grid grid-cols-2 w-10/12 mx-auto gap-10 text-white my-10 text-justify">
                    <p>Knowledge and learning are vital to understanding and shaping change. They are also instrumental for building
                        on successful practices and avoiding mistakes of the past. The initiative will pioneer knowledge on the nexus
                        of climate change and the world of work, develop tools and resources to help policy makers design effective
                        policy instruments, and offer platforms to share findings and understand what works.</p>
                    <p>The challenges of connecting decent work and climate change are complex. They cannot be solved with linear
                        problem-solving processes. Stakeholders cannot succeed alone. Delivering a just transition requires a
                        vision-oriented network of innovators ready to develop responses that break with business-as-usual. That’s
                        where the Just Transition Innovation Facility comes in. It will rely on multidisciplinary approaches and
                        leverage a diversity of perspectives from a spectrum of stakeholders. </p>
                </div>
            </section>
        </div>
    );
};

export default Home;