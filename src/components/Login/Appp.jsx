import React, { Component } from "react";
import "./styles.css";
import CustomInput from "./CustomInput";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LoginEMailPassword  } from "../../firebase";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.myRef = React.createRef();
  }
  

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  SignIn = async () => {
    localStorage.setItem('userInfo', JSON.stringify(this.state));
     await LoginEMailPassword();
    const value = JSON.parse(localStorage.getItem('token'));
  }

  render() {
    return (
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChangeEmail}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChangePassword}
            type="password"
          />

          <Button type="button" className="form__custom-button" onClick={() => this.SignIn()}>
             {/* <Link to="./admin"  ref={this.myRef} style={{ textDecoration: "none" }} >  </Link> */}
             Log in
          </Button>
        </form>
      </div>
    );
  }
}
