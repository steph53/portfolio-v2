"use client";

interface IconProps {
    children: React.ReactNode;
}
const Icon: React.FC<IconProps> = ({
    children
}) => {
    return ( 
        <div className=" 
            border-2
            rounded-full
            p-2
            hover:text-black
            hover:bg-white
            transition
            ease-in-out
            duration-500 
            cursor-pointer
            ">
            {children}
        </div>
     );
}
 
export default Icon ;