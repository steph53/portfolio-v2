"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

interface ProjectProps{
    title: string;
    image: string;
    link?: string; 
}

const Project: React.FC<ProjectProps> = ({
    title, 
    image,
    link
}) => {

    const [hovered, setHovered] = useState(false);
    return (
        
        <div 
            className={`
                overflow-scroll
                snap-y
                snap-mandatory
                min-h-screen   
                flex
                flex-col
                justify-around
                rounded-xl
                mb-20
                items-center
                scollbar-hide
                scroll-smooth
            `}
        >
            <div
                className="flex flex-col justify-center
                items-center"
            >
                <h1 className="
                    text-[38px]
                    lg:text-[44px]
                    font-bold
                    text-center
                    mb-8
                ">Airbnb Clone leveraging the power of Next.js, Tailwind CSS.</h1>
                <p
                    className="
                        text-[18px]
                        lg:text-[20px]
                        font-semibold
                        text-center
                        mb-10
                        w-2/4
                    "
                > Near perfect airbnb clone Mimicing the main functions found on the original website </p>  
            </div>
            <div
                className={`
                    relative
                    border
                    bg-black
                    rounded-xl
                    snap-center
                    h-[645px]
                    w-[1000px]
                    transition-all
                    duration-[2000ms]
                    gap-3
                    overflow-hidden
                    border-transparent
                `}                 
                
            >
                    <Image 
                        width={1000}
                        height={700}
                        style={{objectFit: "fill"}} 
                        src={"/images/Airbnb-full.png"} 
                        alt={"Airbnb-screenshot"}
                    />
                    <div 
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="
                            absolute
                            flex
                            flex-row
                            bottom-5
                            right-5
                            bg-black
                            p-3
                            cursor-pointer
                            rounded-lg
                            drop-shadow-2xl
                            custom-drop
                            hover:scale-[1.05]
                            transition-all
                            duration-[1000]

                    ">
                        <a></a> Try Demo &nbsp; <span className={`inline-block place-self-center  ${hovered? "scale-[1.15] transition-all duration-[200]" : ""}`}> <BsArrowUpRight/> </span> </div>
            </div>
            <div className="h-32"></div>
            <div 
                className={`
                    relative
                    flex
                    flex-row
                    bg-[#101010]
                    rounded-xl
                    h-fit
                    w-full
                    transition-all
                    duration-[2000ms]
                    overflow-hidden
                   
                `}
            >
                <div className="absolute left-[-250px]">
                    <Image
                        width={586.06}
                        height={500}
                        src={"/images/Airbnb-mac.png"}
                        alt={"Airbnb-screenshot"}          
                    />
                </div>
                <div className="m-auto">
                    <Image
                        width={400}
                        height={400}
                        src={"/images/Airbnb-iphone.png"}
                        alt={"Airbnb-screenshot"}
                    />
                </div>
                <div className="absolute right-[-250px]">
                <Image
                        width={586.06}
                        height={500}
                        src={"/images/Airbnb-mac.png"}
                        alt={"Airbnb-screenshot"}          
                    />
                </div>
            </div>
            
              
        </div>
    );
}
 
export default Project;