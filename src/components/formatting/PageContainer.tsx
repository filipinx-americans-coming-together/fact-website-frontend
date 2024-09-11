import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Navbar from "../navigation/Navbar";

interface PageContainerProps {
    children: ReactNode;
    title: string;
}

/**
 * Formatting container for website pages
 * @param children page content
 * @returns PageContainer
 */
export default function PageContainer({ children, title }: PageContainerProps) {
    return (
        <div>
            <Navbar />

            <div className="mx-14 mb-6 lg:mx-32 lg:mb-10">
                <PageHeader text={title} />
                {children}
            </div>
        </div>
    );
}
