import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
import {NAV_ITEMS} from "../NavbarItems/data/NavbarItems"
import logo from "../../img/logo.png"

const getLocation = location => {
    for (let i=0; i<NAV_ITEMS.length; i++)
        if( NAV_ITEMS[i]['href'] === location) 
            return i
}

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'transparent': window.scrollY > 70 ? false : true,
            'onShow': false,
            'mobileVersion': window.innerWidth < 900,
            'location': getLocation(this.props.location)
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    handleScroll (){
        this.setState({
            'transparent':window.scrollY >70 ? false: true
        })
    }

    handleToggle(){
        this.setState(state => {
            return{
                'onShow': state.mobileVersion ? !state.onShow: state.onShow
            }
        })
    }

    handleResize(){
        this.setState(()=>{
            if (window.innerWidth < 900) return {'mobileVersion': true, 'onShow': false}
            else return {'mobileVersion': false}
        })
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    render(){
        const background = (this.state.transparent && this.state.onShow===false) ? "transparent": "";
        const btnIcon = this.state.onShow ? "fas fa-times" :"fas fa-bars";
        
        return (
            <nav id="navbar">
                <div className={`container-fluid ${background}`}>
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="95" height="95"/>
                        
                    </Link>

                    <Toggeler onClick={this.handleToggle}>
                        <i className={`nav-icon ${btnIcon}`}></i>
                    </Toggeler>

                    <CollapseNavBar display={this.state.onShow}
                    setDisplay = {this.handleToggle}
                    activeItem ={this.state.location}
                    />

                </div>
            </nav>
        )
    }
}

const CollapseNavBar = (props) =>{
    const activeItem = props.activeItem 
    const display = props.display? "active-nav" : "";
    return(
        <div className={`navbar-collapse ${display}` } >
            <ul>
            <div className="social-bar1">
                {
                    NAV_ITEMS.map((value, index)=> 
                        <li className="nav-item" key={index}>
                            <Link className={`${value.cName} ${activeItem === index ?"active-nav-link": "" }` }
                            to={value.href}>
                            {value.title}
                            </Link>
                        </li>
                    )
                }
            </div>
                <div className="social-bar2">
                <li className="nav-item" >
                            <a className="active-nav-link" href='https://www.facebook.com/association.robotique.ensi' ><i style={{color:"white"}}className="fa fa-facebook" width="95" height="95"></i>
                            
                            </a>
                </li>
                <li className="nav-item">
                <a className="active-nav-link" href='https://www.instagram.com/association.robotique.ensi/' ><i style={{color:"white",width:"95", height:"95"}} className="fa fa-instagram" ></i>
                            
                            </a>
                </li>
                <li className="nav-item" >
                <a className="active-nav-link" href='https://tn.linkedin.com/company/cr-ensi' ><i style={{color:"white"}} className="fa fa-linkedin" width="95" height="95"></i>
                            
                            </a>
                </li>
                <li className="nav-item" >
                <a className="active-nav-link" href='https://www.youtube.com/channel/UCQskKYc1rU9uzwPeMpIMhXg' ><i style={{color:"white"}}className="fa fa-youtube" width="95" height="95"></i>
                            
                            </a>
                </li>
                </div>

            </ul>
        </div>
    );
}

const Toggeler =(props) => {
    return(
        <button className="navbar-toggler" onClick={props.onClick}>
            {props.children}
        </button>       
    )
}

export default NavBar;