import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const NAV_LINKS = [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },

    ];

    return (
        <div className="flex flex-row w-full p-6 bg-background-primary items-center">
            <div className="flex flex-row w-full sm:hidden md:block">
                {NAV_LINKS.map(({ text, path }) => (
                    <Link key={text} href={path} prefetch={true} className=" mx-8 text-text-primary hover:text-highlight-primary">
                        {text}
                    </Link>
                ))}
            </div>
            <MobileNav navList={NAV_LINKS}/>
        </div>
    );
}
