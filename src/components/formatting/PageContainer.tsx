import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Navbar from "../navigation/Navbar";
import Footer from "./PageFooter";

interface PageContainerProps {
    children: ReactNode;
    title: string;
    background?: string;
    maintainCase?: boolean;
}

/**
 * Formatting container for website pages
 * @param children page content
 * @returns PageContainer
 */
export default function PageContainer({ children, title, background="bg-gradient-2 opacity-70 saturate-150", maintainCase=false }: PageContainerProps) {
    return (
        <div className="h-fit w-screen">
            <Navbar />
            
            <div className="flex relative">
                <div className={`-z-10 absolute inset-0 w-full grow ${background}`}></div>
                <div className="mx-6 py-6 sm:mx-14 lg:mx-32 lg:py-10">
                    <div className="text-center py-4 sm:p-10 border-b-2 mb-6 lg:mb-10">
                        <div className={`font-bold text-4xl sm:text-5xl lg:text-6xl ${maintainCase ? "" : "uppercase"}`}>
                            {title}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
