import React from 'react'

const DesignThinking = () => {
    return (
        <>
            <div className='sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold '>
                <div className='pt-5 sm:w-[10%]   '>
                    <img src="./photos/dt1.png" alt="" className=' mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Deep Understanding of the Problem</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Validate: Confirm with data.</li>
                        <li>Root Cause: Identify core issues (5 Whys).</li>
                        <li>Gather Data: Use qualitative and quantitative research.</li>
                    </ul>
                </div>
            </div>



            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt2.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Empathise with Users</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Segment: Group by demographics and needs</li>
                        <li>Redefine: Frame the problem from the user’s perspective.</li>
                        <li>Personas: Highlight user goals and pain points.</li>
                    </ul>

                </div>
            </div>



            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt3.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Map the User Journey</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Stages: Define key steps Awareness, Consideration.</li>
                        <li>Touch points: Identify user interactions.</li>
                        <li>User Actions: Map specific actions.</li>
                        <li>Emotions: Track user emotions at each step.</li>
                        <li>Metrics: Set KPIs for success.</li>
                    </ul>
                </div>
            </div>



            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt4.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Define & Ideate Solutions</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Problem: Clearly define based on research.</li>
                        <li>Ideation: Generate and prioritize solutions.</li>
                        <li>Business Case: Align solutions with business goals.</li>
                    </ul>
                </div>
            </div>



            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt5.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Roadmap Development</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Execution Plan: Timelines, tasks, and responsibilities.</li>
                    </ul>
                </div>
            </div>


            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt-6.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Design & Prototyping</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Documentation & Handoff:
                            <ul className='list-disc px-5 font-thin'><li>
                            Maintain comprehensive documentation.
                                </li>
                                <li>Use tools like Jira or Confluence for tracking.</li>
                                <li>Ensure smooth handoff with detailed specs for developers.</li>
                                </ul>
                        </li>
                        <li>High-Fidelity Designs: Focus on accessibility and usability.</li>
                        <li>Prototypes: Build interactive models for feedback.</li>
                    </ul>
                </div>
            </div>


            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt-7.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Testing & Feedback</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Usability Testing: A/B tests, remote sessions.</li>
                        <li>Iterative Feedback: Refine based on insights.</li>
                    </ul>
                </div>
            </div>


            <div className='mt-5 sm:flex gap-10 p-5 w-[100%] border-2 rounded-[20px] hover:border-[#27E98B] font-semibold'>
                <div className='pt-5 sm:w-[10%]'>
                    <img src="./photos/dt-8.png" alt="" className='mx-auto w-[50px]' />
                </div>
                <div className=' '>
                    <h2 className='font-semibold text-[25px] sm:text-[30px]'>Stakeholder Engagement</h2>
                    <ul className='list-disc px-5 font-thin'>
                        <li>Updates: Provide regular updates and workshops.</li>
                        <li>Feedback: Collaborate to adjust solutions.</li>
                    </ul>
                </div>
            </div>






        </>
    )
}

export default DesignThinking
