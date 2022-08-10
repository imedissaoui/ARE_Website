import React from 'react';
import { Card,CardTitle,CardText,CardImg,CardBody} from 'reactstrap';
import { domAnimation, motion } from "framer-motion";
import CountUp from 'react-countup';
import image from "./assets/27.svg";
import image2 from "./assets/178.svg";
import image3 from "./assets/2611.svg";
import image4 from "./assets/311.svg";
import './RealisationSection.css';
function RealisationsSection () {
          return <>
          <div className="container" id="realisationsContainer" >
              <div className="row" id="realisationsRow">
                  <Card className="col-md-3 col-sm-12" data-aos="fade-down-right" data-aos-delay="500" data-aos-duration="3000" style={{backgroundColor:"transparent",border:"3px Solid white",borderRadius:"30px"}} >
                      <CardImg src={image} style={{width:"100%"}}/>
                        <CardBody>
                            <CardTitle style={{color: "#1D1C18",textAlign: "center",fontSize: "27px",color:"white",textShadow:"1px 1px 2px #E1DBBD, 0 0 15px #E2AC0D , 0 0 5px #E2AC0D"}}>Awards</CardTitle>
                            <CardText style={{color: "#E2AC0D",textAlign: "center",fontSize: "60px"}}>
                            <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
                            <CountUp end={2} duration={30} />
                            </motion.div>
                            </CardText>
                        </CardBody>
                    </Card>
                  <Card className="col-md-3 col-sm-12" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="500" style={{backgroundColor:"transparent",border:"3px Solid white" ,borderRadius:"30px"}} >
                      <CardImg src={image4} style={{width:"100%"}}/>
                        <CardBody>
                            <CardTitle style={{color: "#1D1C18",textAlign: "center",fontSize: "27px",color:"white",textShadow:"1px 1px 2px #E1DBBD, 0 0 15px #E2AC0D , 0 0 5px #E2AC0D"}}>Members</CardTitle>
                            <CardText style={{color: "#E2AC0D",textAlign: "center",fontSize: "60px"}}>
                            <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
                            <CountUp end={191} duration={30} />
                            </motion.div>
                            </CardText>
                        </CardBody>
                    </Card>
                  <Card className="col-md-3 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000" style={{backgroundColor:"transparent",border:"3px Solid white" ,borderRadius:"30px"}} >
                        <CardImg src={image2} style={{width:"100%"}}/>
                        <CardBody>
                            <CardTitle style={{color: "#1D1C18",textAlign: "center",fontSize: "27px",color:"white",textShadow:"1px 1px 2px #E1DBBD, 0 0 15px #E2AC0D , 0 0 5px #E2AC0D"}}>Projects</CardTitle>
                            <CardText style={{color: "#E2AC0D",textAlign: "center",fontSize: "60px"}}>
                            <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
                            <CountUp  end={15} duration={30} />
                            </motion.div>
                            </CardText>
                        </CardBody>
                    </Card>
                  <Card className="col-md-3 col-sm-12" data-aos="fade-down-left" data-aos-delay="500" data-aos-duration="3000" style={{backgroundColor:"transparent",border:"3px Solid white",borderRadius:"30px"}} >
                  <motion.div transition={{ duration: 1.5 }} animate={{rotate:[0, 0, 270, 270, 0] ,borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}>
                        <CardImg src={image3} style={{width:"100%"}} />
                        </motion.div>
                        <CardBody>
                            <CardTitle style={{color: "#1D1C18",textAlign: "center",fontSize: "27px",color:"white",textShadow:"1px 1px 2px #E1DBBD, 0 0 15px #E2AC0D , 0 0 5px #E2AC0D"}}>Hours of work</CardTitle>
                            <CardText style={{color: "#E2AC0D",textAlign: "center",fontSize: "60px"}}>
                            <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
                            <CountUp end={200} duration={30} />
                            </motion.div>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="3000" className="row" id="text">
                    <div className="col-md-2"></div><div  className="col-md-8 col-sm-12">Wanna take a look at our projects ? </div><div className="col-md-2"></div></div>
                <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000" className="row" id="box">
                <div className="col-md-2"></div><div  className="col-md-8 col-sm-12"><a href="/projects"style={{color:"white"}}> Click Here ! </a> </div><div className="col-md-2"></div></div>


                </div>
              </>
      };

export default RealisationsSection;