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
    <div className="grid">
      <Logo icon={htmlIcon} name={"HTML"} />
      <Logo icon={cssIcon} name={"CSS"} />
      <Logo icon={javascriptIcon} name={"Javascript"} />
      <Logo icon={reactIcon} name={"React"} />
      <Logo icon={tailwindIcon} name={"Tailwind"} />
      <Logo icon={nextjsIcon} name={"NextJS"} />
      <Logo icon={mongodbIcon} name={"MongoDB"} />
      <Logo icon={nodejsIcon} name={"NodeJS"} />
    </div>
  );
}
