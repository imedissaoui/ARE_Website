import React,{Component} from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {Items} from "./servicesItems";
class ServicesSection extends Component{
  constructor(props){
    super(props);
    this.state={height:"500px",

    };

  }
  static SetHeight(){
    this.setState.height ="800px";
  }
  render(){
  return (
      <>
    <AnimateSharedLayout>
      <div className="container" style={{height:"100%"}} >
      <motion.div layout initial={{ borderRadius: 25 }}>
      <div className="row col-md-12 col-sm-12">
      {Items.map(item => (<div className="col-md-6 col-sm-12">
          <Item key={item.id} source={item.src} desc={item.desc} name={item.name}/>
        </div> 
        
        ))}
        </div>
      </motion.div>
      </div>
    </AnimateSharedLayout>
    </>
  );
}}
export default ServicesSection;


function Item({source,desc,name}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    //SetHeight();
  }

  return (
    <motion.div layout  onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout /><h3 style={{paddingTop:"2%",color:"white"}}>{name}</h3>
      <img data-aos="flip-down" data-aos-delay="100" data-aos-duration="2000" style={{cursor:"pointer"}} src={source} width="50%" />
      <AnimatePresence>{isOpen && <Content desc={desc} />}</AnimatePresence>
    </motion.div>
  );
}

function Content({desc}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    style={{color:'#E1DBBD',border:"3px Solid white",borderRadius:"30px",paddingTop:"2%",paddingBottom:"2%"}}
    >
      {desc}
    </motion.div>
  );
}

