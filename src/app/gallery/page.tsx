"use client";
import PageContainer from "@/components/formatting/PageContainer";
import Footer from "@/components/formatting/PageFooter";
import Carousel from "@/components/ui/Carousel";
import { useMediaQuery } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import React from "react";

const Gallery = () => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 640px)");
    const isMediumDevice = useMediaQuery(
        "only screen and (min-width : 641px) and (max-width : 1024px)"
    );

    return (
        <PageContainer title="Gallery">
            <Carousel title="Welcome Ceremony" src="welcome-ceremony" length={25} numImages={isSmallDevice ? 1 : (isMediumDevice ? 2 : 3)} />
            <div className="border-b-2 h-4 w-full mb-4"></div>
            <Carousel title="Workshops" src="workshop-pics" length={11} numImages={isSmallDevice ? 1 : (isMediumDevice ? 2 : 3)} />
            <div className="border-b-2 h-4 w-full mb-4"></div>
            <Carousel title="Palengke" src="palengke" length={10} numImages={isSmallDevice ? 1 : (isMediumDevice ? 2 : 3)} />
            <div className="border-b-2 h-4 w-full mb-4"></div>
            <Carousel title="Variety Show" src="variety-show" length={28} numImages={isSmallDevice ? 1 : (isMediumDevice ? 2 : 3)} />
            <Footer />
        </PageContainer>
    );
};

export default dynamic(() => Promise.resolve(Gallery), {
  ssr: false,
});