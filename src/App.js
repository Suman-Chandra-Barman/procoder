import "./App.css";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";
import Information from "./components/Information/Information";
import Questions from "./components/Questions/Questions";

function App() {
  const [projects, setProjects] = useState([]);
  const [workingTime, setWorkingTime] = useState(0);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="App">
      <main className="flex justify-between">
        <section className="w-1/2 sm:w-2/3 md:w-3/4 bg-slate-100">
          <div className="lg:w-[90%] mx-auto my-8">
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
        <aside className="p-4 sticky top-0">
          <Information workingTime={workingTime}></Information>
        </aside>
      </main>
      <Questions></Questions>
    </div>
  );
}

export default App;
