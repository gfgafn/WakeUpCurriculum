import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Login from "../../Pages/Login";
import "./index.css";

export default class Setting extends Component {
  showStatus() {
    const setting = document.getElementById("setting");
    setting.classList.toggle("active");
  }
  render() {
    return (
      <div id="setting" className="setting">
        <header onClick={() => this.showStatus()}></header>
        <article>
          <section className="currentSchedule">
            <div>
              <p>
                <span>周数</span>
                <span>修改当前周</span>
              </p>
              <p>
                <span>
                  <span>
                    <span></span>
                  </span>
                </span>
              </p>
            </div>
            <div>
              <div>
                <span>多课表</span>
                <span>新建课表</span>
                <span>管理</span>
              </div>
              <ul>
                <li>
                  <span></span>
                  <span>大一上</span>
                </li>
                <li>
                  <span></span>
                  <span>大一下</span>
                </li>
                <li>
                  <span></span>
                  <span>大二下</span>
                </li>
                <li>
                  <span className="icon-cog"></span>
                  <span>大三上</span>
                </li>
                <li>
                  <span></span>
                  <span>大三下</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="settingType">
            <ul>
              <li>
                <span className="icon-clock"></span>
                <span>上课时间</span>
              </li>
              <li>
                <span className="icon-image"></span>
                <span>更换背景</span>
              </li>
              <li>
                <span className="icon-table2"></span>
                <span>已添课程</span>
              </li>
              <li>
                <span className="icon-question"></span>
                <span>常见问题</span>
              </li>
              <li>
                <span className="icon-info"></span>
                <span>关于</span>
              </li>
              <li>
                <span className="icon-twitch"></span>
                <span>吐个槽</span>
              </li>
              <li>
                <span className="icon-cog"></span>
                <span>全局设置</span>
              </li>
              <NavLink to="/login">
                <li
                  onClick={() => {
                    this.Login.showStatus();
                    this.showStatus();
                  }}
                >
                  <span className="icon-user"></span>
                  <span id="username">登录</span>
                </li>
              </NavLink>
            </ul>
          </section>
        </article>
        <Login ref={(Component) => (this.Login = Component)} />
      </div>
    );
  }
}
