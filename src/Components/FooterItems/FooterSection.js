import './footer.css'

const FooterSection =  (props)=>{
    return(
        <footer id="footer">
            <div className="container1">
                <div className="row-1 row" id="about-us">
                    <p className="row-title">About us</p>
                    <hr className="seperator"/>
                    <div className="content">
                        <p> ENSI Robotics Association is a non-profit organization, founded in 2006 by young students with big dreams and great passions for robotics. Our association, which now has more than a 100 members, is made up of three poles: Media, commercial development and project. What’s more, we are working on 4 axes: event, training, competition and aeronautics axis. ARE offers its members excellent technical training, accompanied by exceptional managerial experience. Insisting on the pursuit of innovation, we believe our association will march into a bright future.</p>
                        <div className="social-bar">
                            <a href="https://www.facebook.com/association.robotique.ensi" target="_black"><i style={{color:"white"}}className="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/association.robotique.ensi/" target="_black"><i style={{color:"white"}} className="fa fa-instagram"></i></a>
                            <a href="https://tn.linkedin.com/company/cr-ensi" target="_white"><i style={{color:"white"}} className="fa fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/channel/UCQskKYc1rU9uzwPeMpIMhXg" target="_black"><i style={{color:"white"}} className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <div className="row-2 row" id="quick-links">
                    <p className="row-title">Quick Links</p>
                    <hr className="seperator"/>
                    <div className="content">
                        <ul className="footer-nav">
                            <li className="footer-item"><a className="footer-link" href="/activities">Home</a></li>
                            <li className="footer-item"><a className="footer-div" href="/projects">Projects</a></li>
                            <li className="footer-item"><a className="footer-div" href="/activities">Activities</a>
                                <ul className="footer-subnav">
                                    <li className="footer-sub-item"><a className="footer-sub-div" href="/workshops">Workshops</a></li>
                                    <li className="footer-sub-item"><a className="footer-sub-div" href="/competitions">Participations in competitions</a></li>                                </ul>
                            </li>
                            <li className="footer-item"><a className="footer-div" href="/events">Events</a>
                                <ul className="footer-subnav">
                                    <li className="footer-sub-item"><a className="footer-sub-div" href="/events">RoboCup</a></li>
                                    <li className="footer-sub-item"><a className="footer-sub-div" href="/events">RoboCamp</a></li>
                                    <li className="footer-sub-item"><a className="footer-sub-div" href="/events">BootCamp</a></li>
                                    <li className="footer-sub-item"><a className="footer-sub-div" href="/events">SuperCup</a></li>
                                </ul>
                            </li>
                            <li className="footer-item"><a className="footer-div" href="/members">Members</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row-3 row" id="contact-info">
                    <p className="row-title">Contact info</p>
                    <hr className="seperator"/>
                    <div className="content">
                        <div className="label">
                            <i className="contact-icon fa fa-map-marker"></i>
                            <p>Manouba campus , ENSI</p>
                        </div>
                        <div className="label">
                            <i className="contact-icon fa fa-phone"></i>
                            <p><span>+ 23742765</span><br/>+ 23784408</p>
                        </div>
                        <div className="label">
                            <i className="contact-icon fa fa-envelope"></i>
                            <p>association.robotique@ensi-uma.tn</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container2">
                <p>Copyright &copy; {new Date().getFullYear()} ENSI Robotics Association. All rights reserved</p>
            </div>
        </footer>
    )
}

export default FooterSection;