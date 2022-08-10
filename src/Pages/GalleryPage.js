import React, { Fragment } from 'react';
import './GalleryPage.css';
import Gallery from '../Components/gallery/Gallery'
import Header from '../Components/gallery/Header'
import getData from '../data/GalleryData/data'
import HeaderSection from '../Components/NavbarItems/HeaderSection'
import FooterSection from '../Components/FooterItems/FooterSection';


function GalleryPage55() {
  let images = getData();
  return (
    <Fragment>
      <HeaderSection/>
      <div className="container">
      <Header />
      <div className="gallery">
        <Gallery imgarr={images} />
      </div>
      </div>
      <FooterSection/>
    </Fragment>
  );
}

export default GalleryPage55;
