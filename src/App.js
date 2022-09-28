import "./App.css";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";
import CoderInfo from "./components/Projects/CoderInfo/CoderInfo";
import Break from "./components/Break/Break";
import WorkTime from "./components/WorkTime/WorkTime";
import BreakTime from "./components/BreakTime/BreakTime";

function App() {
  const [projects, setProjects] = useState([]);
  const [workingTime, setWorkingTime] = useState(0);
  const [timeBreak, setTimeBreak] = useState(0);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  useEffect(() => {
    const bdBreakTime = localStorage.getItem("time");
    setTimeBreak(bdBreakTime);
  }, []);
  return (
    <div className="App">
      <main className="flex justify-between">
        <section className="w-1/2 sm:w-2/3 md:w-3/4 bg-slate-100">
          <div className="lg:w-[90%] mx-auto mt-8">
            <Nav></Nav>
            <div>
              <Projects
                projects={projects}
                workingTime={workingTime}
                setWorkingTime={setWorkingTime}
              ></Projects>
            </div>
          </div>
        </section>
        <aside className="p-4">
          <CoderInfo></CoderInfo>
          <Break setTimeBreak={setTimeBreak}></Break>
          <WorkTime workingTime={workingTime} name="Working Time"></WorkTime>
          <BreakTime timeBreak={timeBreak} name="Break time"></BreakTime>
        </aside>
      </main>
    </div>
  );
}

export default App;
