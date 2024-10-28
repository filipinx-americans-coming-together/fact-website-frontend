"use client";

import { useUploadWorkshops } from "@/hooks/api/useUploadWorkshops";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import UploadFile from "../components/UploadFile";

export default function Workshops() {
    const { workshops } = useWorkshops();
    const { uploadWorkshops, error, isPending } = useUploadWorkshops();

    return (
        <div className="min-h-screen bg-slate-50 text-black">
            <div className="w-9/12 mx-auto">
                {(workshops && workshops.length) === 0 && (
                    <UploadFile
                        title="Workshops"
                        onUpload={uploadWorkshops}
                        errorMessage={error?.message}
                        isLoading={isPending}
                    />
                )}

                <br />

                {[1, 2, 3].map((sessionNum) => {
                    return (
                        <div key={sessionNum}>
                            <h1>Session {sessionNum} Workshops</h1>
                            <div className="border-t-2" />
                            <br />
                            <ul className="flex flex-col gap-2">
                                {workshops &&
                                    workshops
                                        .filter(
                                            (workshop) =>
                                                workshop.session == sessionNum
                                        )
                                        .map((workshop) => (
                                            <li
                                                key={
                                                    workshop.title +
                                                    workshop.session
                                                }
                                            >
                                                {workshop.title}
                                            </li>
                                        ))}
                            </ul>
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
