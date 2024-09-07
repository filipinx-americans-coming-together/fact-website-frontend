"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import InteractiveButton from "../ui/InteractiveButton";
import NavLinks from "./NavLinks";

const iconList = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/psa_fact/" },
];

const NAV_LINKS = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Team", path: "/team" },
    { text: "Gallery", path: "/gallery" },
];

const FACT_LOGO_SRC = "/fact-2024-logo.png";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            {/* desktop navigation */}
            <nav className="hidden mb-4 md:block">
                <div className="flex justify-between mx-auto items-center py-4 px-24">
                    <img className="rounded-lg w-10 h-10" src={FACT_LOGO_SRC} />

                    <ul className="flex gap-8 md:gap-16 items-center justify-center text-center ">
                        <NavLinks links={NAV_LINKS} />
                    </ul>
                    <ul className="flex text-text-primary gap-6 items-center ">
                        {iconList.map((item, index) => (
                            <a
                                href={item.link}
                                target="_blank"
                                key={index}
                                className="hover:text-highlight-primary"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* mobile navigation */}
            <nav className="mb-4 py-4 px-4 block bg-background-primary md:hidden ">
                <div className="mx-auto flex justify-between items-center ">
                    <img className="rounded-lg w-10 h-10" src={FACT_LOGO_SRC} />
                    <ul className="flex text-text-primary gap-6 items-center ">
                        {iconList.map((item, index) => (
                            <a
                                href={item.link}
                                target="_blank"
                                key={index}
                                className="hover:text-highlight-primary"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </ul>
                    <div className="flex justify-end items-center gap-6 text-text-primary ">
                        <FaBars
                            onClick={toggleModal}
                            className={`text-text-primary ${
                                showModal ? "hidden" : ""
                            }`}
                        />
                    </div>
                </div>
                {showModal && (
                    <div className="h-full fixed inset-0 flex justify-center items-center bg-background-primary">
                        <div className={`absolute inset-0`} />
                        <FaTimes
                            className={`absolute top-6 right-4 text-text-primary ${
                                !showModal ? "hidden" : ""
                            }`}
                            onClick={toggleModal}
                            style={{ fontSize: "16px" }}
                        />
                        <div className="relative w-full">
                            <ul className="flex flex-col gap-8 items-center justify-center h-full">
                                <NavLinks links={NAV_LINKS} />
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
