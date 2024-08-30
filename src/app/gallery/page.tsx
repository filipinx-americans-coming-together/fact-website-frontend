import Navbar from "@/components/Navbar";
import PageHeader from "@/components/formatting/PageHeader";
import Carousel from "@/components/ui/Carousel";

const images = ["/variety-show.JPG", "/welcome-ceremony.jpg", "/workshop.JPG", "/welcome-ceremony.jpg"];

export default function Gallery() {
    return (
        <>
            <Navbar />
            <PageHeader text="Gallery"/>
            <div className="mx-10">
                <Carousel images={images} title="Workshops"/>
                <div className="border-b h-4 w-full mb-4"></div>
                <Carousel images={images} title="Variety Show"/>
                <div className="border-b h-4 w-full mb-4"></div>
                <Carousel images={images} title="Palengke"/>
            </div>
        </>
    );
}