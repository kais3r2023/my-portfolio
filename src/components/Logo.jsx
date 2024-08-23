import Image from "next/image";

export default function Logo({ icon, name }) {
  return (
    <div className="flex h-24 w-24 flex-col items-center">
      <Image className="h-16 w-16" src={icon} alt={`Icono ${name}`} />
      <h4 className="text-base">{name}</h4>
    </div>
  );
}
