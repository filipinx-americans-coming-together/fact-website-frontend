import Link from "next/link";

export default function MobileNav(props: {
    links: { text: string; path: string }[];
}) {
    return (
        <ul className="absolute right-0 rounded py-2 mt-2 text-left flex flex-col min-w-48 text-background-primary bg-text-primary border border-black">
            {props.links.map((link, index) => (
                <li className="px-6 py-2 hover:bg-slate-200" key={index}>
                    <Link href={link.path} prefetch={true}>
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
