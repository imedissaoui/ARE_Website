import React from 'react'

import Event,{EventDescription} from '../Components/Event/Event'
import Footer from '../Components/FooterItems/FooterSection'
import "./events_page.css"
import HeaderSection from "../Components/NavbarItems/HeaderSection"


import EVENTS from '../data/EventsData/eventsData'

const EventsPage = () =>{
    return (
        <>
            <HeaderSection/>   
            <div className="section" id="events-section">
                <div data-aos="zoom-out" className="row">
                <div className="col-md-3"></div>
                <div id="eventstyle" className="col-md-6" >Because ENSI robotics association believes that knowledge has to be shared among everyone and that it has to be done while being an enjoyable experience, it made organizing our events a favorite activity
Our events target anyone interested in our field, like BootCamp for the youth and the younger generation, RoboCup, RoboCamp, and SuperCup, for people over 18.
</div>
<div className="col-md-3"></div>
</div>
                <div id="event-robocup">
                    <div className="events-wrap">
                        <Event className="event-item" id="robocup" data={EVENTS[0]} />
                        <EventDescription className="event-item" id="robocup" data={EVENTS[0]}/>
                    </div>
                </div>

                <div id="event-bootcamp">
                    <div className="events-wrap">
                        <EventDescription className="event-item" id="bootcamp" data={EVENTS[2]}/>    
                        <Event className="event-item " id="bootcamp" data={EVENTS[2]} />
                    </div>
                </div>
                <div id="event-supercup">
                    <div className="events-wrap">
                        <Event className="event-item" id="supercup" data={EVENTS[1]} />
                        <EventDescription className="event-item" id="supercup" data={EVENTS[1]}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
            
    )    
}

export default EventsPage ;