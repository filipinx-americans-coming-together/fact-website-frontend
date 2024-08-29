interface PageHeaderProps {
    text: string;
}

/**
* Formatting for page header
* @param text page title
8 @returns PageHeader
*/
export default function PageHeader({text}: PageHeaderProps) {
    return(
        <div className="text-center p-10 border-b-2 m-10">
            <div className="font-bold sm:text-4xl lg:text-6xl uppercase">{text}</div>
        </div>
    );
}