import NavigateBtn from "./NavigateBtn";

export default function Banner() {
  return (
    <div className="w-1/2">
      <h1 className="whitespace-nowrap text-5xl font-bold">
        Daniel Canales Taylor
      </h1>
      <h2 className="text-3xl font-bold opacity-80">Junior Web Developer</h2>
      <p className="text-sm opacity-60">
        “La perfección no es alcanzable, pero en su búsqueda podemos toparnos
        con la excelencia”, Vince Lombardi.
      </p>
      <div className="mt-24 flex max-w-fit flex-col gap-y-2.5">
        <NavigateBtn btnName={"ACERCA"} />
        <NavigateBtn btnName={"TECNOLOGÍAS"} />
        <NavigateBtn btnName={"PROYECTOS"} />
      </div>
    </div>
  );
}
