import Image from "next/image";
import Icon from "./Icon";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const ContactWall = () => {
    return ( 
        <div className="flex flex-col justify-between gap-4 border-[0.5px]
        border-opacity-20 rounded-lg p-5 items-center contact-wall">
            <div className="h-fit">
                <Image 
                    width={800}
                    height={800}
                    src="/images/bild.jpeg"
                    alt="Picture of the author"
                />
            </div>
            <div className="font-semibold text-xl h-fit"> Stephane Sonkeng</div>
            <div className="text-lg h-fit"> @steph53</div>
            <div className="flex flex-row gap-2 h-fit justify-center text-lg">
                <Icon>
                    <FaGithub/>
                </Icon>
                <Icon>
                    <FaLinkedinIn />
                </Icon>
                <Icon>
                    <FaTwitter />
                </Icon>
            </div>
        </div> 
    );
}
 
export default ContactWall;