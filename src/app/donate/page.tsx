"use client";

import PageContainer from "@/components/formatting/PageContainer";
import Footer from "@/components/formatting/PageFooter";
import Navbar from "@/components/navigation/Navbar";
import LinkButton from "@/components/ui/LinkButton";
import Link from "next/link";
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
        <PageContainer title="Support FACT">
            <div className="min-h-screen py-6">
                <div className="w-7/12 mx-auto text-center flex flex-col items-center gap-4">
                    {/* <h1 className="font-bold text-5xl lg:text-6xl m-10 lg:mb-10">
                        Support FACT
                    </h1> */}
                    <br />
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/I0ZY8nz8XfI?si=8IJxQXv1HICBv5PX&autoplay=1&mute=1&loop=1&cc_load_policy=1"
                        title="FACT 2024 Promotional Video"
                        frameBorder="0"
                    />
                    <br />
                    <br />
                    <div className="text-left">
                        <p>
                            The Filipinx Americans Coming Together (FACT)
                            conference is an annual student-run conference
                            organized by the Philippine Student Association at
                            University of Illinois at Urbana-Champaign.
                        </p>
                        <br />
                        <p>
                            Your donation to the FACT Conference helps us bring
                            facilitators, panelists, keynote speakers,
                            headliners, venues, and much more for our attendees
                            to enjoy and benefit from. This conference would not
                            be possible without the help of generous donors like
                            you. But your help goes beyond sponsorship. By
                            supporting this conference, you contribute to
                            inspiring and empowering today&apos;s generation to be
                            passionate and responsible leaders, who aim to shape
                            their world and follow their dreams. You are laying
                            the groundwork to strengthen the upcoming
                            generation.
                        </p>
                    </div>
                    <LinkButton
                        url="/about"
                        text="Learn More"
                    >
                    </LinkButton>

                    <br />
                    <br />
                    <div id="bbox-root"></div>
                </div>
            </div>
        </PageContainer>
        
    );
}
