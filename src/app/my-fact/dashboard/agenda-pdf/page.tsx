"use client";

import { useUser } from "@/hooks/api/useUser";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef } from "react";

export default function AgendaDownload() {
    const { user } = useUser();
    const pdfRef = useRef<any>();

    function downloadPDF() {
        const input = pdfRef.current;
        if (!input) return;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4", true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;

            pdf.addImage(
                imgData,
                "PNG",
                imgX,
                imgY,
                imgWidth * ratio,
                imgHeight * ratio
            );
            pdf.save("my-fact-agenda.pdf");
        });
    }

    useEffect(() => {
        if (user) {
            downloadPDF();
        }
    }, [user]);

    return (
        <>
            <div
                ref={pdfRef}
                className="min-h-screen bg-white text-black flex flex-col items-center"
            >
                <div className="w-10/12">
                    <h1 className="text-center text-xl">My FACT Agenda</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce scelerisque magna tortor, in gravida ligula
                        sollicitudin vitae. Maecenas maximus arcu augue, luctus
                        gravida ipsum blandit a. Vivamus luctus ex vitae
                        pellentesque accumsan. Cras interdum risus in ipsum
                        placerat bibendum. Integer aliquam aliquet orci.
                        Suspendisse tincidunt imperdiet vehicula. Donec aliquam
                        orci at mi convallis cursus. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus. Curabitur id suscipit
                        magna, dapibus fermentum metus. Vestibulum risus dui,
                        auctor vitae varius id, dictum sit amet sem. Suspendisse
                        quam magna, aliquet vel ipsum sed, elementum dignissim
                        odio. Suspendisse id ultrices ligula, vestibulum laoreet
                        purus. Nam sit amet vehicula felis. Praesent scelerisque
                        in nulla id tristique.
                    </p>
                    <p>{user?.delegate.pronouns}</p>
                </div>
            </div>
        </>
    );
}
