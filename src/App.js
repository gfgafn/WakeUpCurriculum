import "./App.css";
import Header from "./components/Header";
import CourseTable from './components/CourseTable'
function App() {
  return (
    <div>
      <Header />
      <CourseTable />
      {/* <table
        align="center"
        border="1"
        cellSpacing="0"
        cellPadding="0"
        width="100%"
      >
        <thead>
          <tr>
            {" "}
            <th>排名</th> <th>关键词</th> <th>趋势</th> <th>今日搜索</th>{" "}
          </tr>
        </thead>
        <tbody>
          <tr>
            {" "}
            <td> 1</td> <td style={{"backgroundColor":'red'}}>王者荣耀</td> <td>上升</td> <td> 345</td>{" "}
            
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
