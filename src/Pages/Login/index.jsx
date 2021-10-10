import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as HTTP from "../../http/api";
import Register from "../Register";
import "./index.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  showStatus() {
    const login = document.getElementById("login");
    login.classList.toggle("active");
  }
  getValue(e, name) {
    let data = {};
    data[name] = e.target.value;
    this.setState(data);
  }
  login() {
    const usernameEl = document.getElementById("username");
    HTTP.login(this.state).then((responseData) => {
      console.log(responseData);
      let { code, success } = responseData;
      if (code === 200 || success) {
        usernameEl.innerHTML = this.state.username;
        // this.props.history.push('/home')
      }
    });
  }
  render() {
    return (
      <div id="login" className="login">
        <ul>
          <li>
            <NavLink to="/home">
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
              placeholder="密码"
              onChange={(e) => this.getValue(e, "password")}
            ></input>
          </li>

          <li>
            <span onClick={() => this.login()}>登录</span>
          </li>
          <li onClick={() => this.Register.showStatus()}>
            <NavLink to="/register">
              <span>还没有账号，去注册</span>
            </NavLink>
          </li>
        </ul>
        <Register ref={(Component) => (this.Register = Component)} />
      </div>
    );
  }
}
