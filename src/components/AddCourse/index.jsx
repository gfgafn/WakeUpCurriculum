import React, { Component } from "react";
import "./index.css";
export default class AddCourse extends Component {
  showStatus() {
    const addCourse = document.getElementById("addCourse");
    addCourse.classList.toggle("active");
  }
  getValue(event, name) {
    let data = {};
    data[name] = event.target.value;
    this.setState(data);
  }
  delThisDetail(element) {
    element.target.remove();
    console.log(element.target);
  }
  http_addCourse() {}
  incDetail() {
    const detail = document.getElementById("detail");
    console.log(detail);
  }
  render() {
    return (
      <div id="addCourse" className="addCourse">
        <header>
          <span onClick={() => this.showStatus()}>
            <span></span>
          </span>
          <span>添加课程</span>
          <span
            onClick={() => {
              return this.showStatus(), this.http_addCourse();
            }}
          >
            保存
          </span>
        </header>
        <div className="replaceheader"></div>
        <div className="classname">
          <ul>
            <li>
              <span className="icon-menu"></span>
              <input
                type="text"
                placeholder="课程名称"
                onChange={(e) => {
                  this.getValue(e, "phonenum");
                }}
              ></input>
            </li>
            <li>
              <span className="icon-eyedropper"></span>
              <input type="text" placeholder="选取颜色"></input>
            </li>
            <li>
              <span className="icon-flag"></span>
              <input type="text" placeholder="学分(可不填)"></input>
            </li>
            <li>
              <span className="icon-file-text2"></span>
              <input type="text" placeholder="备注(可不填)"></input>
            </li>
          </ul>
        </div>

        <article id="detail" className="details">
          <div>
            <span>时间段</span>
            <span
              className="icon-cross"
              onClick={(e) => this.delThisDetail(e)}
            ></span>
          </div>
          <div>
            <ul>
              <li>
                <span className="icon-calendar"></span>
                <span>第1-20周</span>
              </li>
              <li>
                <span className="icon-clock"></span>
                <span>第一二节</span>
              </li>
              <li>
                <span className="icon-user-tie"></span>
                <input placeholder="授课老师(可不填)"></input>
              </li>
              <li>
                <span className="icon-location2"></span>
                <input placeholder="上课地点(可不填)"></input>
              </li>
            </ul>
          </div>
        </article>
        <div className="incButton">
          <span className="icon-plus" onClick={() => this.incDetail()}></span>
        </div>
      </div>
    );
  }
}
