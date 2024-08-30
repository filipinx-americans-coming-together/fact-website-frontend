"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface CarouselProps {
    title: string;
    images: string[];
}

export default function Carousel({title, images}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return(
        <>
            <div className="sm:text-3xl lg:text-4xl">{title}</div>
            <div className="flex flex-row justify-between my-8 h-64">
                <div className="size-9 cursor-pointer self-center text-4xl" 
                    onClick={()=>setCurrentIndex(() => currentIndex - 3 < 0 ? ~~((images.length - 1) / 3) * 3 : currentIndex - 3)}>
                        <IoIosArrowBack />
                </div>
                <div className="h-64 w-96">
                    <img key={currentIndex} src={images[currentIndex]} className="b-1"/>
                </div>
                <div className="h-64 w-96">
                    <img key={currentIndex+1} src={images[(currentIndex + 1 > images.length ? currentIndex : currentIndex + 1)]} 
                        className={"b-1" + (currentIndex + 1 > images.length ? " hidden" : "")}/>
                </div>
                <div className="h-64 w-96">
                    <img key={currentIndex+2} src={images[(currentIndex + 2 > images.length ? currentIndex : currentIndex + 2)]} 
                        className={"b-1" + (currentIndex + 2 > images.length ? " hidden" : "")}/>
                </div>
                <div className="size-9 cursor-pointer self-center text-4xl" 
                    onClick={()=>setCurrentIndex(() => currentIndex + 3 > images.length - 1 ? 0 : currentIndex + 3)}>
                    <IoIosArrowForward />
                </div>
            </div>
        </>
    );
}