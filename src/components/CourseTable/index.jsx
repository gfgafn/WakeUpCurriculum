import React, { Component } from "react";
import * as HTTP from "../../http/api";
import AddCourse from "../AddCourse";
import "./index.css";

export default class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekNum: 20,
      courseNum: 12,
      schedule: {
        beginTimeHourArr: [],
        beginTimeMinMoment: [],
        endTimeHourArr: [],
        endTimeMinMomentArr: [],
      },
      allCourse: [],
    };
  }
  render() {
    const cells = [];
    for (let j = 0; j < 7; j++) {
      cells.push(
        <td
          key={j + 1}
          rowSpan="1"
          onClick={(e) => {
            this.CourseDetail.showStatus();
            this.CourseDetail.getCourseInfo(e);
          }}
        >
          <div className="course">
            {/* <p>应用光学</p> */}
            {/* <p>@东九D219</p> */}
            {/* <p>老师名称</p> */}
          </div>
        </td>
      );
    }
    const rows = [];
    // console.log(this.state);
    for (let i = 0; i < this.state.courseNum; i++) {
      const {
        beginTimeHourArr,
        beginTimeMinMoment,
        endTimeHourArr,
        endTimeMinMomentArr,
      } = this.state.schedule;
      rows.push(
        <tr key={i + 1}>
          <td className="schedule">
            <p>{i + 1}</p>
            <p>
              {beginTimeHourArr[i]}:{beginTimeMinMoment[i]}
            </p>
            <p>
              {endTimeHourArr[i]}:{endTimeMinMomentArr[i]}
            </p>
          </td>
          {cells}
        </tr>
      );
    }
    const CourseTableEveryWeek = [];
    for (let n = 0; n < this.state.weekNum; n++) {
      let id = `table${n + 1}`;
      CourseTableEveryWeek.push(
        <table key={n + 1} id={id}>
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
          <tbody id="courseTableBody">{rows}</tbody>
        </table>
      );
    }
    return (
      <div
        className="courseTableAll"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        {CourseTableEveryWeek}
        <CourseDetail ref={(Component) => (this.CourseDetail = Component)} />
      </div>
    );
  }
  componentDidMount() {
    this.calScheduleTime();
    // HTTP.getCoursetable({
    //   username: "root",
    // });
    const allCourse = JSON.parse(localStorage.getItem("data"));
    this.setState({ allCourse: allCourse });
    allCourse.forEach((course) => {
      // console.log(course);
      const { id, className, place, teacher, startWeek, endWeek, detail } =
        course;
      // console.log(startWeek);
      for (let i = startWeek; i < endWeek + 1; i++) {
        detail.forEach((classNoObj) => {
          let tableid = `table${i}`;
          const CourseTableEveryWeek = document.getElementById(tableid);
          const { weekNo, classNo } = classNoObj;
          const weekNoNum = this.convertFormatOfWeekNo(weekNo);
          classNo.forEach((classNoNum) => {
            CourseTableEveryWeek.rows[classNoNum].cells[
              weekNoNum
            ].innerHTML = `<div class='course' id=${id}><p>${className}</p><p>@${place}</p><p>${teacher}</p></div>`;
            // "<div class='course'><p>大学物理</p><p>@东九D219</p><p>老师名称</p></div>";
          });
        });
      }
    });
  }

  convertFormatOfWeekNo = (weekNo) => {
    switch (weekNo) {
      case "周一":
        return 1;
      case "周二":
        return 2;
      case "周三":
        return 3;
      case "周四":
        return 4;
      case "周五":
        return 5;
      case "周六":
        return 6;
      case "周日":
        return 7;
      default:
        return 0;
    }
  };
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
    const beginTimeHourArr = [];
    const endTimeHourArr = [];
    const beginTimeMinMoment = [];
    const endTimeMinMomentArr = [];
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

      beginTimeHourArr[i - 1] = String(
        1000 + beginTimeHour + Math.floor(beginTimeMinArr[i] / 60)
      ).substring(2);
      beginTimeMinMoment[i - 1] = String(
        1000 + beginTimeMinArr[i] - 60 * Math.floor(beginTimeMinArr[i] / 60)
      ).substring(2);

      endTimeMinArr[i] = beginTimeMinArr[i] + 45;
      endTimeHourArr[i - 1] = String(
        1000 + beginTimeHour + Math.floor(endTimeMinArr[i] / 60)
      ).substring(2);
      endTimeMinMomentArr[i - 1] = String(
        1000 + endTimeMinArr[i] - 60 * Math.floor(endTimeMinArr[i] / 60)
      ).substring(2);
      // console.log("{beginTimeHourArr[i]}:beginTimeMinMoment[i]",endTimeHourArr[i],":",endTimeMinMomentArr[i]);

      // let courseTableBody = document.getElementById("courseTableBody");
      // let tr = document.createElement("tr")
      // courseTableBody.appendChild(tr);
      // for (let i = 0; i < 7; i++) {
      //   let td = document.createElement("td")
      //   tr.appendChild(td)
      // }
      // console.log(i, beginTimeMinArr[i], beginTimeHourArr[i], endTimeMinArr[i], endTimeHourArr[i]);
      // console.log(
      //   `${beginTimeHourArr[i]}:${beginTimeMinMoment[i]}`,
      //   `${endTimeHourArr[i]}:${endTimeMinMomentArr[i]}`
      // );
    }
    this.setState({
      schedule: {
        beginTimeHourArr,
        endTimeHourArr,
        beginTimeMinMoment,
        endTimeMinMomentArr,
      },
    });
  }
}
class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        id: 0,
        className: "",
        teacher: "",
        place: "",
      },
    };
  }
  showStatus() {
    const courseDetail = document.getElementById("courseDetail");
    courseDetail.classList.toggle("active");
  }
  
  getCourseInfo(e) {
    console.log(e);
    // const Courseid=e.target.parentElement.id
    // console.log(Courseid);
    const allCourse = JSON.parse(localStorage.getItem("data"));
    allCourse.forEach((course) => {
      const { id } = course;
      // if (id === Courseid) {
      //   console.log(course);
      //   this.setState({ course: course });
      // }
    });
  }
  delCourse() {
    const CourseId = this.state.course.id;
    const allCourse = JSON.parse(localStorage.getItem("data"));
    allCourse.forEach((course) => {
      const { id } = course;
      if (id === CourseId) {
        // HTTP.deleteCourse(id);
        // course = undefined;
        console.log(course);
      }
    });
    
    // localStorage.removeItem();
  }
  editCourseInfo() {
    this.AddCourse.showStatus();
  }
  componentDidMount(){
    this.getCourseInfo()
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
            <span
              onClick={() => {
                this.delCourse();
              }}
              className="icon-bin"
            ></span>
            <span
              className="icon-pencil"
              onClick={() => {
                this.showStatus();
                this.editCourseInfo();
              }}
            ></span>
          </div>
        </article>
        <AddCourse ref={(Component) => (this.AddCourse = Component)} />
      </div>
    );
  }
}
