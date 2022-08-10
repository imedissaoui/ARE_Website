import { motion } from "framer-motion";
import React, { Component } from "react";
import {Parallax} from "react-parallax";
import image from "./assets/final.png";
import './LandingSection.css';

class LandingSection extends Component{
  render(){
    return(
        <div id="landingContainer">
        <Parallax blur={3}bgImage={image} strength={300} style={{paddingTop:"5%",height:"500px"}}>
        
        <div id="text" ><motion.div initial={{scale:3}} animate={{scale: 1,borderRadius: ["20%", "20%", "50%", "50%", "20%"],} }transition={{ duration: 2.5 }}><h2>ENSI Robotics Association</h2></motion.div>
        <h3 style={{paddingTop:"1%"}}>#Ignite_the_PASSION</h3>
  <button className="buttonScrollDown"onClick={this.props.fct}><i id="iconDown"className="fa fa-arrow-down"style={{color :"#e2ac0d",zIndex:"1"}}></i></button>

            </div>
            
        </Parallax>
        </div>
    )
  }
}
export default LandingSection;
