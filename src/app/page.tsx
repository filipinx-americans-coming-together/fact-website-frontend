import BackgroundImage from "@/components/BackgroundImage";
import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar"

const BACKGROUND_URL = "/welcome-ceremony.jpg";
const BACKGROUND_ALT = "FACT 2023 Welcome Ceremony";

export default function Home() {
  return (
    <>
      <BackgroundImage imageURL={BACKGROUND_URL}>
        <Navbar/>
        <div className="flex sm: flex-col-reverse md:flex-row">
          <div className="flex flex-col justify-start">
            <div className="font-bold text-4xl my-1">MAGBUBUNGA</div>
            <div className="font-bold text-4xl my-1">Planting Prosperity</div>
            <div className="font-bold text-4xl my-1">FACT 2024</div>
            <div className="italic font-light my-1 mt-3">Philippine Student Association</div>
            <div className="italic font-light my-1">University of Illinois at Urbana-Champaign</div>
          </div>
          <div className="flex flex-col justify-center">
            <CountdownTimer 
            date={new Date('October 31, 2024 19:00:00')}
            />
          </div>
        </div>
      </BackgroundImage>
    </>
  );
}