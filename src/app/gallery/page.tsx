import Navbar from "@/components/Navbar";
import PageHeader from "@/components/formatting/PageHeader";
import Carousel from "@/components/ui/Carousel";

const palengkeImages = ["/palengke/1.JPG", "/palengke/2.JPG", "/palengke/3.JPG", "/palengke/4.JPG", "/palengke/5.JPG", "/palengke/6.JPG", "/palengke/7.JPG", "/palengke/8.JPG", "/palengke/9.JPG", "/palengke/10.JPG"];
const varietyShowImages = ["/variety-show/1.JPG", "/variety-show/2.JPG", "/variety-show/3.JPG", "/variety-show/4.JPG", "/variety-show/5.JPG", "/variety-show/6.JPG", "/variety-show/7.JPG", "/variety-show/8.JPG", "/variety-show/9.JPG", "/variety-show/10.JPG", "/variety-show/11.JPG", "/variety-show/12.JPG", "/variety-show/13.JPG", "/variety-show/14.JPG", "/variety-show/15.JPG", "/variety-show/16.JPG", "/variety-show/17.JPG", "/variety-show/18.JPG", "/variety-show/19.JPG", "/variety-show/20.JPG", "/variety-show/21.JPG", "/variety-show/22.JPG", "/variety-show/23.JPG", "/variety-show/24.JPG", "/variety-show/25.JPG", "/variety-show/26.JPG", "/variety-show/27.JPG", "/variety-show/28.JPG"];
const welcomeCermonyImages = ["/welcome-ceremony/1.JPG", "/welcome-ceremony/2.JPG", "/welcome-ceremony/3.JPG", "/welcome-ceremony/4.JPG", "/welcome-ceremony/5.JPG", "/welcome-ceremony/6.JPG", "/welcome-ceremony/7.JPG", "/welcome-ceremony/8.JPG", "/welcome-ceremony/9.JPG", "/welcome-ceremony/10.JPG", "/welcome-ceremony/11.JPG", "/welcome-ceremony/12.JPG", "/welcome-ceremony/13.JPG", "/welcome-ceremony/14.JPG", "/welcome-ceremony/15.JPG", "/welcome-ceremony/16.JPG", "/welcome-ceremony/17.JPG", "/welcome-ceremony/18.JPG", "/welcome-ceremony/19.JPG", "/welcome-ceremony/20.JPG", "/welcome-ceremony/21.JPG", "/welcome-ceremony/22.JPG", "/welcome-ceremony/23.JPG", "/welcome-ceremony/24.JPG", "/welcome-ceremony/25.JPG"];
const workshopsImages = ["/workshops/1.JPG", "/workshops/2.JPG", "/workshops/3.JPG", "/workshops/4.JPG", "/workshops/5.JPG", "/workshops/6.JPG", "/workshops/7.JPG", "/workshops/8.JPG", "/workshops/9.JPG", "/workshops/10.JPG", "/workshops/11.JPG"];


export default function Gallery() {
    return (
        <>
            <Navbar />
            <PageHeader text="Gallery"/>
            <div className="mx-10">
                <Carousel images={welcomeCermonyImages} title="Welcome Ceremony"/>
                <div className="border-b-2 h-4 w-full mb-4"></div>
                <Carousel images={workshopsImages} title="Workshops"/>
                <div className="border-b-2 h-4 w-full mb-4"></div>
                <Carousel images={palengkeImages} title="Palengke"/>
                <div className="border-b-2 h-4 w-full mb-4"></div>
                <Carousel images={varietyShowImages} title="Variety Show"/>
            </div>
        </>
    );
}