"use client";

import Image from "next/legacy/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();
    return ( 
    <div
        onClick={() => router.push("/")}
        className="cursor-pointer"
    >
        <Image
            src="/images/logo.svg"
            alt="Picture of the author"
            width={100}
            height={24}
        />

    </div>

    );
}
 
export default Logo;