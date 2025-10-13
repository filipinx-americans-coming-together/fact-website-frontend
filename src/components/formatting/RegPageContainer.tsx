import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Navbar from "../navigation/Navbar";
import Footer from "./PageFooter";

interface RegPageContainerProps {
    children: ReactNode;
    background?: string;
}

/**
 * Formatting container for website pages
 * @param children page content
 * @returns PageContainer
 */
export default function RegPageContainer({ children, background }: RegPageContainerProps) {
    return (
        <div className="min-h-screen w-full flex flex-col justify-between gap-10 lg:gap-15">
            <Navbar />
                {background && <div className="relative">
                    <div className={`-z-10 absolute inset-0 w-full ${background}`}></div>
                    <div className="">
                        {children}
                    </div>
                </div>}
                {!background && <div>{children}</div>}
            <Footer />
        </div>
    );
}