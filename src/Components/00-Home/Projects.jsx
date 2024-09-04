const RefereceImages = () => {
  return (
    <div className="mt-16 flex flex-col gap-7">
      <h3 className="text-center text-3xl font-bold">Projects</h3>
      <img
        src="https://images.unsplash.com/photo-1599252441131-5aafffcf7740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img1"
        className="h-[400px] w-[700px] min-w-[300px] border"
      />
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
      <RefereceImages />
    </div>
  );
};

export default Projects;
