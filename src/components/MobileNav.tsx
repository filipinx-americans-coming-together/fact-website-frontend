"use client";
import Link from "next/link";
import { useState } from "react";

interface MobileNavProps {
    navList: { text: string; path: string }[];
}

export default function MobileNav({ navList }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <div className="block md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                {navList.map(({ text, path }, i) => (
                    <Link
                        key={text}
                        href={path}
                        prefetch={true}
                        className={isOpen ? "hidden " : "block "}
                    >
                        {text}
                    </Link>
                ))}
            </div>
        </>
    );
}
