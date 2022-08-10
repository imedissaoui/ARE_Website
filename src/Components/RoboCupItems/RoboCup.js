import "./RoboCup.css";
 import { HashLink } from "react-router-hash-link";
import { IoGolfOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import HeaderSection from "../NavbarItems/HeaderSection"; 
import FooterSection from "../FooterItems/FooterSection";




const RoboCup = () => {
    const History=useHistory(); 
    const goToAboutSection=()=>window.scrollTo({top:(document.getElementById("Hard").offsetTop), behavior:"smooth"});
  const goToServicesSection=()=>window.scrollTo({top:(document.getElementsByClassName("sc-ieebsP fnKoge")[0].offsetTop),behavior:"smooth"})
  const goToActivitiesSection=()=>window.scrollTo({top:(document.getElementById("ActivitiesContainer").offsetTop),behavior:"smooth"})
  const goToContactSection=()=>window.scrollTo({top:(document.getElementById("contactus").offsetTop),behavior:"smooth"})

    return ( 

    <div className="Robocup">
        <HeaderSection fct1={goToAboutSection} fct2={goToActivitiesSection} fct3={goToServicesSection} fct4={goToContactSection}/>
        
        <div className="affiche-cover">
            <img  className="Image-cover"/>
            <HashLink className="buttonScrollDown" to="#TheArsenal" smooth><i id="iconDown"className="fa fa-arrow-down"style={{color :"#e2ac0d",zIndex:"1"}}></i></HashLink>
        </div>
        <div className="separator"></div>
        <div className="concours">
            <div className="TheArsenal" id="TheArsenal">
                <div className="header">
                    <h1>The Arsenal</h1>
                    <h3>Line Follower</h3>
                </div>
                <div className="concour">
                    <div className="affiche">
                        <img src="./TheArsenal.png" alt="" />
                    </div>
                    <div className="buttons">
                        <a href="https://drive.google.com/file/d/1vLVzw6dbubZ9L9apOjuuQCwaxpTuM4il/view?usp=sharing"><button className="btn btn-robocup"  >Cahier Des Charges</button></a>
                        <a href="https://forms.gle/pg3vUhKJGgqA4KTm6"><button className="btn btn-robocup" >S'inscrire</button></a>
                    </div>
                </div>
            </div>

            <div className="separator"></div>

            <div className="Chernobot">
                <div className="header">
                    <h1>ChernoBot</h1>
                    <h3>Autonomus</h3>
                </div>
                <div className="concour">
                <div className="affiche">
                    <img src="./ChernoBot.png" alt="" />
                </div>
                <div className="buttons">
                    <a href="https://drive.google.com/file/d/1FHmD5Wle7F5_INcCoBYwAmdOaH4oRLvF/view?usp=sharing"><button className="btn btn-robocup">Cahier Des Charges</button></a>
                    <a href="https://forms.gle/8saYbZQ4hf87FFQh7"><button className="btn btn-robocup">S'inscrire</button></a>
                </div>
                </div>
                
            </div>

            <div className="separator"></div>

            <div className="SpecialOps">
                <div className="header">
                        <h1>Special Ops</h1>
                        <h3>All Terrains</h3>
                </div>
                <div className="concour">
                    <div className="affiche">
                    <img src="./Special Ops.png" alt="" />
                </div>
                <div className="buttons">
                    <a href="https://drive.google.com/file/d/1ZIj_1wOFMAYj8h2NiaecIHfE1Y2nXsdL/view?usp=sharing"><button className="btn btn-robocup" >Cahier Des Charges</button></a>
                    <a href="https://forms.gle/w2eMyxTmBrgMZq7W9"><button className="btn btn-robocup" >S'inscrire</button></a>
                </div>
                </div>
            </div>

            <div className="separator"></div>

            <div className="JuniorSoldier">
                <div className="header">
                        <h1>Junior Soldier</h1>
                        <h3>Junior</h3>
                </div>
                <div className="concour">
                    <div className="affiche">
                    <img src="./Junior Soldier.png" alt="" />
                </div>
                <div className="buttons">
                    <a href="https://drive.google.com/file/d/1IK7lzqstK6bhLSdRspb1Q5S8NoWSY2P8/view?usp=sharing"><button className="btn btn-robocup" >Cahier Des Charges</button></a>
                    <a href="https://forms.gle/pxk2rDUyhjgcZE347"><button className="btn btn-robocup" >S'inscrire</button></a>
                </div>
                </div>
            </div>

            

        </div>
            
    </div>
     );
}
 
export default RoboCup;