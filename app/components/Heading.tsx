"use client";

interface HeadingProps {
    title: string;
    hideNav?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    hideNav = false
}) => {

    
    return ( 
        <>
            <div className="text-3xl lg:text-4xl my-5">{title}</div>

            <hr/>
        </>
        
     );
}
 
export default Heading;


