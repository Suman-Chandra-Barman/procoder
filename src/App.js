import "./App.css";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";
import CoderInfo from "./components/Projects/CoderInfo/CoderInfo";
import Break from "./components/Break/Break";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="App">
      <main className="flex">
        <section className="w-1/2 sm:w-2/3 md:w-3/4 bg-slate-100">
          <div className="lg:w-[90%] mx-auto mt-8">
            <Nav></Nav>
            <div>
              <Projects projects={projects}></Projects>
            </div>
          </div>
        </section>
        <aside className="p-5">
          <CoderInfo></CoderInfo>
          <Break></Break>
        </aside>
      </main>
    </div>
  );
}

export default App;
