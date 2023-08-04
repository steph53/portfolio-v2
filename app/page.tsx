'use client';   
export const dynamic = "force-dynamic";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/all";
import About from "./components/About";
import CircularText from "./components/CircularText";
import ContactWall from "./components/ContactWall";
import Container from "./components/Container";
import Experience from "./components/Experience";
import FancyContainer from "./components/FancyContainer";
import Heading from "./components/Heading";
import Project from "./components/Project";

export default function Home() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    console.log(ScrollTrigger.version)
    ScrollTrigger.create({
        trigger: ".trigger",
        start: "top center",
        end: "+=500",
        onUpdate: self => console.log("direction:", self.direction)
    });
    return (
        <Container>
            <div  className="
                relative

            ">
                <div className="
                        absolute
                        top-96
                        right-96
                        h-96
                        w-96
                        rounded-full
                        bg-red-500
                        hover:top-52
                        animate-[pulse_5s_ease-in-out_infinite]
                        transition-all
                "></div>
                <div className="flex flex-col items-center min-h-screen backdrop-blur-xl bg-transparent" id="smooth-content">
                    <div className="hidden lg:block h-20 "></div>
                    
                        <div
                            className="
                            flex
                            flex-col
                            lg:flex-row
                            justify-around 
                            gap-10
                            px-28  
                            lg:px-12 
                        "
                        >
                            <div className="pt-20 basis-1/4 rotate-y-6">
                                <div className=" sticky top-20">
                                    <ContactWall />
                                </div>
                            </div>
                            <div className="lg:pt-20 basis-3/4 lg:pr-10">
                                <div className="min-h-screen flex flex-col justify-between">
                                    <div className="text-6xl font-bold">
                                        Hello, I'm{" "}
                                        <span className="boujee-text ">
                                            {" "}
                                            Stephane Sonkeng
                                        </span>
                                        ,<br /> a Software engineer and Developer
                                        based in Germany.
                                    </div>
                                    <div className="flex flex-row justify-start gap-12 text-4xl py-10">
                                        <div className="flex items-top text-lg font-normal gap-2">
                                            <span className="font-bold text-6xl">
                                                3+{" "}
                                            </span>
                                            Years <br />
                                            of experience
                                        </div>
                                        <div className="flex items-top text-lg font-normal gap-2">
                                            <span className="font-bold text-6xl">
                                                100%{" "}
                                            </span>
                                            Satisfied <br />
                                            Companies
                                        </div>
                                    </div>
                                    <About />
                                    <div className=" hidden lg:flex items-center m-auto w-4/12">
                                        <CircularText
                                            text="Click here to &nbsp; scroll &nbsp; down ."
                                            link={"#experience"}
                                        />
                                    </div>
                                    <div className="hidden lg:block h-16"></div>
                                </div>
                                <div id="experience" className="pt-16">
                                    <Heading title="Work experience" />
                                    <div className="h-11"></div>
                                    <Experience
                                        title="Trivago"
                                        role="Software Engineer"
                                        dates="Nov 2022 - Present"
                                        link="https://www.trivago.com"
                                        logo="/images/trivago.png"
                                    />
                                    <Experience
                                        title="Fachmedien Otto Schmidt"
                                        role="Frontend Developer Intern"
                                        dates="Apr 2022 - Oct 2022"
                                        link="https://www.fachmedien.de/"
                                        logo="/images/fachmedien.svg"
                                        logoSize={200}
                                    />
                                    <Experience
                                        title="Orange Cameroon"
                                        role="Frontend Developer Intern"
                                        dates="Apr 2022 - Oct 2022"
                                        link="https://www.orange.cm/"
                                        logo="/images/orange.png"
                                        logoSize={50}
                                    />
                                    <div className="h-32"></div>
                                </div>
                                <div id="education">
                                    <Heading title="Education" />
                                    <div className="h-10"></div>
                                    <Experience
                                        title="University of Applied Sciences Duesseldorf"
                                        role="B.Sc. Electrical Engineering and Information Technology"
                                        dates="Sep 2019 - Present"
                                        link="https://www.hs-duesseldorf.de/"
                                    />
                                </div>
                                <div>
                                    <div className="h-32"></div>
                                    <Heading title="Skills" />
                                    <div className="h-10"></div>
                                    <div
                                        className="
                                    grid
                                lg:grid-cols-2
                                    gap-5
                                "
                                    >
                                        <FancyContainer 
                                            skill="Frontend"
                                            percentage={80}
                                        />
                                        <FancyContainer 
                                            skill="Backend"
                                            percentage={60}
                                        />
                                        <FancyContainer 
                                            skill="Architecture"
                                            percentage={60}
                                        />
                                        <FancyContainer 
                                            skill="Fun teamplayer"
                                            percentage={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="
                            min-h-screen
                            px-20
                            my-16
                            w-full
                        "
                        >
                            <div className="sticky pt-20 top-0 backdrop-blur-xl z-10">
                                <Heading title="SOME OF MY WORK - MORE ON GITHUB" />
                                <div className="h-16 sticky top-30"></div>
                            </div>
                            <div className="
                            ">
                                
                                <Project
                                    title="Airbnb"
                                    link="https://www.accommodation-rent.vercel.app"
                                    image=""
                                />
                            
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center py-10 text-lg">
                        Copyright © 2023 Stephane
                </div>
            </div>
        </Container>
    );
}
