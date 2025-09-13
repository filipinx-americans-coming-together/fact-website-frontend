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
export default function PageContainer({ children, title, background="bg-whirl bg-cover bg-center", maintainCase=false }: PageContainerProps) {
    return (
        <div>
            <Navbar />
            <div className={background}>
                <div className="mx-6 mb-6 sm:mx-14 lg:mx-32 lg:mb-10">
                    <PageHeader text={title} maintainCase={maintainCase} />
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
