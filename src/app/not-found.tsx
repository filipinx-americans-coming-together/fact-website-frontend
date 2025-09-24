import Footer from "@/components/formatting/PageFooter";
import NoiseFilter from "@/components/icons/NoiseFilter";
import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound(){
    return(
        <>
            <NoiseFilter></NoiseFilter>
            <div className="-z-10 absolute -top-[50px] -left-[50px] min-w-screen min-h-screen w-[calc(100%+50px)] h-[calc(100%+50px)] bg-noise-base bg-size-[5px_5px] filter-[url(#noise)]"></div>
            {/* <div className="-z-20 absolute inset-0 w-screen h-screen bg-radial from-highlight-2-secondary to-highlight-2-primary saturate-125"></div> */}
            
            <div className="h-screen w-screen flex flex-col justify-between items-center">
            <Navbar></Navbar>
            <div className="flex flex-col gap-5 items-center">
                <span className="text-xl sm:text-2xl font-bold py-6 sm:py-8 px-8 sm:px-16 border-4 border-black">404 | Page Not Found</span>
                 <Link
                        className="bg-highlight-primary hover:bg-highlight-secondary text-text-primary px-2 py-2 rounded-full flex items-center gap-2 justify-center w-50"
                        href="/"
                ><FaArrowLeftLong /> Back Home</Link>
            </div>
            <div className="h-1 w-full"></div>
            </div>
            <Footer></Footer>
        </>
    )
}
