import React from 'react';
import b1 from '../../assets/blog/b1.jpg'
import b2 from '../../assets/blog/b2.jpg'
import b3 from '../../assets/blog/b3.jpg'
import b4 from '../../assets/blog/b4.jpg'

const Blog = () => {
    return (
        <div>
            <div className=' w-10/12 mx-auto items-center bg-gray-100 p-5 hover:shadow-2xl my-6 rounded-xl'>
                <h1 className=' text-2xl font-bold text-center'>Activities</h1>
                <div className='grid grid-cols-3 gap-4 pt-5'>
                    {/* card-1 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={b1}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">The Fight for "Just Transition"</h2>
                            <p>Climate change is the main environment problem faced by humanity. The fight for a "Just Transition" for workers and support for investment in 'green jobs' are basic reasons for trade unions to enter the climate change discussion</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Read More</button>
                                {/* start modal */}
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        {/* heading */}
                                        <h3 className="font-bold text-lg">The Fight for "Just Transition"</h3>
                                        {/* img  */}
                                        <div className=' flex justify-center m-6'>
                                            <img src={b1} alt="img" />
                                        </div>

                                        {/* content */}
                                        <p className="py-4 text-lg text-justify"> It is widely acknowledged as being the root cause of multiplication of extreme weather events, such as droughts. floods and unprecedented ranges ranges hot and cold weather. Its consequences are aggravating desertification and erosion processes as well as irreversibble changes in ecosystems and the loss of biodiversity, which will affeect all aspects of our lives: food and water supplies, diseases and the way we produce and consume. This will certainly have major effects on employment. <br />

                                            As example, Brick kilns in Bangladesh produce high levels of carbon emissions and environmental pollution. New regulations requiring a shift in brick manufacturing processess in coming days may result job losses and require new skills and training for workers as this sector to copes with new technology. The transition to greener, more sustainable ways of working requires a "Just transition " approach to the future of this key industry.
                                            <br />

                                            'A global governance problem', 'the biggest market failure in history, ' a challenge for humanity': these are just a few of the catch  phrases</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={b2}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">JUST TRANSITION IS CRUCIAL FOR ENVIRONMENT FRIENDLY BRICK KILN AND ITS REFORM</h2>
                            <p>The brick kiln industry in Bangladesh employs more than 1.0 million people and contributes around 1.0% to the national economy. In reverse, it has all-encompassing adverse impacts on health and environment. Therefore, it is absolutely need to ban illegal traditional brick kilns to protect the environment, alike, it is necessary to various reforms and practices towards environment-friendly brick kilns and to job security of the working people involved in this work to maintain the economic growth of the country. That is to say, just transition of brick kilns should be addressed seriously.
                                Please have a look at the poster to learn about it's message.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_2').showModal()}>Read More</button>
                                {/* start modal */}
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        {/* heading */}
                                        <h3 className="font-bold text-lg">JUST TRANSITION IS CRUCIAL FOR ENVIRONMENT FRIENDLY BRICK KILN AND ITS REFORM</h3>
                                        {/* img  */}
                                        <div className=' flex justify-center m-6'>
                                            <img src={b2} alt="img" />
                                        </div>

                                        {/* content */}
                                        <p className="py-4 text-lg text-justify">The brick kiln industry in Bangladesh employs more than 1.0 million people and contributes around 1.0% to the national economy. In reverse, it has all-encompassing adverse impacts on health and environment. Therefore, it is absolutely need to ban illegal traditional brick kilns to protect the environment, alike, it is necessary to various reforms and practices towards environment-friendly brick kilns and to job security of the working people involved in this work to maintain the economic growth of the country. That is to say, just transition of brick kilns should be addressed seriously. <br /> <br />

                                            Brick manufacturing is an important business sector in Bangladesh. More than 7000 brick kilns in Bangladesh produce 15 billion bricks annually to meet the country's growing demand for building materials. It employs more than 1.0 million people and contributes valued at around US$640 or 1.0% to the national economy. As the country doesn’t have stone aggregate, there is a large demand for bricks in Bangladesh. Most kilns operate based on fixed-chimney kilns (FCKs) and about five percent of the kilns based on Gas fired Tunnel/Hoffman kilns, Chinese Hoffman kilns year round.<br /> <br />

                                            Brick kilns (Fixed-chimney kilns) consume about 2.2 million tons of coal each year, most of which is imported by land from the Indian states of Meghalaya and Assam. In addition, an estimated 1.9 million tons of firewood are consumed. While wood is used to start fires, a ban on using wood is increasingly shifting users to other polluting fuels, including automobile tires, used tukris (basket made of bamboo to carry sand and clay) and fuel oil. In addition, there are around 30 kilns (mostly Tunnel kilns) using natural gas, which can be the cheapest energy source, and also environmentally friendly.<br /> <br />

                                            Traditional, energy-intensive kilns are still widely used in Bangladesh, making the brick sector a major source of greenhouse gas emissions and air pollution. In 2010, the government issued a directive banning operation of traditional fixed chimney kilns by 2012, which was later extended to 2014. Today the directive still faces considerable barriers to enforcement and implementation, and the number of climate-friendly, energy-efficient kilns has yet to increase in line with expectations.<br /> <br />

                                            Nearly 1600 kilns are in Dhaka Division, contributing about 10% of the airborne particulate matter (PM) pollution to Dhaka’s air shed. Average seasonal particulate concentration varies from 25 to100 μg/m3 due to brick kiln emissions; but existence of clusters causes pollution “hotspots” levels as high as 200μg/m3. Dhaka’s overall PM10 pollution is about 200μg/m3 and PM2.5 about100 μg/m3 (2007), much higher than the WHO standards of 20μg/m3 and 10μg/m3 respectively [1]. The density of PM10 worsens during the dry season (December-March) to over 450μg/m3, one of the highest levels in the world. This contributes to pulmonary, respiratory and neurological illness, and an estimated 5,000 premature deaths [3]. Brick kilns account for 8.75 million tons of CO2 emissions each year, the largest stationary source (about 16% of the total from all sources). These CO2 emissions absorb infrared radiation, and contribute to global warming.<br /> <br />

                                            Brick kilns are the top air polluter in seven major cities in the country, particularly during dry season when most bricks are made, turning the air quality of these metropolitan area “severely unhealthy”, especially because of the dated manufacturing technology and proximity of kilns to major cities with large populations. Further threat is posed by the longitudinal density of brick kilns. These kilns are usually clustered in certain areas, sometimes close to major rivers and adjacent cities. This poses serious health risks to Dhaka city residents during brick manufacturing season which runs from December to April. The Department of Environment (DoE) reports that around 58% of fine particles in Dhaka air come from brick kilns.<br /> <br />

                                            In consideration all of this, on November 26, 2019, The High Court ordered the government to conduct mobile court drives to shut down the illegal brick kilns in five districts-Dhaka, Narayanganj, Gazipur, Munshiganj, and Manikganj within 15 days. The court asked the deputy commissioners of Dhaka, Narayanganj, Munshiganj, Manikganj and Gazipur as well as the director general of the Department of Environment (DoE) to submit an action taken report.<br /> <br />

                                            Dhaka has topped the list of cities around the world with the worst air quality on January 21, 2023 morning. With an air quality index (AQI) score of 249 at 8:55 am on Saturday, Dhaka ranked first in the list of cities with worst air, reports UNB. Earlier, in 2018, 2019 and 2020, 2021 also Bangladesh was found to be the most polluted country in the world. However, the PM2.5 level has shown a decline in Bangladesh from 77.1 micrograms per cubic metre in 2020 which was even higher at 83.3 in 2019 and 97.1 in 2018. There is possibility its repetition and increase its parameter if we do not careful or take effective measure to control the pollution.<br /> <br />

                                            Air pollution caused about 78,145–88,229 deaths in Bangladesh in 2019. While air pollution levels within the country vary significantly, the concentration of PM2.5 in all the regions is significantly above the threshold recommended by the WHO Air Quality Guidelines. Dhaka is the most polluted division while Sylhet is the least polluted. From 2018 to 2021, Dhaka was ranked as the second most polluted city in the world. The western regions (Khulna and Rajshahi) are more polluted than the eastern ones (Sylhet and Chattogram). In the Dhaka division, in addition to local pollution sources, up to one-fifth of the total PM2.5 concentration comes from Tran’s boundary sources. [3] <br /> <br />

                                            The WHO recognised that air pollution is a critical risk factor for non-communicable diseases, causing an estimated one-quarter (24 percent) of all adult deaths from heart disease, 25 percent from stroke, 43 percent from chronic obstructive pulmonary diseases, and 29 percent from lung cancer.<br /> <br />

                                            Air pollution is now considered to be the world’s largest environmental health threat, accounting for seven million deaths around the world every year. Air pollution causes and aggravates many diseases, ranging from asthma to cancer, lung illnesses and heart disease. The estimated daily economic cost of air pollution has been figured at USD 8 billion or 3 to 4 percent of the gross world product. [2] <br /> <br />

                                            After all this brick kilns will remain so until a viable alternative bricks and technologies is found as because it is important for the rapidly growing economy of Bangladesh. In the meantime, the government, development partners and relevant parties is needed to take concerted effort to turn the brick kilns environmentally friendly and its necessary reforms towards job security through creating reskilling and redeployment of the workers involved in this industry as well as job creation and social protection.<br /> <br />

                                            Mentioning all of these issues are just transition which focus on the transition out of high-carbon activities and into the green economy, seeking to ensure harm to workers, communities, countries, and regions is avoided while maximising the benefits of climate action, while minimizing and carefully managing any challenges – including through effective social dialogue among all groups impacted, and respect for fundamental labour principles and rights. It needs to be prioritized by countries and businesses around the country right away, as a matter of urgency.<br /> <br />



                                            In 2015, the International Labour Organization (IL) released "Guidelines for a just transition towards environmentally sustainable economies and societies for all", decided between governments, employers and their organisations, and workers and their trade unions. It established just transition as a process “towards an environmentally sustainable economy which needs to be well managed and contribute to the goals of decent work for all, social inclusion and the eradication of poverty”. Around the same time, the parties to the 2015 Paris Agreement committed to taking into account “the imperatives of a just transition of the workforce and the creation of decent work and quality jobs in accordance with nationally defined development priorities.” [5]<br /> <br />

                                            In a developing country context, labour market policies and social protections are not as well developed. There may be needs for increased investment in labour market policies like reskilling, training, and placement services for workers in transitioning sectors. Unemployment benefits, investments in the education system, and programs to prevent and alleviate poverty are necessary for all countries to facilitate a just transition. This often occurs in countries as part of national development plans, but, in many cases, it is not explicitly linked to efforts for a just transition. Often, a just transition has been associated with the energy sector, but principles for a just transition can be considered across other sectors that may undergo difficult reforms that affect tripartite partners (workers, employers, and government) and stakeholders as countries look to achieve the Agenda 2030, the Sustainable Development Goals, the Paris Agreement on Climate Change (and its Nationally Determined Contributions [NDCs]), and national development and climate strategies. [3]<br /> <br />

                                            Working on just transition brings all actors like unions, industry, public administration, governments, civil society and others who believe in fair regional redevelopment to the same table to sharing this goal. They should be working together to find what is best for their regions and communities, from creating good quality jobs to identifying sustainable alternatives.<br /> <br />

                                            It is evident from the above discussion that various reforms, renovations of brick kilns and alternative innovations including environmental regulation, relocation, shifting to more environmentally friendly technologies and processes and importing stone aggregates will require to introduce to solve the crisis of this industry and to reduce environment pollution.<br /> <br />

                                            Addressing the issues hindering reform will take actions on many fronts, including coalition building and a good coordination strategy. It is absolutely necessary for the economic growth and sustainable environmental development of the country and in that case Just Transition will be a key instrument or play a key role in this regard. The Government and other relevant actors will take all kinds of initiatives in this regards within the just transition framework.</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={b3}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Relocation Tannery from Hazaribag to Savar, is only a transition, not a JUST TRANSITION</h2>
                            <p>Relocation of tannery from Hazaribagh to Savar has only resulted in the transformation of this industry, not just transition, which has caused various problems to the workers including job downsizing, dismissal, ill health and also causing continual environmental pollution of the relocated area, various distress of the community and people's life, which leads to the closure of the tannery. It is about to be done and the government has already given instructions to stop the operations of some tanneries. Need to address the just transition issue earnestly.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Read More</button>
                                {/* start modal */}
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        {/* heading */}
                                        <h3 className="font-bold text-lg">Relocation Tannery from Hazaribag to Savar, is only a transition, not a JUST TRANSITION</h3>
                                        {/* img  */}
                                        <div className=' flex justify-center m-6'>
                                            <img src={b3} alt="img" />
                                        </div>

                                        {/* content */}
                                        <p className="py-4 text-lg text-justify">Relocation of tannery from Hazaribagh to Savar has only resulted in the transformation of this industry, not just transition, which has caused various problems to the workers including job downsizing, dismissal, ill health and also causing continual environmental pollution of the relocated area, various distress of the community and people's life, which leads to the closure of the tannery. It is about to be done and the government has already given instructions to stop the operations of some tanneries. Need to address the just transition issue earnestly.<br /> <br />

                                            The process of relocation of old Hazaribagh tanneries could eventually begin in early 2014 with the government allocating land for 155 tanneries in the Tannery Industrial Estate (TIE) in Savar. A majority of the tanneries were compelled to shift the factories in April 2017 as the government decided to disconnect the utility supplies to their old establishments in Hazaribagh. According to a recent report by BSCIC (April 2019), among the selected 155 owners, as many as 123 have already started processing of leather in the new factories, while 18 are under construction.<br /> <br />

                                            The Central Effluent Treatment Plant (CETP), lifeline of the relocation project, with a treating capacity of 30000 m3 of effluents a day in the Tannery Industrial Estate (TIE) has not become fully functional from the beginning. Additionally, the other necessary components of effluent treatment process like the dumping yard, chrome recovery unit, and the sludge storing and processing plants are yet to be built as promised in the revised MoU (Memorandum of Understanding) signed between relevant public and private stakeholders before the relocation. As a result, concerns regarding successful operation of CETP and other supporting components like dumping yard and chrome recovery unit in ensuring environmental compliance have emerged as a ‘teething problem’ of the relocation process. The additional concerns after the relocation include welfare issues of the tannery workers and health concerns of the people living in the neighborhood of the TIE.<br /> <br />

                                            The workers were not a part of the relocation agreement since the beginning and hence could not voice their concerns properly. Tannery Workers Union (TWU), as the major representative body of the tannery workers, has tried to raise the issues of accommodation, transportation, and medical services before relocating to the TIE. However, the tannery owners and the government agencies overlooked the demands of the tannery workers.<br /> <br />

                                            Among 25 thousands of workers in Hazaribagh, about 20 thousand workers moved to Savar while the remaining portion either left or were forced to leave the job. Those who left the job by choice have done so to avoid the accommodation and transportation problems. On the other hand, few thousands of workers lost their job as they used to work for the third party contractors and a lot of the third party contractors refused to shift to Savar.<br /> <br />

                                            Occupational health and safety issues have broadly been neglected at the tanneries for a long time and it has not improved significantly at the tanneries after the relocation. Most of the tanneries do not contain any first aid and PPE facilities for the workers and have no doctor at the tanneries. Furthermore, in most cases ‘safety committee’ is absence and not functional. Therefore, construction of new factories in the TIE has not brought significant changes in terms of occupational safety of the workers.<br /> <br />

                                            The workload in the tanneries has decreased in the last couple of years after the relocation. One reason behind that is the incompleteness of the relocation process as the roads, drains, and the CETP remain less than functional which in turn affected the lower amount of export of leather. The decrease of the workload has hence prompted job cut and forced leave for many workers. Low workplace safety added with low job security has been a major concern for the mental health of the tannery workers.<br /> <br />

                                            The female workers of the tanning industry have suffered severely due to the relocation effect. The female workers who used to work on temporary basis at Hazaribagh have mostly last job or chose to leave. Moreover, the job environment at the tanneries has not been much favorable to the female workers due to lower standard of health and hygiene, separate toilets facilities, dining spaces, child care center, waiting rooms for the female workers at most of the tanneries.<br /> <br />

                                            The people of the closest neighborhoods of the leather tanneries are direct victims of the environmental pollution. Apparent pollution of soil, water and plants in Hazaribagh has caused the people of the neighborhoods a great suffering. As the industry has been relocated to Savar now, the nearby communities are at the risk of facing various types of unforeseen costs if the industry fails to meet the environmental compliance. As the TIE stands at the bank of Dhaleshwari River, there are villages in both sides of the river that are affected by the ongoing activities at the tanneries. Horindhora is the nearest village situated on the same bank of Dhaleshwari as the TIE does. On the other hand, Bokchor is another closest village on the other side of the Dhaleshwari River. As the findings from the field shows, Bokchor, a century-old rural village with very fertile land, is highly affected by the relocation of tanneries. People of the south part of Bokchor,the closest area to the river, are the worst sufferers of both air and river pollution in recent years. South breeze during the spring and summer brings with it the bad smell of tanneries and makes it tough to breathe for about half of the year, as the residents of Bokchor remarked.<br /> <br />

                                            As this consequence, the tannery poses a dangerous threat to the water, soil, air and surrounding environmental pollution. The level of environmental pollution has gone so out of control that the parliamentary committee on the Ministry of Environment, Forest and Climate Change (MEFCC) itself has recommended the temporary closure of the tannery industry city due to environmental pollution.  Even the chairman of the National River Conservation Commission recently visited the tannery industry city and expressed his anger and dissatisfaction with the waste management.<br /> <br />

                                            At the same time, the tanneries are facing problems by decreasing gradual Exports of leather products from Bangladesh due to fail to achieve enough compliance.  As a result, the tanneries have futile to attain the 'Leather Working Group' (LWG) certification and the growth of this industry is being disrupted gradually. Therefore, the tanneries of Bangladesh are in trouble now and struggling to exist.<br /> <br />

                                            The main reasons and the facts of this crisis are the lack of proper implementation of the policies and lack of paying close attention to the issues involved in the transfer of the industry which includes the purpose and reason of the transfer. Relocating an industry should take into account the impact on the livelihoods of the people involved in the industry, employment opportunities, the environment and the livelihoods of local communities. That is, the industry needs to prioritize to shift a new place which comprises what compliance needs to be done, whether the working people involved in the industry and the local people are affected by the relocation of the industry, whether there is environmental pollution, whether there is any negative impact on climate change, whether justice is ensured for the affected population, government and investors support for setting up the industry as well as involvement of workers representative in the shifting process. All these are about just transition issue and it should be kept in mind in case of any industrial transfer.<br /> <br />

                                            In fact, “A just transition for all towards an environmentally sustainable economy … needs to be well managed and contribute to the goals of decent work for all, social inclusion and the eradication of poverty.” Guidelines for a just transition towards environmentally sustainable economies and societies for all” International Labor Organization (2015). “Taking into account the imperatives of a just transition of the workforce and the creation of decent work and quality jobs in accordance with nationally defined development priorities” Paris Agreement (2015) is a just transition.<br /> <br />

                                            It is an integrated approach to sustainable development that brings together social progress, environmental protection, and economic success into a framework of democratic governance and institutional resilience. Effective “just transition” strategies require local, bottom-up engagement of all affected stakeholders and commitment by governments to guarantee their buy-in and provide planning security.<br /> <br />

                                            At the same time, attractive as such a vision might be to State leaders and decision makers, it has to be remembered that in order to succeed in such a quest, all proposed changes must be not only economically feasible, but also socially acceptable, taking into account opinions and the well-being of the most affected communities.<br /> <br />

                                            Accounting all relevant stakeholders and the people of the area interests regarding the transition of an industry is the crucial element of the whole process. It is them who will determine the fate, i.e., the success or failure of the transition. If the future that they are offered satisfies their interests, the task will be accomplished. If, in turn, their needs are sacrificed in the name of the greater good, be it faster economic growth, greater prosperity for the society as a whole, or more rapid and robust growth of the industry, the transition is doomed to fail.<br /> <br />

                                            On the other hand, the transition is thrived if it “managed well, transitions to environmentally and socially sustainable economies can become a strong driver of job creation, job upgrading, social justice and poverty eradication. Greening all enterprises and jobs by introducing more energy and resource efficient practices, avoiding pollution and managing natural resources sustainably leads to innovation, enhances resilience and generates savings which drive new investment and employment”-International Labor Organization (2015).<br /> <br />

                                            All this in consideration, I think in case of tannery relocation just transition issues are not considered and the issue of just transition should be seriously addressed immediately to overcome the ongoing problems in the tannery sector. And if it does, the tannery industry will quickly become compliant and achieve LWG certification and turn to boost leather exports to the United States and Europe as well as regained its previous forms and heritage</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={b4}
                                alt="img" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Emergent transitions in various industry sectors in terms of job loss and displacement across the country should be addressed properly, initiatives for Just Transition can be an effective instrument</h2>
                            <p>Just transition action is about a matter of execution, not just on paper. It leads greening the economy in a way that is as fair and inclusive as possible to everyone concerned, creating decent work opportunities and leaving no one behind.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_4').showModal()}>Read More</button>
                                {/* start modal */}
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        {/* heading */}
                                        <h3 className="font-bold text-lg">Emergent transitions in various industry sectors in terms of job loss and displacement across the country should be addressed properly, initiatives for Just Transition can be an effective instrument</h3>
                                        {/* img  */}
                                        <div className=' flex justify-center m-6'>
                                            <img src={b4} alt="img" />
                                        </div>

                                        {/* content */}
                                        <p className="py-4 text-lg text-justify">According to the climate change vulnerability index, Bangladesh is the sixth most vulnerable country to climate change impacts and climate change is one of the greatest risks to the achievement of the Sustainable Development Goals (SDGs), particularly SDG 8 on decent work and economic growth. Jobs are affected by a range of climate issues, such as rising ocean waters, floods, heat stress, forest and other fires, and the destruction of infrastructure. <br />

                                            Bangladesh is losing 7 billion working hours annually due to extreme heat exposure caused by global warming, a new study reveals and if the global temperature increases by 1 degree Celsius, the country could lose approximately 21 billion working hours, said the study, conducted by researchers at Duke University in the US. <br />

                                            According to the researchers, most of the economic loss occurs in low and middle income tropical countries like Bangladesh where a large number of people are involved in manual labour involving agriculture and construction work. <br />

                                            Climate change is forcing already-vulnerable people into often exploitative, precarious and poorly paid work, including migrating abroad for unsafe jobs where their rights are often unprotected. Increased salinity and flooding has driven people in Khulna and Jashore area into new economic activities—primarily away from previously profitable farming into poverty-wage, non-farm economic activities with hand-to-mouth existence. Cross-border migration of people from Khulna and Jashore to India for better economic prospects was found to be common and recurring, with international migration growing. Workers forced to transition into new jobs were found to lack information, training and financial resources to adapt to employment changes, and were mostly relying on friends and family for information and other types of resources to find new jobs. <br />

                                            The Climate Action for Jobs Initiative  brings together all these actors to provide support to countries on bold solutions for a transition towards a sustainable future that is just and enjoys broad-based support.</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Blog;