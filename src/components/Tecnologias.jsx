import javascriptIcon from "../images/javascriptIcon.svg";
import htmlIcon from "../images/HTMLIcon.svg";
import cssIcon from "../images/CSSIcon.svg";
import reactIcon from "../images/reactIcon.svg";
import tailwindIcon from "../images/tailwindIcon.svg";
import nextjsIcon from "../images/nextjsIcon.svg";
import Image from "next/image";

export default function Tecnologias() {
  return (
    <div>
      <Image src={javascriptIcon} />
      <Image src={htmlIcon} />
      <Image src={cssIcon} />
      <Image src={reactIcon} />
      <Image src={tailwindIcon} />
      <Image src={nextjsIcon} />
    </div>
  );
}
