import React, { Component } from 'react';

class Img extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div data-aos="fade-down" className="img-holder" >
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}

export default Img;