import React from 'react'
import SecionTitle from '../sectionTitle'
import OurTeamCard from '../ourTeamCard'

const OurTeam = () => {
  return (
    <>
    <section className='py-20'>
        <div className="wrapper">
            <SecionTitle children={"Our Team"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis."}/>
            <div className='py-10'>
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                    <OurTeamCard/>
                    <OurTeamCard/>
                    <OurTeamCard/>
                    <OurTeamCard/>
                    <OurTeamCard/>
                    <OurTeamCard/>
                    <OurTeamCard/>
                    <OurTeamCard/>
                </div>
            </div>      
        </div>
    </section>
    </>
  )
}

export default OurTeam