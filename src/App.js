import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import CourseTable from "./components/CourseTable";
import Register from "./pages/Register";
import Login from "./pages/Login/index";
import "./App.css";

function App() {
  return (
    <div className="app">
    {/* <Register /> */}
    {/* <Login /> */}
      <Header />
      <CourseTable />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      <Redirect to="/home"></Redirect>
    </div>
  );
}

export default App;
