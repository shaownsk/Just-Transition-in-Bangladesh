import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import logo from './../../assets/jtbc-logo.jpg'

const Navbar = () => {
    return (
        <div>
            <header className=' bg-red-500 '>
                <nav className='w-10/12 mx-auto flex justify-between'>
                    <div className=' flex items-center gap-4 text-white'>
                        <p>Follow Us On:</p>
                        <NavLink><FaFacebookF /></NavLink>
                        <NavLink><FaYoutube /></NavLink>
                        <NavLink><FaTwitter /></NavLink>
                        <NavLink><FaLinkedinIn /></NavLink>
                    </div>
                    <div className='flex items-center text-white gap-4'>
                        <p className='flex items-center gap-3'><IoIosMail /><Link>Email:  justtransition.bd.centre@gmail.com</Link></p>
                        <p className='flex items-center gap-3'><IoIosCall />contact:+88 01307691881</p>
                    </div>
                </nav>
            </header>


            {/* start menu bar */}


            <div>
                <div class="w-11/12 mx-auto pt-5 flex gap-20 items-center">
                    <div>
                        <img className='w-[120px]' src={logo} alt="logo" />
                    </div>
                    {/* dropdown */}
                    <div class="flex gap-12 text-lg">
                        <div class="dropdown dropdown-hover">
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline" >About Us </div>

                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><NavLink to="/initiative">The Initiative</NavLink></li>
                                    {/* <li><a>Item 2</a></li> */}
                                </ul>
                        </div>
                        <div class="dropdown dropdown-hover">
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline">Priorities</div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><NavLink to='/policyReform'>Policy Reform</NavLink></li>
                                <li><NavLink to='/AdaptiveSocialProtection'>Adaptive Social Protection</NavLink></li>
                                <li><NavLink to='/greenSkills'>Green Skills</NavLink></li>
                                <li><NavLink to='/energyTransition'>Energy Transition</NavLink></li>
                                <li><NavLink to='/SocialDialogue'>Social Dialogue</NavLink></li>
                                <li><NavLink to='/GreenJobs'>Green Jobs</NavLink></li>
                                <li><NavLink to='/ClimateJustice'>Climate Justice</NavLink></li>
                            </ul>
                        </div>
                        <div class="dropdown dropdown-hover">
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline" > Sectoral Interventions </div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><NavLink to='/Multimedia'>Multimedia</NavLink></li>
                                <li><a>Research and study reports</a></li>
                                <li><NavLink to='/publications'>Publications</NavLink></li>
                            </ul>
                        </div>
                        <div class="dropdown dropdown-hover" >
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline">Campaigns</div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><NavLink to='/blog'>Blog</NavLink></li>
                                <li><NavLink to='/News and Media'>Press Coverage & Media Report</NavLink></li>
                                <li><NavLink to='/TelevisionCoverage'>Television Coverage</NavLink></li>
                            </ul>
                        </div>
                        <div class="dropdown dropdown-hover" >
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline">Circular Economy</div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Donate</a></li>
                                {/* <li><a>Item 2</a></li> */}
                            </ul>
                        </div>
                        <div class="dropdown dropdown-hover">
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline" >JTBC Member Hub</div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><NavLink to='/Activities'>Activities</NavLink></li>
                                <li><NavLink to='/whatare'>What are the country-level focus areas?</NavLink></li>
                            </ul>
                        </div>
                        <div class="dropdown dropdown-hover">
                            <div tabindex="0" role="button" class="hover:text-red-600 hover:underline">Storytelling</div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><NavLink to='/storytalling'>Story Telling</NavLink></li>
                                    {/* <li><a>Item 2</a></li> */}
                                </ul> 
                        </div>

                    </div>
                    {/* <div>
                            <img src="accets/oshe-logo.png" alt="">
                        </div> */}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
