import React , {useEffect ,useState, useRef } from 'react';
import styled , {css} from 'styled-components/macro';

import {IoArrowForward , IoArrowBack} from 'react-icons/io5';

const HeroSection = styled.section `

 height :100vh;
 max-height : 1100px ;
 overflow : hidden;
 position : relative;




`;

const HeroWrapper = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div `

 z-index:1;
 width:100%;
 height:100%;

`;
const HeroSlider = styled.div `
    position: absolute;
  
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    

    &::before {
    content:'';
    position:absolute;
    z-index: 2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.9;
    background: linear-gradient(0deg , rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.8) 100% );
}

`;
const HeroImage = styled.img `

position:absolute;

left:0;
top:0;
width:100%;
height:100%;


    
    
    



`;
const HeroContent = styled.div `
  
  position:relative;
  z-index:10;
  display:flex;
  bottom:200px ;
  right:200px;
  height:100px;
  max-width:1000px;
 
 
  

  h1{
      padding-left:10%;
    font-size: 50px;
    padding-top:70px;
    color:#E2AC0D;
  }

  span{
   
      font-size:70px;
     
      text-align:left;
      color:#fff;
  }
 
      
     

  


`; 


const SliderButtons = styled.div`
position: absolute;
bottom:50px;
right:50px;
display:flex;
z-index: 10;

`;

const arrowButtons = css `
  width:50px;
  height: 50px;
  color: #fff;
  cursor : pointer;
  background: #1D1C18;
  border-radius:  50px ;
  padding : 10px;
  margin-right: 1rem;
  user-select: none;

  &:hover {
      background: #E2AC0D;
      transform: scale(1.05);


  }



`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}


`

const NextArrow = styled(IoArrowForward)`
${arrowButtons}


`


const Hero = ({slides}) => {

const [current,setCurrent]= useState(0)
 const length = slides.length
 const timeout = useRef(null)

 useEffect(() => {
    const nextSlide = () => {
        setCurrent(current  => (current === length -1 ? 0 : current +1));
    };
    timeout.current = setTimeout ( nextSlide , 4000);
    return function (){
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    };
} , 
[current , length] 
);

 const nextSlide = () => {
     setCurrent(current === length - 1 ? 0 : current + 1 )
     console.log(current)
   

 }

 const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1 )
    console.log(current)
  

}

return (
        <HeroSection>
            <HeroWrapper>
                 {slides.map((slide, index) => {
                     return(
                         <HeroSlide key={index}>
                             {index === current && (
                             <HeroSlider>
                                 <HeroImage src={slide.image} />
                                     <HeroContent>
                                         <h1></h1>
                                         
                                         
                                        
                                     </HeroContent>
                                 
                             </HeroSlider>
                             )}
                         </HeroSlide>
                     );
                 })}
                 <SliderButtons>
                     <PrevArrow onClick={prevSlide}/>
                        
                     <NextArrow onClick={nextSlide}/>
                 </SliderButtons>
           
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;
