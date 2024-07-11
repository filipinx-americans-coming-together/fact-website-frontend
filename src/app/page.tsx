import BackgroundImage from "@/components/BackgroundImage";
import CountdownTimer from "@/components/CountdownTimer";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

const BACKGROUND_URL = "/welcome-ceremony.jpg";
const BACKGROUND_ALT = "FACT 2023 Welcome Ceremony";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-black to-background-primary">
                <BackgroundImage imageURL={BACKGROUND_URL}>
                    <div className="max-w-lg flex justify-center text-center sm:flex-col-reverse md:flex-row md:text-left">
                        <div className="flex flex-col justify-start">
                            <div className="font-bold my-6 sm:text-4xl lg:text-6xl">
                                MAGBUBUNGA
                            </div>
                            <div className="font-bold my-6 sm:text-4xl lg:text-6xl">
                                Planting Prosperity
                            </div>
                            <div className="font-bold my-6 sm:text-4xl lg:text-6xl">
                                FACT 2024
                            </div>
                            <div className="italic font-light my-2 mt-4">
                                Philippine Student Association
                            </div>
                            <div className="italic font-light my-2">
                                University of Illinois at Urbana-Champaign
                            </div>
                        </div>
                        <div className="sm:my-4 md:mx-8 lg:mx-14"></div>
                        <div className="flex flex-col justify-center text-center">
                            <CountdownTimer
                                date={new Date("October 31, 2024 19:00:00")}
                            />
                            <Button text="REGISTER NOW" url="/" />
                        </div>
                    </div>
                </BackgroundImage>
            </div>
        </>
    );
}
