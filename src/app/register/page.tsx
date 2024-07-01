"use client";

import { MutableRefObject, useEffect, useRef } from "react";

export default function Register() {
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);

    return (
        <>
            <div className="h-screen flex flex-column items-center justify-center">
                <div
                    ref={page1Ref}
                    id="page1"
                    className="hidden px-20 py-12 bg-text-primary text-black rounded-lg"
                >
                    <div>Create Your FACT Account</div>
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
                <div
                    ref={page2Ref}
                    id="page2"
                    className="hidden px-20 py-12 bg-text-primary text-black rounded-lg"
                >
                    <div>Register For Workshops</div>
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
                    <div>View workshop information <a href="/" className="underline">here</a></div>
                </div>
                <div
                    ref={page3Ref}
                    id="page3"
                    className="px-20 py-12 bg-text-primary text-black rounded-lg"
                >
                    <div>Payment</div>
                </div>
            </div>
        </>
    );
}
