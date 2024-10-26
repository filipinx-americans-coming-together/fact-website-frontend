import Link from "next/link";

export default function DesktopNav(props: {
    links: { text: string; path: string }[];
}) {
    return (
        <ul className="hidden items-center justify-center text-center gap-16 md:flex">
            {props.links.map((link, index) => (
                <li className="text-text-primary hover:text-highlight-primary" key={index}>
                    <Link href={link.path} prefetch={true}>
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
