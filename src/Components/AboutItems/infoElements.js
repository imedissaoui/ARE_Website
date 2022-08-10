import styled from 'styled-components';


export const InfoContainer = styled.div`
color:#fff;
height:fit-content;
background: ${({lightBg}) => (lightBg ? '#E1DBBD' : '#000000')};
padding:5% 5% 5% 5%;

@media screen and (max-width: 900px) {
    padding: 100px 0;
    height:fit-content;
    display:block;
}

`;

export const InfoWrapper = styled.div`
  display:grid;
  z-index:1;
  height:300px;
  width:100%;
  max-width:1100px;
  margin-right:auto;
  margin-left:auto;
  padding:0 24px;
  justify-content:center;
  @media screen and (max-width: 900px) {
   display:block;
   z-index:1;
   height:300px;
   width:100%;
   max-width:600px;
   margin-right:auto;
   margin-left:auto;
   padding:0 24px;
   justify-content:center;
}


`;

export const InfoRow  = styled.div`
 display:grid;
 grid-auto-columns:minmax(auto,1fr);
 align-items:center;
 grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2' `)};

 @media screen and (max-width: 900px) {
   display:grid;
   height:fit-content;

     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
 }
`;

export const Column1 = styled.div`
  margin-bottom:15px;
  padding:0 15px;
  grid-area: col1;
  
  @media screen and (max-width:900px){
   grid-area: col1;
   z-index:10;
   position:relative;
   
   
   
   
  }

`;

export const Column2 = styled.div`
  margin-bottom:15px;
  
  padding:0 15px;
  grid-area: col2;
  @media screen and (max-width:900px){
   
   grid-area: col1;
   z-index:1;
  
  }

`;

export const TextWrapper = styled.div`
   max-width: 540px;
   padding-top:0;
   padding-bottom:60px;
   @media screen and (max-width: 900px) {
      max-width: 500px;
  
   }
   

`;
export const TopLine = styled.div`
   color:#E2AC0D;
   font-size:20px;
   line-height:16px;
   font-weight:700;
   letter-spacing:1.4px;
   text-transform:uppercase;
  
   padding-bottom:16px;
   
   }

`;
export const Subtitle = styled.p`
   color:${({darkText}) => (darkText ? '#1D1C18' : "#E1DBBD")};
   font-size:18px;
   line-height:24px;
   max-width:440px;
   padding-bottom:35px;

`;
export const Heading = styled.h1`
   color:${({lightText}) => (lightText ? '#E1DBBD' : '#1D1C18')};
   font-size:48px;
   line-height:45px;
   font-weight:600;
   padding-bottom:30px;

   @media screen and (max-width: 900px) {
       font-size:32px;
   }

`;

export const ImgWrap = styled.div`
   max-width:555px;
   height:100%;
   @media screen and (max-width: 900px) {
      max-width:500px;
      z-index:1;
   }

`;

export const Img = styled.img`
   width:100%;
   height:100%;
   margin:0 0 100px 0;
   padding-right:0;
   @media screen and (max-width: 900px) {
      z-index:0;
      opacity:0.6;
   }
   

`;