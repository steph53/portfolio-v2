"use client";

interface NavButtonProps {
    link: string;
    text: string;
    bordered?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({
    link,
    text,
    bordered =false
}) => {
    return ( 
        <div 
            className={` ${ bordered? "" : "nav-button"}`}
        >
            <div  className={`nav-button-link
                ${bordered ? " border-[0.5px] border-opacity-20 text-black hover:text-white px-4 py-1 bg-white hover:bg-black hover:scale-[1.1] duration-1000 rounded-lg transition-all " : "" }
            `}>
                <a href={link}>
                    {text}
                </a>
            </div>
        </div> 
    );
}
 
export default NavButton;