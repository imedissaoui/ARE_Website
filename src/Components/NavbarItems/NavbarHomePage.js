import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './navbar.css';
import {NAV_ITEMS} from "./data/NavbarItems"
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
        const btnIcon = this.state.onShow ? "fa fa-times" :"fa fa-bars";
        
        return (
            <nav id="navbar">
                <div className={`container-fluid ${background}`}>
                    <Link className="navbar-brand" to="/">
                        
                    </Link>

                    <Toggeler onClick={this.handleToggle}>
                        <i className={`nav-icon ${btnIcon}`}></i>
                    </Toggeler>

                    <CollapseNavBar fct1={this.props.fct1} fct1={this.props.fct1} fct2={this.props.fct2} fct3={this.props.fct3}fct4={this.props.fct4}display={this.state.onShow}
                    setDisplay = {this.handleToggle}
                    activeItem ={this.state.location}
                    />

                </div>
            </nav>
        )
    }
}

const CollapseNavBar = (props) =>{
    const display = props.display? "active-nav" : "";
    return(
        <div className={`navbar-collapse ${display}` } >
            {console.log(props)}
            <ul style={{marginTop:"20px"}}>
                
                        <li className="nav-item" >
                            <Link className="nav-link" to='/'>
                            Home
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" onClick={props.fct1}>
                            About
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/projects">
                            Projects
                           
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={props.fct2}>
                            Activities
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link"to="/gallery"  >
                            Gallery
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" onClick={props.fct3} >
                            Our Services
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/members" >
                            Members
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" onClick={props.fct4} >
                            Contact Us
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="/Robocupensi"onClick={props.fct5} >
                            RoboCup
                            </Link>
                        </li>
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