import Link from "next/link";

export default function NavLinks(props: {
    links: { text: string; path: string }[];
}) {
    return (
        <>
            {props.links.map((link, index) => (
                <li
                    key={index}
                    className="text-text-primary text-sm hover:text-highlight-primary"
                >
                    <Link href={link.path} prefetch={true}>
                        {link.text}
                    </Link>
                </li>
            ))}
        </>
    );
}
