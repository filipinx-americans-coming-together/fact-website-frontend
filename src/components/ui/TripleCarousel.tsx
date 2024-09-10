"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

const IMG_HEIGHT = 3456;
const IMG_WIDTH = 5184;
const PLACEHOLDER_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9vG2BwACbwEDalojHwAAAABJRU5ErkJggg==";
const TRANSPARENT_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

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
export default function TripleCarousel({ title, src, length }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <>
            <div className="text-4xl">{title}</div>
            <div className="flex flex-row justify-between my-8 h-fit">
                <div
                    className="w-fit cursor-pointer self-center text-4xl"
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
                <div className="w-1/4">
                    <Image
                        key={currentIndex}
                        src={`/${src}/${currentIndex}.JPG`}
                        height={IMG_HEIGHT}
                        width={IMG_WIDTH}
                        alt=""
                        placeholder={PLACEHOLDER_URL}
                    />
                </div>
                <div className="w-1/4">
                    <Image
                        key={currentIndex + 1}
                        src={currentIndex + 1 > length ? TRANSPARENT_URL : `/${src}/${currentIndex + 1}.JPG`}
                        height={currentIndex + 1 > length ? 1 : IMG_HEIGHT}
                        width={currentIndex + 1 > length ? 1 : IMG_WIDTH}
                        alt=""
                        placeholder={currentIndex + 1 > length ? TRANSPARENT_URL : PLACEHOLDER_URL}
                    />
                </div>
                <div className="w-1/4">
                    <Image
                        key={currentIndex + 2}
                        src={currentIndex + 2 > length ? TRANSPARENT_URL : `/${src}/${currentIndex + 2}.JPG`}
                        height={currentIndex + 2 > length ? 1 : IMG_HEIGHT}
                        width={currentIndex + 2 > length ? 1 : IMG_WIDTH}
                        alt=""
                        placeholder={currentIndex + 1 > length ? TRANSPARENT_URL : PLACEHOLDER_URL}
                    />
                </div>
                <div
                    className="w-fit cursor-pointer self-center text-4xl"
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
