import React from "react";

import "../Components/MemberItems/Members.css"
import {BE202021,ST202021,CO202021,BE201920,BE201819, BE201718} from "../data/MembersData/infodata";
import Team2021 from "../img/MEMBERS/20_21/TP2021.jpg"
import Team1920 from "../img/MEMBERS/19_20/TP1920.jpg"
import Team1819 from "../img/MEMBERS/18_19/TP1819.jpg"

import Member from "../Components/MemberItems/Member";
import FooterSection from "../Components/FooterItems/FooterSection";
import HeaderSection from "../Components/NavbarItems/HeaderSection";


function Members() {
  return (
    <>
    <HeaderSection />
    <div className="container">
    <div className="members-page">
    
      <section className="bureau">
        <div className="container-members">
        <h1 data-aos="fade-left" className="titles">- Team photo 2020/2021 -</h1>
          <div data-aos="zoom-out" >
              <img width="100%" src={Team2021}/>
          </div>
          <h1 data-aos="fade-right" className="titles">Executive Board 2020/2021</h1>
          <div className="row">
              {BE202021.map(member=>(
                  <Member className="col-md-3 " num={member.number} photo={member.image} nom_prénom={member.name} role={member.role} linkedin={member.linkedin} facebook={member.facebook} email={member.email} />
              ))}
          </div>
          <h1 data-aos="fade-left" className="titles">Technical staff 2020/2021</h1>
          <div className="row">
              {ST202021.map(member=>(
                  <Member className="col-md-2" num={member.number} photo={member.image} nom_prénom={member.name} role={member.role} linkedin={member.linkedin} facebook={member.facebook} email={member.email} />
              ))}
          </div>
          <h1 data-aos="fade-right" className="titles">Organisation committee 2020/2021</h1>
          <div className="row">
              {CO202021.map(member=>(
                  <Member className="col-md-2" num={member.number} photo={member.image} nom_prénom={member.name} role={member.role} linkedin={member.linkedin} facebook={member.facebook} email={member.email} />
              ))}
          </div>
          <h1 data-aos="fade-left" className="titles">- Team photo 2019/2020 -</h1>
          <div data-aos="zoom-out" >
              <img width="100%" src={Team1920}/>
          </div>
          <h1 data-aos="fade-right" className="titles">Executive Board 2019/2020</h1>
          <div className="row">
              {BE201920.map(member=>(
                  <Member className="col-md-3" num={member.id} photo={member.image} nom_prénom={member.name} role={member.role} linkedin={member.linkedin} facebook={member.facebook} email={member.email} />
              ))}
          </div>
          <h1 data-aos="fade-left" className="titles">- Team photo 2018/2019 -</h1>
          <div data-aos="zoom-out">
              <img width="100%" src={Team1819}/>
          </div>
          <h1 data-aos="fade-right" className="titles">Executive Board 2018/2019</h1>
          <div className="row">
              {BE201819.map(member=>(
                  <Member className="col-md-3" num={member.id} photo={member.image} nom_prénom={member.name} role={member.role} linkedin={member.linkedin} facebook={member.facebook} email={member.email} />
              ))}
          </div>
          
          <h1 data-aos="fade-right" className="titles">Executive Board 2017/2018</h1>
          <div className="row">
              {BE201718.map(member=>(
                  <Member className="col-md-3" num={member.id} photo={member.image} nom_prénom={member.name} role={member.role} linkedin={member.linkedin} facebook={member.facebook} email={member.email} />
              ))}
          </div>
          


        </div>
      </section>
      

      
    </div>
    </div>
    <FooterSection/>
    </>
  );
}

export default Members;
