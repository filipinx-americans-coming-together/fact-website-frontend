"use client";

import Navbar from "@/components/navigation/Navbar";
import { useEffect } from "react";

export default function Donate() {
    useEffect(() => {
        (window as any).bboxInit = function () {
            // @ts-ignore
            bbox.showForm("799cd906-9cc4-401c-bf98-a0de4daac6c6");
        };
        (function () {
            var e = document.createElement("script");
            e.async = true;
            e.src = "https://bbox.blackbaudhosting.com/webforms/bbox-min.js";
            document.getElementsByTagName("head")[0].appendChild(e);
        })();
    }, []);

    return (
        <>
            <Navbar />

            <div className="w-9/12 mx-auto text-center flex flex-col items-center">
                <h1 className="font-bold sm:text-4xl lg:text-6xl">
                    Sponsor FACT
                </h1>
                <br />
                <p className="w-8/12">
                    The Filipino Americans Coming Together (FACT) conference is
                    an annual conference organized by the Philippine Student
                    Association at University of Illinois and Urbana-Champaign.
                    To learn more, visit{" "}
                    <a className="underline" href="/">
                        fact.psauiuc.org
                    </a>
                    .
                </p>
                <br />
                <div id="bbox-root"></div>
            </div>
        </>
    );
}
