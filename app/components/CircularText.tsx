"use client";

import { AiOutlineArrowDown } from "react-icons/ai";
import gsap from "gsap";

interface CircularTextProps {
    text: string;
    link: string;
}

const CircularText: React.FC<CircularTextProps> = ({
    text,
    link
}) => {

    const handleClick = (id: string) => {
        return gsap.to(window, {duration: 1.75, scrollTo: {y: id}});
    }
    return (
        <div className="cursor-pointer absolute"
            onClick={() => {handleClick("#experience")}}
        >
            <div 
                className="
                    animate-bounce
                    flex
                    flex-row
                    justify-center
                    relative 
                    top-16
                    "
            >
                <AiOutlineArrowDown size={30}/>
            </div>
            <svg 
                className="
                    circular-text
                    animate-spin
                    animate-duration-[3000ms]
                    animate-ease-in-out
                " 
                viewBox="0 0 100 100"
                width="100"
                height="100">
                <defs>
                    <path id="circle"
                    d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fontSize="17">
                    <textPath href="#circle">
                    {text}
                    </textPath>
                </text>
            </svg>
        </div> 
     );
}
 
export default CircularText;