"use client";
import PageContainer from "@/components/formatting/PageContainer";
import SingleCarousel from "@/components/ui/SingleCarousel";
import DoubleCarousel from "@/components/ui/DoubleCarousel";
import TripleCarousel from "@/components/ui/TripleCarousel";
import { useEffect, useState } from "react";


export default function Gallery() {
    if (typeof window !== "undefined") {
    const [numImages, setNumImages] = useState(window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3));
    useEffect(() => {
        const handleResize = async () => {
            const newNum = window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
            console.log(window.innerWidth, newNum);
            if (newNum !== numImages) {
                setNumImages(newNum);
                // console.log(window.innerWidth);
                // console.log(numImages);
            }
        };
    
        window.addEventListener('resize', handleResize);

        return () => {window.removeEventListener('resize', handleResize);};
      }, []);

    // useEffect(() => {console.log("rerender");}, [numImages]);

    return (
        <PageContainer title="Gallery">
            <p>{numImages}</p>
            {numImages == 1 ? <SingleCarousel title="Welcome Ceremony" src="welcome-ceremony" length={25}/> : (numImages == 2 ? <DoubleCarousel title="Welcome Ceremony" src="welcome-ceremony" length={25}/> : <TripleCarousel title="Welcome Ceremony" src="welcome-ceremony" length={25}/>)}
            <div className="border-b-2 h-4 w-full mb-4"></div>
            {numImages == 1 ? <SingleCarousel title="Workshops" src="workshops" length={11}/> : (numImages == 2 ? <DoubleCarousel title="Workshops" src="workshops" length={11}/> : <TripleCarousel title="Workshops" src="workshops" length={11}/>)}
            <div className="border-b-2 h-4 w-full mb-4"></div>
            {numImages == 1 ? <SingleCarousel title="Palengke" src="palengke" length={10}/> : (numImages == 2 ? <DoubleCarousel title="Palengke" src="palengke" length={10}/> : <TripleCarousel title="Palengke" src="palengke" length={10}/>)}
            <div className="border-b-2 h-4 w-full mb-4"></div>
            {numImages == 1 ? <SingleCarousel title="Variety Show" src="variety-show" length={28}/> : (numImages == 2 ? <DoubleCarousel title="Variety Show" src="variety-show" length={28}/> : <TripleCarousel title="Variety Show" src="variety-show" length={28}/>)}
        </PageContainer>
    );
    };
}