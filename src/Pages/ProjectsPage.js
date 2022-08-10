
import {Link} from 'react-router-dom';
import FooterSection from '../Components/FooterItems/FooterSection';

import HeaderSection from "../Components/NavbarItems/HeaderSection";
import './projects.css';
import NurseRobot from "../img/PROJECTS/nurse.jpg";
import xb from "../img/PROJECTS/xb.png";
import foot from "../img/PROJECTS/foot.png";
import PostRobot from "../img/PROJECTS/PostRobot.jpg";

function ProjectsPage() {

  return (
    <>
    <HeaderSection/>
    <div className="wrapper">

    <Card data-aos="fade-down"
        img={NurseRobot}
        title="Nurse Robot"
        description="Robot allowing the delivery of drugs within a hospital. This system will ensure delivery orders by a user through a control interface. It will also make it possible to carry out these orders and to deliver the medicines to the patient concerned."
        link="https://www.youtube.com/watch?v=maPPQqUgzAA"
        
      />
     
      <Card data-aos="fade-down"
        img={PostRobot}
        title="PostRobot"
        description="It is a parcel delivery robot that sorts parcels and assigns each parcel to the corresponding address through a QR code"
        link="" 
        
      />

      <Card data-aos="fade-down"
        img="https://www.amazon.fr/images/I/61n9lTAqDVL._AC_SL1000_.jpg"
        title="XY plotter robot "
        description="Using L293d + stm32f4 to drive the bipolar stepper motor and sending the value of the commands on the uart interface (via Bluetooth) LabVIEW to process the images using the Canny Edge algorithm"
        link="https://www.youtube.com/watch?v=maPPQqUgzAA"
      />

      <Card data-aos="fade-up"
        img="https://www.deviceplus.com/wp-content/uploads/2017/07/image001-6.jpg"
        title="Hexapod robot"
        description="It is a robot controlled by android and controlled by STM 32, orders are sent and received by Bluetooth, developed for special missions."
        link="https://www.youtube.com/watch?v=maPPQqUgzAA"
      />
  
        
      
       <Card data-aos="fade-down"
        img={xb}
        title="XBee Robot"
        description="It is a robot controlled with a STM32-F4 board and the XBee module."
        link=""
        
      />
      
      
      <Card data-aos="fade-up"
        img={foot}
        title="Football Robot"
        description="It is a robot that picks up the balloons and throws them into the net, it is controlled by arduino board."
        link=""
        
      />
      <Card 
        img="http://www.ic0nstrux.com/image/cache/data/products/robots/parallax/elev8/ELEV-8-Quadcopter-Assembled-Kit-640x640.png"
        title="FPV drone"
        description="ecrire description ici"
        link=""
      />
     
      <Card data-aos="fade-down"
        img="https://www.trossenrobotics.com/Shared/Images/Product/ViperX-300-Robot-Arm/Img0389ROS.jpg"
        title="robotic arm"
        description="text ici"
        link=""
        
        
      />
      
    </div>
  <FooterSection/>
  </>
  );
}
function Card(props) {
  return (
    
    <div className="card" data-aos="fade-up">
      <div className="card__body">
        <img src={props.img} alt="" class="card__image" />
        <h2 className="card__title" data-aos="fade-left">{props.title}</h2>
        <p className="card__description" data-aos="fade-right">{props.description}</p>
      </div>
      <button className="card__btn" data-aos="zoom-out" ><a style={{color:"white"}}href={props.link}> see more  </a></button>
    </div>

  );
}

export default ProjectsPage;
