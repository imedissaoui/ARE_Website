import React from "react";
import './form.css';
import emailjs from 'emailjs-com';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email : "" , object : "" , mail : ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    }

  handleSubmit(event) {
    alert("Le nom a été soumis : " + this.state.value);
    event.preventDefault();
    

    emailjs.sendForm('gmail', 'contactus', event.target, 'user_k8mIXMIUhYQgp4qQaXNar')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
  }

  render() {
    return (
        <form className="form-div" action="" method="POST" onSubmit={this.handleSubmit}>
          <div class="row">
            <div className="col-md-4" >
              <label for="fname">E-mail :</label>
            </div>
            <div className="col-md-8" width="100%">
              <input
                class="theInputs"
                type="text"
                name="email"
                placeholder="Your email"
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
          <div class="row">
            <div className="col-md-4">
              <label for="fname">Object :</label>
            </div>
            <div className="col-md-8">
              <input
                class="theInputs"
                type="text"
                name="object"
                placeholder="Write here the object of the mail "
                onChange={this.handleChange}
              
              ></input>
            </div>
          </div>
          <div class="row">
            <div className="col-md-4">
              <label for="fname">Your mail :</label>
            </div>
            <div className="col-md-8">
              <textarea
                class="theInputs"
                name="mail"
                placeholder="Write here the mail"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <input className="sendbtn" type="submit" value="Send" />
        </form>
    );
  }
}
