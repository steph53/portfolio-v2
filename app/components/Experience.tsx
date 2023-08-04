"use client"

import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ExperienceProps {
    title : string;
    dates: string;
    logo?: string;
    link: string;
    role: string;
    logoSize?: number;
}

const Experience: React.FC<ExperienceProps> = ({
    title,
    dates,
    logo,
    link,
    role,
    logoSize
}) => {
    return (
        <>
            <div className=" flex flex-row justify-between pb-2 pt-10">
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col justify-center" >
                        <p className="border rounded-full text-md py-1 px-4">{dates} </p>
                    </div>
                    <div className="text-xl p-2 w-96 flex flex-col justify-center">
                        <p>{title}</p>
                        <p className="text-sm font-thin">{role}</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    { logo && 
                        <div className="pr-5">
                            <Image 
                                width={logoSize ? logoSize : 50}
                                height={logoSize ? logoSize : 50}
                                src={logo}
                                alt="Company logo"
                            />
                        </div>
                    }
                    <div className="justify-center flex flex-col">
                        <a href={link} target="_blank">
                            <AiOutlineArrowRight size={30}/>                     
                        </a>
                    </div>
                </div>
            </div>
            <div className="
                h-[0.5px]
                mt-1
                background-opacity-20
                bg-white
                w-full
            "></div>
        </> 
    );
}
 
export default Experience;