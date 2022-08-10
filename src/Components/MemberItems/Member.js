import React from "react";
import "./Members.css"

export default class Member extends React.Component {
  render() {
    return (
      <div className="col-md-3 profile text-center">
        <div className="img-box" data-aos={"fade-up"} data-aos-duration="1000">
          <img id="img-responsive"src={this.props.photo} className="img-responsive"></img>
          <ul>
            <a href={this.props.facebook}>
              <li>
                <i className="fa fa-facebook"></i>
              </li>
            </a>
            <a href={this.props.linkedin}>
              <li>
                <i className="fa fa-linkedin"></i>
              </li>
            </a>
            <div>
              <i className="fa fa-envelope-open">{this.props.email}</i>
              
            </div>
            <div>
              <i className="fa fa-phone">{this.props.num}</i>
            </div>
          </ul>
        </div>
        <h2 data-aos={"fade-up"} data-aos-duration="1000">
          {this.props.nom_prénom}
        </h2>
        <h3 data-aos={"fade-up"} data-aos-duration="2000">
          {this.props.role}
        </h3>
      </div>
    );
  }
}
