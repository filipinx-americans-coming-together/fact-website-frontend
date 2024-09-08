interface PageHeaderProps {
    text: string;
}

/**
 * Formatting for page header
 * @param text page title
 * @returns PageHeader
 */
export default function PageHeader({ text }: PageHeaderProps) {
    return (
        <div className="text-center p-10 border-b-2 mb-10">
            <div className="font-bold text-5xl lg:text-6xl uppercase">
                {text}
            </div>
        </div>
    );
}
