import Acerca from "@/components/Acerca";
import Banner from "@/components/Banner";
import Tecnologias from "@/components/Tecnologias";

export default function Home() {
  return (
    <div className="mt-28 grid w-4/5 grid-cols-2 gap-8">
      <Banner />
      <div>
        <Acerca />
        <Tecnologias />
      </div>
    </div>
  );
}
