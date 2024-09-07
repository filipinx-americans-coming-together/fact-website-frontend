import { ReactNode } from "react";
import Navbar from "../navigation/Navbar";
import PageHeader from "./PageHeader";
import LinkButton from "../ui/LinkButton";

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
        <div className="m-10">
            <Navbar />
            <PageHeader text={title} />
            {children}

            <div className="mx-auto text-center w-full my-10">
                <LinkButton text="REGISTER NOW" url="/register" />
            </div>
        </div>
    );
}
