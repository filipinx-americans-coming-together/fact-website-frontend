import BackgroundImage from "@/components/BackgroundImage";
import CountdownTimer from "@/components/CountdownTimer";

const BACKGROUND_URL = "/welcome-ceremony.jpg";
const BACKGROUND_ALT = "FACT 2023 Welcome Ceremony";

export default function Home() {
  return (
    <>
      <BackgroundImage imageURL={BACKGROUND_URL}>
        <div className="flex flex-col justify-center text-center">
          <div className="italic text-4xl">MAGBUBUNGA</div>
          <div className="font-bold text-9xl my-6">FACT 2024</div>
          <div className="text-4xl">Planting Prosperity</div>
        </div>
      </BackgroundImage>
    </>
  );
}
