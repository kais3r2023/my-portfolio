import NavigateBtn from "./NavigateBtn";
import SocialBtn from "./SocialBtn";
import linkedinIcon from "../images/linkedinIcon.svg";
import linkedinIconHover from "../images/linkedinIconhover.svg";
import emailIcon from "../images/emailIcon.svg";
import emailIconHover from "../images/emailIconHover.svg";
import githubIcon from "../images/githubIcon.svg";
import githubIconHover from "../images/githubIconHover.svg";

export default function Banner() {
  return (
    <div className="h-96 w-full">
      <h1 className="whitespace-nowrap text-5xl font-bold">
        Daniel Canales Taylor
      </h1>
      <h2 className="mt-4 w-fit whitespace-nowrap text-3xl font-bold text-sky-500">
        Web Developer
      </h2>
      <p className="mt-2 whitespace-nowrap text-xl text-gray-100">
        “La perfección no es alcanzable, <br />
        pero en su búsqueda podemos toparnos con la excelencia”
        <br /> Vince Lombardi.
      </p>
      <div className="mt-24 flex max-w-fit flex-col gap-y-2.5">
        <NavigateBtn btnName={"ACERCA"} />
        <NavigateBtn btnName={"TECNOLOGÍAS"} />
        <NavigateBtn btnName={"PROYECTOS"} />
      </div>
      <div className="absolute bottom-11 flex w-60 flex-row justify-between">
        <SocialBtn
          icon={linkedinIcon}
          link={"https://www.linkedin.com/in/daniel-canales-taylor-49466b285/"}
          hoverIcon={linkedinIconHover}
        />
        <SocialBtn
          icon={githubIcon}
          link={"https://github.com/kais3r2023"}
          hoverIcon={githubIconHover}
        />
        <SocialBtn
          icon={emailIcon}
          link={
            "mailto:danielcanalestaylor88@gmail.com?subject=Me%20interesa%20Contactarte%20como%20Desarrollador"
          }
          hoverIcon={emailIconHover}
        />
      </div>
    </div>
  );
}
