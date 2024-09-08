import PageContainer from "@/components/formatting/PageContainer";
import Carousel from "@/components/ui/Carousel";

export default function Gallery() {
    return (
        <PageContainer title="Gallery">
            <Carousel title="Welcome Ceremony" src="welcome-ceremony" length={25}/>
            <div className="border-b-2 h-4 w-full mb-4"></div>
            <Carousel title="Workshops" src="workshops" length={11}/>
            <div className="border-b-2 h-4 w-full mb-4"></div>
            <Carousel title="Palengke" src="palengke" length={10}/>
            <div className="border-b-2 h-4 w-full mb-4"></div>
            <Carousel title="Variety Show" src="variety-show" length={28}/>
        </PageContainer>
    );
}