"use client";

import BackgroundImage from "@/components/formatting/BackgroundImage";
import BackgroundVideo from "@/components/formatting/BackgroundVideo";
import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/formatting/PageFooter";
import NotificationsManager from "@/components/ui/NotificationManager";
import { useNotifications } from "@/hooks/api/useNotifications";
import LinkButton from "@/components/ui/LinkButton";
import SVGComponent from "@/components/icons/SVGComponent";

const BACKGROUND_URL = "/pre-drop.jpg";
const BACKGROUND_ALT = "FACT 2025 In Progress";

export default function Home() {
    const { notifications } = useNotifications();
    return (
        <>
            {notifications && (
                <NotificationsManager
                    notifications={notifications.map(
                        (notification) => notification.message
                    )}
                />
            )}

            <Navbar/>
            <div className="relative flex flex-col">
                <div className="absolute inset-0 overflow-hidden -z-10 min-h-screen min-w-screen">
                    {/* <div className="absolute h-full w-full bg-noise"></div> */}
                    <div className="absolute w-full h-full bg-noise-base bg-size-[5px_5px] filter-[url(#noise)]"></div>
                    <svg className="absolute h-full w-full">
                        <filter id="noise">
                            <feTurbulence id="turbulence">
                            <animate attributeName="baseFrequency" dur="8s" values="0.9 0.9;0.8 0.8; 0.9 0.9" ></animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                        </filter>
                    </svg>
                    {/* <SVGComponent className="h-full w-full absolute"></SVGComponent> */}
                    <iframe className="invisible -z-20 pointer-events-none relative min-h-full min-w-full aspect-video origin-center -mt-1 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 grayscale" src="https://www.youtube.com/embed/g_973tJqDe8?si=qEEoPmjbEjRI4orm&autoplay=1&mute=1&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>
                <div className="w-full sm:w-4/5 h-screen flex justify-center sm:justify-start text-center flex-col md:flex-row md:text-left inset-x-0 mx-auto my-auto sm:px-20 gap-8">
                    <div className="flex flex-col justify-center text-white sm:gap-4 lg:gap-6 xl:gap-8 w-full sm:w-3/4">
                        <div className="font-bold my-6 text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
                            FACT 2025
                            <div className="italic font-normal text-base my-2 sm:text-md md:text-lg lg:text-xl xl:text-2xl">Filipinx Americans Coming Together</div>
                        </div>
                        <div className="font-bold sm:my-6 text-xl text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                            IPAHAYANG NANG MALAKAS
                            <div className="italic text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
                                Proclaim Loudly
                            </div>
                        </div> 
                        
                        
                        <div className="italic font-light text-xs sm:text-base my-2 mt-4">
                            Philippine Student Association <br></br>
                            University of Illinois at Urbana-Champaign
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-white gap-8 sm:w-1/4">
                        <div className="font-bold">
                            <CountdownTimer date={new Date("2025-11-14T00:00:00Z")}></CountdownTimer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            

            {/* <BackgroundImage imageURL={BACKGROUND_URL}>
                <div className="max-w-lg flex justify-center text-center flex-col-reverse md:flex-row md:text-left">
                    <div className="flex flex-col justify-start">
                        {/* <div className="font-bold my-6 text-4xl lg:text-6xl">
                            MAGBUBUNGA
                        </div> */}
                        {/* <div className="font-bold my-6 text-4xl lg:text-6xl">
                            Planting Prosperity
                        </div> */}


                        {/* <div className="font-bold my-6 text-4xl lg:text-9xl">
                            FACT 2025
                        </div> */}
                        {/* <div className="text-xl">December 6th and 7th</div>
                        <div className="italic font-light my-2 mt-4">
                            Philippine Student Association
                        </div>
                        <div className="italic font-light my-2">
                            University of Illinois at Urbana-Champaign
                        </div> */}
                    {/* </div>
                    <div className="my-4 md:mx-8 lg:mx-14"></div>
                    <div className="flex flex-col justify-center text-center gap-2">
                        <div className="font-bold text-6xl md:text-5xl">
                            <CountdownTimer date={new Date("2025-11-14T00:00:00Z")}></CountdownTimer>
                        </div>
                        <br className="my-5" />
                        {/* <p className="italic font-light my-2">
                            Registration opens 11/1/2024
                        </p> */}
                        {/* <LinkButton
                            text="REGISTER NOW"
                            url="/my-fact/register"
                        /> */}
                        {/* <br />
                        <LinkButton
                            text="GET VARIETY SHOW TICKETS"
                            url="https://www.eventbrite.com/e/fact-2024-variety-show-tickets-1070730767549"
                            newTab={true}
                        />
                        <br />
                    </div>
                </div>
            </BackgroundImage> */}
        </>
    );
}
