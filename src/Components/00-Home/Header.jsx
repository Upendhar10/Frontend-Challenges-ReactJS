import { Link } from "react-router-dom";

import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

const Header = () => {
  return (
    <div className="mt-24 flex w-[80%] flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-extrabold tracking-wide">
        Frontend Challenges
      </h1>
      <div className="w-[70%] text-center">
        <p className="mt-10 text-center font-space text-lg font-medium tracking-wide">
          Master these mini-challenges to level up your Frontend skills and
          excel in Frontend Machine Coding Rounds.
        </p>
      </div>
      <div className="flex items-center gap-9">
        <Link
          to="/draw"
          className="mt-10 flex w-44 items-center justify-center gap-2 rounded-lg border py-3 font-space text-lg font-semibold hover:shadow-md"
        >
          Try Now
          <GoArrowRight className="text-2xl font-bold" />
        </Link>
        <a
          href="#"
          className="mt-10 flex w-44 items-center justify-center gap-2 rounded-lg border py-3 font-space text-lg font-semibold hover:shadow-md"
        >
          Contribute
          <GoArrowUpRight className="text-2xl font-bold" />
        </a>
      </div>
    </div>
  );
};

export default Header;
