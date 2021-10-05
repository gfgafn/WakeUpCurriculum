import React, { Component } from "react";
import AddCourse from "../AddCourse";
import "./index.css";

export default class CourseTable extends Component {
  render() {
    return (
      <div className="courseTable">
        <table className="">
          <thead>
            <tr>
              <th scope="col">
                <p>10</p>
                <p>月</p>
              </th>
              <th scope="col">
                <p>一</p>
                <p>27</p>
              </th>
              <th scope="col">
                <p>二</p>
                <p>28</p>
              </th>
              <th scope="col">
                <p>三</p>
                <p>29</p>
              </th>
              <th scope="col">
                <p>四</p>
                <p>30</p>
              </th>
              <th scope="col">
                <p>五</p>
                <p>1</p>
              </th>
              <th scope="col">
                <p>六</p>
                <p>2</p>
              </th>
              <th scope="col">
                <p>七</p>
                <p>3</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="schedule">
                <p>1</p>
                <p>08:00</p>
                <p>08:45</p>
              </td>
              <td rowSpan="2" className="course">
                <p>应用光学</p>
                <p>@东九D219</p>
                <p>老师名称</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2</p>
                <p>08:55</p>
                <p>09:40</p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <CourseDetail ref={(Component) => (this.CourseDetail = Component)} />
      </div>
    );
  }
  componentDidMount() {
    this.calScheduleTime();
    const allCourse = document.getElementsByClassName("course");
    for (let i = 0; i < allCourse.length; i++) {
      allCourse.item(i).onclick = () => {
        this.CourseDetail.showStatus();
        // console.log(allCourse.item(i));
      };
    }
  }
  calScheduleTime() {
    let beginTimeHour = 8;
    let beginTimeMin = 0;
    let intervalTimeMin = 45;
    const restTimeMiniAM = 10;
    const restTimeMiniPM = 5;
    const restTimeMaxAM = 30;
    const restTimeMaxPM = 20;
    const restTimeMaxNight = 10;
    const lunchBreak = 160;
    const lateBreak = 60;
    let courseNum = 12;
    let beginTimeHourArr = [];
    let endTimeHourArr = [];
    let beginTimeMinMoment = [];
    let endTimeMinMoment = [];
    for (let i = 1; i <= courseNum; i++) {
      let beginTimeMinArr = [];
      let endTimeMinArr = [];

      if (i <= 2) {
        beginTimeMinArr[i] =
          beginTimeMin + (intervalTimeMin + restTimeMiniAM) * (i - 1);
      } else if (2 < i && i <= 4) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * (i - 2);
      } else if (i === 5) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          lunchBreak;
      } else if (i === 6) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * 1 +
          lunchBreak;
      } else if (i === 7) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          restTimeMaxPM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * 1 +
          lunchBreak;
      } else if (i === 8) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          restTimeMaxPM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * 2 +
          lunchBreak;
      } else if (i === 9) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          restTimeMaxPM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * 2 +
          lunchBreak +
          lateBreak;
      } else if (i === 10) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          restTimeMaxPM +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * (2 + 1) +
          lunchBreak +
          lateBreak;
      } else if (i === 11) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          restTimeMaxPM +
          restTimeMaxNight +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * (2 + 1) +
          lunchBreak +
          lateBreak;
      } else if (i === 12) {
        beginTimeMinArr[i] =
          beginTimeMin +
          restTimeMaxAM +
          restTimeMaxPM +
          restTimeMaxNight +
          intervalTimeMin * (i - 1) +
          restTimeMiniAM * 2 +
          restTimeMiniPM * (2 + 2) +
          lunchBreak +
          lateBreak;
      } else {
      }

      beginTimeHourArr[i] = beginTimeHour + Math.floor(beginTimeMinArr[i] / 60);

      beginTimeMinMoment[i] =
        beginTimeMinArr[i] - 60 * Math.floor(beginTimeMinArr[i] / 60);
      endTimeMinArr[i] = beginTimeMinArr[i] + 45;

      endTimeHourArr[i] = beginTimeHour + Math.floor(endTimeMinArr[i] / 60);
      endTimeMinMoment[i] =
        endTimeMinArr[i] - 60 * Math.floor(endTimeMinArr[i] / 60);
      // console.log(i, beginTimeMinArr[i], beginTimeHourArr[i], endTimeMinArr[i], endTimeHourArr[i]);
      // console.log(
      //   `${beginTimeHourArr[i]}:${beginTimeMinMoment[i]}`,
      //   `${endTimeHourArr[i]}:${endTimeMinMoment[i]}`
      // );
    }
    // for(let beginTimeHour of beginTimeHourArr){
    //   for(let  beginTimeMin of beginTimeMinMoment){
    //     for(let  endTime of endTimeHourArr){
    //       console.log(`${beginTimeHour}:${beginTimeMin}`,
    //   `${endTimeHourArr}:${endTimeMinMoment}`)
    //   }
    //     }

    // }
  }
}
class CourseDetail extends Component {
  showStatus() {
    const courseDetail = document.getElementById("courseDetail");
    courseDetail.classList.toggle("active");
  }
  editCourseInfo() {
    this.AddCourse.showStatus();
  }
  render() {
    return (
      <div id="courseDetail" className="courseDetail">
        <article>
          <div>
            <span>应用光学</span>
            <span
              className="icon-cross"
              onClick={() => this.showStatus()}
            ></span>
          </div>
          <div>
            <ul>
              <li>
                <span className="icon-calendar"></span>
                <span>第1-12周</span>
              </li>
              <li>
                <span className="icon-clock"></span>
                <span>第一二节</span>
              </li>
              <li>
                <span className="icon-user-tie"></span>
                <span>授课老师</span>
              </li>
              <li>
                <span className="icon-location2"></span>
                <span>东九D219</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="icon-bin"></span>
            <span
              className="icon-pencil"
              onClick={() => this.editCourseInfo()}
            ></span>
          </div>
        </article>
        <AddCourse ref={(Component) => (this.AddCourse = Component)} />
      </div>
    );
  }
}
