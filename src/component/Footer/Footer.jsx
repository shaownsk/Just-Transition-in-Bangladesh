import React from 'react';
import { FaAngleUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router';


const Footer = () => {

    return (
        <div className='bg-[#232323] text-white relative'>
            <ScrollToTop smooth top={1000} component={ <FaAngleUp className=' bg-black w-full h-full rounded ' />} />
            <div className='w-10/12 mx-auto grid grid-cols-6 p-10 gap-9'>
                {/* about us */}
                <div class="col-span-2">
                    <h1 class="font-bold text-xl pb-6">ABOUT US</h1>
                    <p class="text-justify text-sm font-semibold">Since being recognized in the 2015 Paris Climate Agreement, the
                        agenda of a just transition (JT) to a low carbon economy, from the carbon-intensive fossil fuel based
                        development, has become increasingly important, in part because of the impacts and regularity of extreme
                        climate disasters becoming the new normal. </p>
                </div>
                {/* Our project */}
                <div class="col-span-1">
                    <h1 class="font-bold text-xl pb-6">OUR PROJECT</h1>
                    <div class="text-sm font-semibold">
                        <p>  Upcoming Events</p>
                        <p>  Activities</p>
                        <p>  What are the country-level focus areas?</p>
                    </div>
                </div>
                {/* QUCIK LINK */}
                <div class="col-span-1">
                    <h1 class="font-bold text-xl pb-6">QUCIK LINK</h1>
                    <div class="text-sm font-semibold">
                        <p> Interventions</p>
                        <p> What are the country-level focus areas?</p>
                    </div>
                </div>
                {/* CONTACT US */}
                <div class="col-span-2">
                    <h1 class="font-bold text-xl pb-6">CONTACT US</h1>
                    <div class="text-sm font-semibold">
                        <p>Just Transition in Bangladesh</p>
                        <p>Address : Just Transition Bangladesh Centre (JTBC)</p>
                        <p>Phone : +88 01307691881</p>
                        <p>Email : justtransition.bd.centre@gmail.com</p>

                    </div>
                    {/* follow us */}
                    <div class="flex gap-5 text-white items-center pt-5">
                        <p class="font-semibold text-sm">Follow Us On:</p>
                        <NavLink><FaFacebookF /></NavLink>
                        <NavLink><FaYoutube /></NavLink>
                        <NavLink><FaTwitter /></NavLink>
                        <NavLink><FaLinkedinIn /></NavLink>
                    </div>
                </div>

            </div>
            {/* scroll btn */}
            
            <div class="p-3 bg-black text-white">
                <div class="flex justify-between w-10/12 mx-auto relative">
                    <p>&copy; 2025 JTBC All Rights Reserved</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;