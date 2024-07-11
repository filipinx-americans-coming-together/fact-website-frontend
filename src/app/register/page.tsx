"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Register() {
    const [pageNumber, setPageNumber] = useState(0);

    const pageBack = () => {
        setPageNumber(pageNumber - 1);
    };

    const pageForward = () => {
        setPageNumber(pageNumber + 1);
    };

    let formPage = <div></div>;

    // set page
    switch (pageNumber) {
        case 0:
            formPage = (
                <div
                    id="page0"
                    className="h-4/5 w-4/12 px-20 py-12 bg-text-primary text-black items-center rounded-lg"
                >
                    <div className="text-center mb-6">Create Your FACT Account</div>
                    <form autoComplete="off">
                        <label className="block mt-2">Email</label>
                        <input
                            required
                            type="text"
                            id="email"
                            className="block border-solid border-2 mb-2"
                        ></input>
                        <label className="block mt-2">First Name</label>
                        <input
                            required
                            type="text"
                            id="first-name"
                            className="block border-solid border-2 mb-2"
                        ></input>
                        <label className="block mt-2">Last Name</label>
                        <input
                            required
                            type="text"
                            id="last-name"
                            className="block border-solid border-2 mb-2"
                        ></input>
                        <label className="block mt-2">Pronouns</label>
                        <input
                            type="text"
                            id="pronouns"
                            className="block border-solid border-2 mb-2"
                        ></input>
                        <label className="block mt-2">Year</label>
                        <select
                            id="year"
                            className="block border-solid border-2 mb-2"
                        >
                            <option value="select">Select</option>
                        </select>
                        <label className="block mt-2">School</label>
                        <select
                            id="school"
                            className="block border-solid border-2 mb-2"
                        >
                            <option value="select">Select</option>
                        </select>
                    </form>
                </div>
            );
            break;
        case 1:
            formPage = (
                <div
                    id="page1"
                    className="h-4/5 w-4/12 px-20 py-12 bg-text-primary text-black items-center rounded-lg"
                >
                    <div className="text-center mb-6">Register For Workshops</div>
                    <form autoComplete="off">
                        <label className="block mt-2">Session 1</label>
                        <select
                            id="session-1"
                            className="block border-solid border-2 mb-2"
                        >
                            <option value="select">Select</option>
                        </select>
                        <label className="block mt-2">Session 2</label>
                        <select
                            id="session-2"
                            className="block border-solid border-2 mb-2"
                        >
                            <option value="select">Select</option>
                        </select>
                        <label className="block mt-2">Session 3</label>
                        <select
                            id="session-2"
                            className="block border-solid border-2 mb-2"
                        >
                            <option value="select">Select</option>
                        </select>
                    </form>
                    <div>
                        View workshop information{" "}
                        <a href="/" className="underline">
                            here
                        </a>
                    </div>
                </div>
            );
            break;
        case 2:
            formPage = (
                <div
                    id="page2"
                    className="h-4/5 w-4/12 px-20 py-12 bg-text-primary text-black items-center rounded-lg"
                >
                    <div className="text-center mb-6">Payment</div>
                </div>
            );
            break;
    }

    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col items-center justify-center">
                {formPage}

                <div className="flex flex-row">
                    <button
                        disabled={pageNumber == 0 ? true : false}
                        onClick={pageBack}
                        className="text-text-primary disabled:highlight-secondary"
                    >
                        <svg
                            width="6em"
                            height="6em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 7L10 12L15 17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button
                        disabled={pageNumber == 2 ? true : false}
                        onClick={pageForward}
                        className="text-text-primary disabled:highlight-secondary"
                    >
                        <svg
                            width="6em"
                            height="6em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 7L15 12L10 17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
