import React from "react";
import Form from "./form";
import {Row,Col} from 'react-bootstrap';
import "./Contact.css"


import image from './assets/bg.png';


function ContactSection() {
    
    return (<div style={{paddingTop:"10%",paddingBottom:"10%"}} id="contactus"className="container">
    <div data-aos="zoom-in" data-aos-duration="1000" style={{color:"white", backgroundImage:`url("${image}")`,backgroundSize:"cover",borderColor:"white",borderRadius:"10px",borderStyle:"solid", padding:"1.25%"}} className="Container2">
        <Row>
            <Col md={6}>
            <h2>OUR LOCATION</h2>
              <div className="map">
                  <iframe title="frame"
                    width="400"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    marginTop="10px"
                    src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=national%20school%20of%20computer%20science+(ensi)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
              </div>
            </Col>
            <Col md={6}>
                <Row >
                        <h2>FOLLOW US ON SOCIAL MEDIAS</h2>
                </Row>
                <Row >
                        <ul>
                            <a href="https://www.facebook.com/association.robotique.ensi/">
                                <i style={{color:"#fff"}} className="fa fa-facebook col-md-3"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/cr-ensi/">
                                <i style={{color:"#fff"}} className="fa fa-linkedin col-md-3"></i>
                            </a>
                            <a href="https://www.instagram.com/association.robotique.ensi/">
                                <i style={{color:"#fff"}} className="fa fa-instagram col-md-3"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCQskKYc1rU9uzwPeMpIMhXg">
                                <i style={{color:"#fff"}} className="fa fa-youtube col-md-3"></i>
                            </a>
                            </ul>
                </Row>
                <Row >
                    <h2>Send us an e-mail</h2>
                </Row>
                <Form />
                </Col>
                </Row>
        </div>

    </div>
    );}
export default ContactSection;