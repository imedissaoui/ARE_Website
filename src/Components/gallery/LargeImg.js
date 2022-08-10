import React from 'react';
import icon from './icon/close-svg.svg'


const LargeImg =(props)=>{
    return(
        <div className="lg-img-hldr" >
            <div className="top-bar">
                <a href="#"><i className="fa fa-times" onClick={props.closeButton} style={{color:"white",right:"100%"}}></i></a>
            </div>
            <img data-aos="zoom-out" data-duration="3000"src={props.src} alt=""/> 
            <div className="bottom-bar">
                    <h3 data-aos="flip-left" className="name">{props.title}</h3>
                    <div data-aos="flip-right" className="descriptions">
                        {props.details}
                        {/* <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, quasi?</div> */}
                    </div>
                    
            </div>
        </div>
    );
}


export default LargeImg;