"use client";

import { useUploadWorkshops } from "@/hooks/api/useUploadWorkshops";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import { useState } from "react";
import Button from "../components/Button";

const EXCEL_FILE_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export default function Workshops() {
    const { workshops } = useWorkshops();
    const { uploadWorkshops, error } = useUploadWorkshops();

    const [file, setFile] = useState<File>();
    const [clientError, setClientError] = useState<string>();

    const handleDrop = (event: any) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        setFile(droppedFile);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className="min-h-screen bg-slate-50 text-black">
            <div className="w-9/12 mx-auto text-center">
                {(workshops && workshops.length) === 0 && (
                    <div className="text-left">
                        <h1>Upload workshops via file</h1>
                        <br />
                        {file ? (
                            <p className="border-2 p-2">{file.name} uploaded</p>
                        ) : (
                            <div
                                className="hidden md:flex items-center justify-center w-7/12 aspect-video border-4 rounded border-dashed"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                Drag and drop .xslx file here
                            </div>
                        )}
                        <br />
                        <label>
                            {file ? "Choose a different file" : "Browse files"}:{" "}
                        </label>
                        <input
                            className="text-transparent"
                            type="file"
                            accept={EXCEL_FILE_TYPE}
                            onChange={(event) => {
                                if (event.currentTarget.files) {
                                    setFile(event.currentTarget.files[0]);
                                }
                            }}
                        />
                        <Button
                            text="Upload Workshops"
                            onClick={() => {
                                if (!file) {
                                    setClientError("Please upload a file");
                                } else if (file.type != EXCEL_FILE_TYPE) {
                                    setClientError(
                                        "Only .xlsx (Excel) files are accepted"
                                    );
                                } else {
                                    setClientError(undefined);
                                    uploadWorkshops({ file: file });
                                }
                            }}
                            isSubmit={false}
                        />
                        {clientError && (
                            <p className="text-red-600">{clientError}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
