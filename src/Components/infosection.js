import React from 'react';
import {InfoContainer, InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img} from './infoElements';




const InfoSection = ({lightBg,lightText, id , imgStart , topLine ,headline, darkText,desc,img} ) => {
    return(
        <>
        
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1 data-aos="fade-left">
                     <TextWrapper>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{desc}</Subtitle>

                     </TextWrapper>
                     </Column1>
                     <Column2 data-aos="fade-right">
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