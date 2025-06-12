import React from 'react';
import { GoDotFill } from "react-icons/go";


const Initiative = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl font-bold text-center'>Climate Change, Just Transition, Green Jobs and Labour</h1>
                <p className='text-justify mt-4'>OSHE foundation started work on climate change and labor based on rights issue with a primary project period in between 2008 – 2012 aiming to raise awareness and capacity building for the trade unions and CBOs in Bangladesh on Climate Change, Just Transition and Green Job issues. As an impact of these actions, a common trade union position paper was developed at national level on climate change and environmental issues in 2011; good number of national level trade union leaders were sensitized, number of workers education and awareness materials developed on campaign issues.</p>
                <p className='text-justify mt-4'>In 2021, OSHE implemented a short-term action project with the International Labour Organisation (ILO) Bureau of Workers Activities to revitalize OSHE’s work on Just Transition having participation of major six national workers organizations at the national level. The outcomes of these actions were 25-second tire trade union leaders were trained with updated information, social dialogue and advocacy skills on climate change and just transition for workers. Development of 6 organizational level action plans by participants for the period of January to June 2022 on climate-proof work sensitization and awareness building actions to union members at workplaces in following sectors:</p>
                <ul className=' space-x-1.5 mt-3.5 pl-5'>
                    <li className=' flex items-center'> <GoDotFill /> Garments, agriculture, energy-power, recycling, construction and transport.</li>
                    <li className=' flex items-center'> <GoDotFill /> Formation of a national trade union working group to jointly work and support  workers organization at national level on climate change and transition advocacy and campaign-related issues.</li>
                    <li className=' flex items-center'> <GoDotFill /> An unpadded common trade union position paper, forming a digital advocacy platform with the youth and women leaders from the vulnerable climate sector.</li>
                </ul>
                <p className='text-justify mt-4'>Goals  and Vision</p>
                <ul className=' space-y-1.5 mt-3.5 pl-5'>
                    <li className=' flex items-center'> <GoDotFill /> Increasing the inclusion and participation of trade unions in the processes related to the 2030 agenda in Bangladesh, especially on SDG 13 (climate actions) and SDG 8 (decent work and economic growth)</li>
                    <li className=' flex items-center'> <GoDotFill /> Improving knowledge and capacity of trade unions in advocating and negotiating for fostering decent work and Just Transition.</li>
                    <li className=' flex items-center'> <GoDotFill />Strengthening the collaboration between trade unions and civil society organizations to advocate for acceleration of sustainable development goals, particularly on SDG 13 and SDG 8.</li>
                </ul>

            </div>

        </div>
    );
};

export default Initiative;