import Image from "next/image";

export default function SocialBtn({ link, icon }) {
  const isMailto = link.startsWith("mailto:");

  return (
    <a
      href={link}
      target={isMailto ? "_self" : "_blank"}
      className="flex h-12 w-12"
    >
      <Image src={icon} alt="icono de red Social" className="h-12 w-12" />
    </a>
  );
}
