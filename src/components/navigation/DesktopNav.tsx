import Link from "next/link";

export default function DesktopNav(props: {
    links: { text: string; path: string }[];
}) {
    return (
        <ul className="hidden items-center justify-center text-center gap-16 md:flex">
            {props.links.map((link, index) => (
                <li
                    className={"text-text-primary " + `${index === props.links.length - 1 ? " rounded-full w-fit ml-[-8px] px-4 py-2 bg-highlight-primary hover:text-highlight-secondary whitespace-nowrap" : "hover:text-highlight-primary"}`}
                    key={index}
                >
                    <Link href={link.path}>{link.text}</Link>
                </li>
            ))}
        </ul>
    );
}
