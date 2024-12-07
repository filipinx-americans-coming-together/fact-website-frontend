"use client";

import BackgroundImage from "@/components/formatting/BackgroundImage";
import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/formatting/PageFooter";
import NotificationsManager from "@/components/ui/NotificationManager";
import { useNotifications } from "@/hooks/api/useNotifications";
import LinkButton from "@/components/ui/LinkButton";

const BACKGROUND_URL = "/welcome-ceremony.jpg";
const BACKGROUND_ALT = "FACT 2023 Welcome Ceremony";

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

            <Navbar />

            <BackgroundImage imageURL={BACKGROUND_URL}>
                <div className="max-w-lg flex justify-center text-center flex-col-reverse md:flex-row md:text-left">
                    <div className="flex flex-col justify-start">
                        <div className="font-bold my-6 text-4xl lg:text-6xl">
                            MAGBUBUNGA
                        </div>
                        <div className="font-bold my-6 text-4xl lg:text-6xl">
                            Planting Prosperity
                        </div>
                        <div className="font-bold my-6 text-4xl lg:text-6xl">
                            FACT 2024
                        </div>
                        <div className="italic font-light my-2 mt-4">
                            Philippine Student Association
                        </div>
                        <div className="italic font-light my-2">
                            University of Illinois at Urbana-Champaign
                        </div>
                    </div>
                    <div className="my-4 md:mx-8 lg:mx-14"></div>
                    <div className="flex flex-col justify-center text-center gap-2">
                        <div className="font-bold text-6xl md:text-8xl">TODAY!</div>
                        <br className="my-5" />
                        {/* <p className="italic font-light my-2">
                            Registration opens 11/1/2024
                        </p> */}
                        {/* <LinkButton
                            text="REGISTER NOW"
                            url="/my-fact/register"
                        /> */}
                        <br />
                        <LinkButton
                            text="GET VARIETY SHOW TICKETS"
                            url="https://www.eventbrite.com/e/fact-2024-variety-show-tickets-1070730767549"
                            newTab={true}
                        />
                        <br />
                    </div>
                </div>
            </BackgroundImage>
            <Footer />
        </>
    );
}
