import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as HTTP from "../../http/api";
import "./index.css";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordSec: "",
    };
  }
  showStatus() {
    const register = document.getElementById("register");
    register.classList.toggle("active");
  }
  getValue(e, name) {
    let data = {};
    data[name] = e.target.value;
    this.setState(data);
  }
  checkFormat(data) {
    if (data.password === data.passwordSec) {
      let formData = {
        username: data.username,
        password: data.password,
      };
      return formData;
    } else {
      return false;
    }
  }
  register() {
    let registerFormdata = this.checkFormat(this.state);
    if (registerFormdata) {
      HTTP.register(registerFormdata);
    }
  }
  render() {
    return (
      <div id="register" className="register">
        <ul>
        <li>
            <NavLink to="/login">
              <span
                className="icon-cross"
                onClick={() => this.showStatus()}
              ></span>
            </NavLink>
          </li>
          <li>
            <input
              type="text"
              placeholder="用户名"
              onChange={(e) => this.getValue(e, "username")}
            ></input>
          </li>
          <li>
            <input
              type="password"
              placeholder="请输入密码"
              onChange={(e) => this.getValue(e, "password")}
            ></input>
          </li>
          <li>
            <input
              type="password"
              placeholder="请再次输入密码"
              onChange={(e) => this.getValue(e, "passwordSec")}
            ></input>
          </li>
          <li>
            <span onClick={() => this.register()}>注册</span>
          </li>
        </ul>
      </div>
    );
  }
}
