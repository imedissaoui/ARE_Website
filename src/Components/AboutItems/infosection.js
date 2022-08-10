import React from 'react';
import {InfoContainer, InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img} from './infoElements';




const InfoSection = ({lightBg,lightText, id , imgStart , topLine ,headline, darkText,desc,img} ) => {
    return(
        <>
        
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1 data-aos="flip-left" data-aos-delay="500" data-aos-duration="3000">
                     <TextWrapper>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{desc}</Subtitle>

                     </TextWrapper>
                     </Column1>
                     <Column2 data-aos="fade-right" data-aos-delay="300" data-aos-duration="3000" >
                       <ImgWrap>
                       <Img src={img} />
                       </ImgWrap>
                     </Column2>
                 </InfoRow>

             </InfoWrapper>

         </InfoContainer>
       
        </>
    );
};

export default InfoSection;