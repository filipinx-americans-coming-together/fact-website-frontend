"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";

const iconList = [
    // { icon: <FaFacebook style={{ fontSize: "22px" }} />, link: "#" },
    {
        icon: <FaInstagram style={{ fontSize: "22px" }} />,
        link: "https://www.instagram.com/psa_fact/",
    },
];

const NAV_LINKS = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Team", path: "/team" },
    { text: "Gallery", path: "/gallery" },
    // { text: "Workshops", path: "/workshops" },
    { text: "FAQ", path: "/faq" },
];

const FACT_LOGO_SRC = "/fact-2024-logo.png";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <nav className="flex justify-between mx-auto items-center py-4 px-10 md:px-20">
            <Link className="md:w-[140px]" href={"/"}>
                <Image
                    className="rounded-lg"
                    src={FACT_LOGO_SRC}
                    alt="FACT Logo"
                    width={50}
                    height={50}
                />
            </Link>

            <DesktopNav links={NAV_LINKS} />

            <ul className="md:w-[140px] flex text-text-primary gap-6 items-center">
                {/* socials */}
                {iconList.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.link}
                            target="_blank"
                            className="hover:text-highlight-primary"
                        >
                            {item.icon}
                        </Link>
                    </li>
                ))}

                {/* donate */}
                <Link
                    className="bg-highlight-2-primary hover:bg-highlight-2-secondary text-background-primary px-4 py-2 rounded-full shadow flex gap-2 justify-center items-center"
                    href="/donate"
                    target="_blank"
                >
                    Donate <MdOpenInNew />
                </Link>

                {/* mobile navigation toggle */}
                <li className="flex flex-col items-center">
                    <button className="relative text-text-primary rounded md:hidden">
                        {showModal ? (
                            <div>
                                <FaTimes
                                    onClick={toggleModal}
                                    style={{ fontSize: "22px" }}
                                />
                                <MobileNav links={NAV_LINKS} />
                            </div>
                        ) : (
                            <FaBars
                                onClick={toggleModal}
                                style={{ fontSize: "22px" }}
                            />
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
}
