"use client";

import { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import NavButton from "./NavButton";

const Navbar = () => {
    const [isActive, setIsActive] = useState(true);

    if(isActive) return (
        <div className="fixed w-full bg-transparent z-30 shadow-sm backdrop-blur-xl">
            <div className="
                py-4
                border-[gray]
            ">
                <Container>
                    <div className="
                    flex
                    items-center
                    justify-around
                    gap-15
                    ">
                        <div className=""></div>
                        <div className="flex items-center justify-between gap-12 ">
                            <NavButton
                                link="#"
                                text="Home"
                            />
                            <NavButton
                                link="#"
                                text="Experience"
                            />
                            <NavButton
                                link="#"
                                text="Education"
                            />
                            <NavButton
                                link="#"
                                text="Projects"
                            />
                        </div>
                        <div className="">
                            <NavButton
                                link="mailto:sonkengwiston@icloud.com"
                                text="Hire Me"
                                bordered={true}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div> 
    );
    return;
}
 
export default Navbar;