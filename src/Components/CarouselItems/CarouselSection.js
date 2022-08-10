import React from "react";
import image from './assets/a.jpg';
import image1 from './assets/b.png';
import{Col,Row} from 'reactstrap';
import "./CarouselSection.css"

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src:
      image,
    altText: "Slide 1",
    caption: ""
  },
  {
    src:image1,
      altText: "Slide 2",
    caption: ""
  },
  
];

function Carousel(){
  return (
    <div style ={{height: "fit-content"}}>
    <div style ={{alignItems:"center"}}className="container">
      <Row>
      <Col md={7} data-aos="zoom-out" data-aos-delay="500" data-aos-duration="2000" style ={{paddingTop :"15%",paddingRight:"5%"}}>
      <UncontrolledCarousel style ={{height:"100%"}} items={carouselItems} />
      </Col>
      <Col md={4}>
        <Row data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2500" id="text2"style ={{color:"white",fontSize:"70px"}}>
          To see More Check our Gallery !
        </Row>
        <Row data-aos="zoom-out" data-aos-delay="500" data-aos-duration="2500" id="box2" ><a className="click" href="/gallery">Click Here </a>
          

        </Row>

      </Col>
      </Row>
    
    </div>
    </div>
     
  );
}

export default Carousel;