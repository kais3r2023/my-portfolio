import Image from "next/image";
export default function SocialBtn({ link, icon }) {
  return (
    <a href={link} target="_blank" className="flex h-12 w-12">
      <Image src={icon} alt="icono de red Social" className="h-12 w-12" />
    </a>
  );
}
