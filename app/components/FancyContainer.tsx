"use client";

import { useEffect, useRef, useState } from "react";


interface FancyContainerProps {
    skill: string;
    description?: string;
    logo?: string;
    percentage: number;
} 

const FancyContainer: React.FC<FancyContainerProps> = ({
    skill,
    description,
    logo,
    percentage

} ) => {
    let elementRef = useRef<HTMLDivElement> (null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [hovered, setHovered] = useState(false);

    if(!elementRef){
        return null;
    }
    

    return (
        <div className="bg-color-black rounded-xl">
            <div
                onMouseMove={e=> {
                    setWidth(elementRef.current!.getBoundingClientRect().left);
                    setHeight(elementRef.current!.getBoundingClientRect().top);
                    let x = e.clientX - width;
                    let y = e.clientY - height;
                    console.log(width, height)
                    elementRef.current!.style.setProperty("--mouse-x", x + "px");
                    elementRef.current!.style.setProperty("--mouse-y", y + "px");
                    return {x,y};
                }}
                onScroll={e => {
                    setWidth(elementRef.current!.getBoundingClientRect().left);
                    setHeight(elementRef.current!.getBoundingClientRect().top);
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                ref={elementRef}
                className={`
                    h-40
                    rounded-xl
                    transition-all
                    duration-700
                    ease-in-out
                    border-[0.5px]
                    flex
                    flex-row
                    justify-around
                    bg-color-black
                    ${hovered? "fancy-container scale-110 z-10" : "z-0"}`}
            >
                <div className="
                    h-39
                    rounded-xl
                    flex
                    flex-row
                    cursor-pointer
                    backdrop-blur-2xl
                    relative
                    w-full
                    h-full
                    justify-around
                ">
                    <div className="flex flex-row justify-between items-center">
                        <div>{logo}</div>
                        <div>{skill}</div>
                    </div>
                    <p className="absolute top-3 right-3 border-[#237849] border text-[#237849] bg-[#23784952] rounded-xl text-sm px-2">{percentage}%</p>
                </div>
            </div> 
        </div>
    );
}
 
export default FancyContainer;