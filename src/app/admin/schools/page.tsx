"use client";

import { useSchools } from "@/hooks/api/useSchools";
import { useUploadSchools } from "@/hooks/api/useUploadSchools";
import UploadFile from "../components/UploadFile";

export default function Schools() {
    const { schools } = useSchools();
    const { uploadSchools, error, isPending } = useUploadSchools();

    return (
        <div className="min-h-screen bg-slate-50 text-black">
            <div className="w-9/12 mx-auto text-left">
                <br />
                {(schools && schools.length) === 0 && (
                    <UploadFile
                        title="Schools"
                        onUpload={uploadSchools}
                        errorMessage={error?.message}
                        isLoading={isPending}
                    />
                )}

                <br />

                <h1>All Schools</h1>
                <div className="border-t-2" />
                <br />
                <ul className="grid grid-cols-4 gap-2">
                    {schools &&
                        schools.map((school) => (
                            <li key={school.name}>{school.name}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
