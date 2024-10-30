import { ReactNode } from "react";

interface FAQProps {
    question: string;
    children: ReactNode
}

export default function FAQSection({question, children}: FAQProps) {
    return (
        <div className="mb-10">
            <div className="text-3xl lg:text-4xl font-bold mb-6">{question}</div>
            <>{children}</>
        </div>
    )
}