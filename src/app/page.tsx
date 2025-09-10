"use client";

import BackgroundImage from "@/components/formatting/BackgroundImage";
import BackgroundVideo from "@/components/formatting/BackgroundVideo";
import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/formatting/PageFooter";
import NotificationsManager from "@/components/ui/NotificationManager";
import { useNotifications } from "@/hooks/api/useNotifications";
import LinkButton from "@/components/ui/LinkButton";

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
                <div className="absolute inset-0 bg-cover bg-center overflow-hidden -z-10 min-h-screen w-full">
                    <iframe className="pointer-events-none relative min-h-screen w-full py-4 sm:py-0 flex flex-col justify-center grayscale" src="https://www.youtube.com/embed/g_973tJqDe8?si=qEEoPmjbEjRI4orm&autoplay=1&mute=1&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        <img src="/noise.svg"></img>
                    </iframe>
                </div>
                <div className="w-4/5 h-screen flex justify-start text-center flex-col-reverse md:flex-row md:text-left inset-x-0 mx-auto my-auto px-20">
                    <div className="flex flex-col justify-center text-white gap-8">
                        <div className="font-bold my-6 text-4xl lg:text-9xl">
                            FACT 2025
                        </div>
                        <div className="font-bold text-6xl md:text-5xl">
                            <CountdownTimer date={new Date("2025-11-14T00:00:00Z")}></CountdownTimer>
                        </div>
                        <div className="italic font-light my-2 mt-4">
                            Philippine Student Association <br></br>
                            University of Illinois at Urbana-Champaign
                        </div>
                        <div className="italic font-light my-2">
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
