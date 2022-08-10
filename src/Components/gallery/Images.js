import React, { Component } from 'react';
import './images.css';
import Img from './Img';
import LargeImage from './LargeImg';
import Data from '../../data/GalleryData/data'
import HeaderSection from "../NavbarItems/HeaderSection"
import Footer from "../FooterItems/FooterSection"
import im17 from '../../img/Gallery/thumbs/1.jpg'
import { motion } from 'framer-motion';



class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLst: Data,
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none',
                    position: "",
                        right: "0",
                        background: "",
                        top: "",
                        borderRadius: "",
                        boxShadow: "",
                        fontWeight:"",
                        userSelect: "",
                        height: "",
                        width:"",
                        zIndex: "",
                        transform: "",
                    
                },
                imgListConStyle: {
                    display: 'flex',
                    
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: '',
                bg:'',
            }
        }
    }

    handleClick = (e) => {
        console.log("this is working fine");
        e.preventDefault();



        if (this.state.imgStyle.imgListConStyle.display === 'flex') {
            console.log("Large Image title: " + this.state.lrgImg.title);

            this.setState({
                imgStyle: {
                    lrgImgConStyle: {
                        display: 'block',
                        position: "fixed",
                        backgroundSize:"cover",
                        top: "7%",
                        borderRadius: "0px 10px 0px 10px",
                        boxShadow: "0 0 3px 0 #000000a1",
                        fontWeight:"bold",
                        userSelect: "none",
                        height: "90vh!important",
                        width:"20vh!important",
                        zIndex: "1000",
                    },
                    imgListConStyle: {
                        display: 'flex'
                    }
                },
            });

            Object.values(this.state.imgLst).forEach(element => {
                console.log(element.imgSrc);
                let sourceString = e.target.src.toString().slice(21);
                console.log(sourceString);




                if (element.imgSrc === sourceString) {
                    console.log("Source is matched");
                    console.log("Elelment title: " + element.title);


                    this.setState({
                        lrgImg: {
                            imgSrc: e.target.src,
                            title: element.title,
                            details: element.details,
                            bg:element.bg,
                        }
                    });
                } else {
                    console.log("Source didn't match");
                }
            });

        } else {
            console.log("Something went wrong");

        }
    }

    closeLargeImage = (e)=>{
        e.preventDefault();
        console.log("close button is working fine");
        this.setState({
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
        });
    }

    buttonStyle = {
        background: 'none',
        border: 'none',
        top: '5%'
    }



    render() {
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={this.buttonStyle} key={image.imgSrc} ><motion.div whileHover={{
                    scale: 1.5,
                    transition: { duration: 1 },
                  }}><Img src={image.imgSrc}></Img></motion.div></button>
            );
        })



        return (
            <React.Fragment >
                <HeaderSection/>
                <div className="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <LargeImage data-aos="zoom-out" bg={this.state.lrgImg.bg} closeButton={this.closeLargeImage} title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImage>
                    {/* <LargeImage title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
                </div>
                <div className="wrapper" data-aos="fade-down"style={this.state.imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}


export default Images;