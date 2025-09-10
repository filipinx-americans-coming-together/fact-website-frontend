interface BackgroundVideoProps {
    src: string;
    children: any;
}

/**
 * Background image, takes up width/height of the screen
 * @param src url for image
 * @param children
 * @returns BackgroundImage component
 */
export default function BackgroundVideo({
    src,
    children,
}: BackgroundVideoProps) {
    return (
        <div className="relative min-h-screen w-full py-4 sm:py-0 flex flex-col justify-center"> {/*bg-[#112e28] */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50 overflow-hidden -z-10"
            >
                <iframe className="pointer-events-none relative min-h-screen w-full py-4 sm:py-0 flex flex-col justify-center grayscale" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="inset-x-0 item-center my-auto flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}
