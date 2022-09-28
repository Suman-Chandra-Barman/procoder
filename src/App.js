import "./App.css";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import Projects from "./components/Projects/Projects";

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
        <section className="w-3/4 border-4 border-red-600 bg-slate-100">
          <div className="lg:w-[90%] mx-auto mt-8">
            <Nav></Nav>
            <div className="mt-10">
              <Projects projects={projects}></Projects>
            </div>
          </div>
        </section>
        <aside>
          <h1>This is Side part kdjkfjkajdfkjkfdj</h1>
        </aside>
      </main>
    </div>
  );
}

export default App;
