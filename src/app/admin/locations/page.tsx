"use client";

import { useUploadLocations } from "@/hooks/api/useUploadLocations";
import UploadFile from "../components/UploadFile";
import { useLocations } from "@/hooks/api/useLocations";

export default function Schools() {
    const { locations } = useLocations();
    const { uploadLocations, error, isPending } = useUploadLocations();

    return (
        <div className="min-h-screen bg-slate-50 text-black">
            <div className="w-9/12 mx-auto text-left">
                {(locations && locations.length) === 0 && (
                    <UploadFile
                        title="Locations"
                        onUpload={uploadLocations}
                        errorMessage={error?.message}
                        isLoading={isPending}
                    />
                )}

                <br />

                {[1, 2, 3].map((sessionNum) => {
                    return (
                        <div key={sessionNum}>
                            <h1>Session {sessionNum} Locations</h1>
                            <div className="border-t-2" />
                            <br />
                            <ul className="grid grid-cols-4 gap-2">
                                {locations &&
                                    locations
                                        .filter(
                                            (location) =>
                                                location.session == sessionNum
                                        )
                                        .map((location) => (
                                            <li
                                                key={
                                                    location.building +
                                                    location.room_num +
                                                    location.session
                                                }
                                            >
                                                {location.building}{" "}
                                                {location.room_num}
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
