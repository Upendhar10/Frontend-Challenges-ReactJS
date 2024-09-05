import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="mt-16 flex flex-col gap-7">
      <h3 className="text-center text-3xl font-bold">Projects</h3>
      <div className="h-[400px] w-[700px] min-w-[300px] border bg-[#f1f2f3] rounded-sm text-black font-bold grid place-content-center gap-3">
        <Link to="/calculator"> Calculator</Link>
        <Link to="/starrating"> Star Rating</Link>
        <Link to="/accordian"> Accordian</Link>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div>
      <h3 className="text-center text-3xl font-bold">Techstack</h3>
      <ul className="mt-6 flex justify-center">
        <li className="m-2 gap-2 rounded-lg bg-[#edf2f4] p-3 font-bold text-[#8ecae6]">
          Javascript
        </li>
        <li className="m-2 gap-2 rounded-lg bg-[#edf2f4] p-3 font-bold text-[#8ecae6]">
          React
        </li>
        <li className="m-2 gap-2 rounded-lg bg-[#edf2f4] p-3 font-bold text-[#8ecae6]">
          Tailwindcss
        </li>
      </ul>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <TechStack />
      <Project />
    </div>
  );
};

export default Projects;
