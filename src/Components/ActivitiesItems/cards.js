import React from 'react';



import Workshops from"./assets/workshop.jpg";
import event from"./assets/event.jpg";
import competition from"./assets/competition1.jpg";

import Card1 from './card';

function ActivitiesSection (){ 
     
            return(
                
                <div className="cards" id="ActivitiesContainer">
                    <div className="row">
                        <div data-aos="fade-left" data-aos-duration="3000" className="col-md-4 col-sm-12 Workshops" >
                            <Card1 imgsrc={Workshops} al="Workshops" title="Workshops" ad="/workshops" description="ARE offers its members a multitude of excellent training sessions and workshops choosen wisely to enhance their hard and soft skills."/>

                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000"className="col-md-4 competition">
                        <Card1 imgsrc={competition} al="Competitions" title="Competitions" description="ARE has a glorious history of its regular participation in national and international competitions, particularly in the field of robotics such as Tunirobots, ENIM-ROBOTS, ENISO Smart challenge ..." ad="/competitions"/>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="3000"className="col-md-4 event">
                            <Card1 imgsrc={event} al="Events" ad="/events"description="ENSI Robotics Association organize every year various events gathering huge numbers of participants" title="Events"/>
                        </div>
                    </div>
                </div>
                
               
               
               

            );
        
}

export default ActivitiesSection;