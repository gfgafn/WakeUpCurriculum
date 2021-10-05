import React, { Component } from "react";
import AddCourse from "../AddCourse";
import Setting from "../Setting";
import "./index.css";
export default class Header extends Component {
  addCourse() {
    this.AddCourse.showStatus();
  }
  setting() {
    this.Setting.showStatus();
  }
  render() {
    return (
      <div>
        <header className="header">
          <ul>
            <li>
              <span id="year">2021</span>/<span id="month">10</span>/
              <span id="date">1</span>
            </li>
            <li>
              <span id="weekNum">非本周</span>
              <span id="weekDay">周日</span>
            </li>
          </ul>
          <div>
            <span className="icon-plus" onClick={() => this.addCourse()}></span>
            <span className="icon-arrow-down"></span>
            <span className="icon-redo2"></span>
            <span className="icon-equalizer" onClick={() => this.setting()}></span>
          </div>
        </header>
        <AddCourse ref={(Component) => (this.AddCourse = Component)} />
        <Setting ref={(Component) => (this.Setting = Component)} />
      </div>
    );
  }
  componentDidMount() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let weekDay = now.getDay();
    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("date").innerHTML = date;
    switch (weekDay) {
      case 0:
        weekDay = "日";
        break;
      case 1:
        weekDay = "一";
        break;
      case 2:
        weekDay = "二";
        break;
      case 3:
        weekDay = "三";
        break;
      case 4:
        weekDay = "四";
        break;
      case 5:
        weekDay = "五";
        break;
      case 6:
        weekDay = "六";
        break;
      default:
        break;
    }
    document.getElementById("weekDay").innerHTML = `周${weekDay}`;
    let d1 = "2021-9-06";
    let dateBegin = new Date(d1.replace(/-/g, "/")); //将-转化为/，使用new Date
    let dateEnd = new Date(); //获取当前时间
    let dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    let weekNum = Math.floor(dateDiff / (7 * 24 * 3600 * 1000)) + 1; //计算出相差周数
    document.getElementById("weekNum").innerHTML = `第${weekNum}周`;
  }
}
