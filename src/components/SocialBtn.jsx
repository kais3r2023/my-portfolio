"use client";

import { useState } from "react";
import Image from "next/image";

export default function SocialBtn({ link, icon, hoverIcon }) {
  const isMailto = link.startsWith("mailto:");
  const [currentIcon, setCurrentIcon] = useState(icon);

  return (
    <a
      href={link}
      target={isMailto ? "_self" : "_blank"}
      className="flex h-12 w-12"
      onMouseEnter={() => setCurrentIcon(hoverIcon)}
      onMouseLeave={() => setCurrentIcon(icon)}
    >
      <Image
        src={currentIcon}
        alt="icono de red Social"
        className="h-12 w-12"
      />
    </a>
  );
}
