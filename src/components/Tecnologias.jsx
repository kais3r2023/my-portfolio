import javascriptIcon from "../images/javascriptIcon.svg";
import htmlIcon from "../images/HTMLIcon.svg";
import cssIcon from "../images/CSSIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import tailwindIcon from "../images/tailwindIcon.svg";
import nextjsIcon from "../images/nextjsIcon.svg";
import mongodbIcon from "../images/mongodbIcon.svg";
import nodejsIcon from "../images/nodejsIcon.svg";
import Logo from "./Logo";

export default function Tecnologias() {
  return (
    <div className="mt-28 rounded-3xl transition duration-500 ease-in-out hover:bg-blue-700/20">
      <h4 className="text-center text-2xl font-bold text-sky-500">
        Tecnologías
      </h4>
      <div className="mt-5 grid grid-cols-4 justify-items-center gap-4">
        <Logo icon={htmlIcon} name={"HTML"} />
        <Logo icon={cssIcon} name={"CSS"} />
        <Logo icon={javascriptIcon} name={"Javascript"} />
        <Logo icon={reactIcon} name={"React"} />
        <Logo icon={tailwindIcon} name={"Tailwind"} />
        <Logo icon={nextjsIcon} name={"NextJS"} />
        <Logo icon={mongodbIcon} name={"MongoDB"} />
        <Logo icon={nodejsIcon} name={"NodeJS"} />
      </div>
    </div>
  );
}
