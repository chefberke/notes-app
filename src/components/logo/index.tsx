import Image from "next/image";
import React from "react";

import LogoImage from "../../../public/assets/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={LogoImage} width={50} height={50} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
