'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
    <div className="
    max-w-[1602px]
    mx-auto
    h-fit
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    "
    id="smooth-wrapper"
    >
        {children}</div> );
}
 
export default Container;