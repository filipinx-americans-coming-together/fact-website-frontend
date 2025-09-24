import Link from "next/link";

export default function MobileNav(props: {
    links: { text: string; path: string }[];
}) {
    return (
        <ul className="absolute z-20 right-0 rounded-sm py-2 mt-2 text-left flex flex-col min-w-48 bg-highlight-primary border border-black">
            {props.links.map((link, index) => (
                <Link
                    className="px-6 py-2 hover:bg-slate-200"
                    key={index}
                    href={link.path}
                >
                    {link.text}
                </Link>
            ))}
        </ul>
    );
}
