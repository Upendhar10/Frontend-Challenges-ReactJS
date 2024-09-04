import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex w-[80%] items-center justify-between p-4">
      <h3 className="text-lg font-bold">Nemmani Upendhar © 2024</h3>
      <div className="flex items-center gap-4 font-extrabold">
        <a href="#" rel="noreferrer" target="_blank">
          <CiTwitter className="text-3xl hover:scale-110" />
        </a>
        <a href="#" rel="noreferrer" target="_blank">
          <CiLinkedin className="text-3xl hover:scale-110" />
        </a>
        <a href="#" rel="noreferrer" target="_blank">
          <FiGithub className="text-2xl hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
