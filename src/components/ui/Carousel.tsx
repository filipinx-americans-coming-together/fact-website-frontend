"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface CarouselProps {
    title: string;
    src: string;
    length: number;
}

/**
 * Image carousel
 * @param title title to display above carousel
 * @param src folder in public to display images from
 * @param length number of images in the folder (labeled 1.JPG, 2.JPG, ..., [length].JPG)
 * @returns LinkButton
 */
export default function Carousel({ title, src, length }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <>
            <div className="sm:text-3xl lg:text-4xl">{title}</div>
            <div className="flex flex-row justify-between my-8 h-64">
                <div
                    className="size-9 cursor-pointer self-center text-4xl"
                    onClick={() =>
                        setCurrentIndex(() =>
                            currentIndex - 3 < 1
                                ? ~~((length - 1) / 3) * 3 + 1
                                : currentIndex - 3
                        )
                    }
                >
                    <IoIosArrowBack />
                </div>
                <div className="h-64 w-96">
                    <img
                        key={currentIndex}
                        src={`/${src}/${currentIndex}.JPG`}
                        alt=""
                        className="bg-highlight-secondary"
                    />
                </div>
                <div className="h-64 w-96">
                    <img
                        key={currentIndex + 1}
                        src={`/${src}/${currentIndex + 1 > length
                            ? currentIndex
                            : currentIndex + 1}.JPG`}
                        alt=""
                        className={
                            "bg-highlight-secondary" +
                            (currentIndex + 1 > length ? " hidden" : "")
                        }/>
                </div>
                <div className="h-64 w-96">
                    <img
                        key={currentIndex + 2}
                        src={`/${src}/${currentIndex + 2 > length
                            ? currentIndex
                            : currentIndex + 2}.JPG`}
                        alt=""
                        className={
                            "bg-highlight-secondary" +
                            (currentIndex + 2 > length ? " hidden" : "")
                        }/>
                </div>
                <div
                    className="size-9 cursor-pointer self-center text-4xl"
                    onClick={() =>
                        setCurrentIndex(() =>
                            currentIndex + 3 > length
                                ? 1
                                : currentIndex + 3
                        )
                    }
                >
                    <IoIosArrowForward />
                </div>
            </div>
        </>
    );
}
