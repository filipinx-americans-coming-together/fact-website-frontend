"use client";

import InteractiveButton from "@/components/ui/InteractiveButton";
import FacilitatorRow from "./FacilitatorRow";
import { useState } from "react";
import { useRegisterFacilitators } from "@/hooks/api/useRegisterFacilitators";
import LoadingCircle from "@/components/icons/LoadingCircle";

export default function FacilitatorRegistration({
    facilitators,
    facilitatedSessions,
    registrations,
}: {
    facilitators: string[];
    facilitatedSessions: { session: number; title: string }[];
    registrations:
        | {
              facilitator_name: string;
              workshop: number;
              session: number;
          }[];
}) {
    const [formData, setFormData] = useState<Object>({});
    const { registerFacilitators, isPending, isSuccess } =
        useRegisterFacilitators();

    return (
        <div>
            <h1 className="font-bold text-xl">Register for workshops</h1>
            <p className="text-xs">
                Registration for other workshops is{" "}
                <span className="font-bold">not</span> required for facilitators
            </p>
            <br />

            {/* facilitator list */}
            <div className="rounded p-6 flex flex-col gap-4 bg-text-primary text-background-primary">
                {facilitators.map((facilitator) => {
                    return (
                        <FacilitatorRow
                            key={facilitator}
                            name={facilitator}
                            facilitatedSessions={facilitatedSessions}
                            registrations={registrations?.filter(
                                (registration) =>
                                    registration.facilitator_name ===
                                    facilitator
                            )}
                            setState={setFormData}
                        />
                    );
                })}
                <br />
                <div className="flex justify-center">
                    {isSuccess && "Changes saved successfully"}
                    {isPending && !isSuccess && <LoadingCircle />}
                    {!isPending && !isSuccess && (
                        <InteractiveButton
                            text="Save Changes"
                            onClick={() => {
                                // parse data, name|workshop
                                // format with name: name, workshops: [ids]

                                const registrationData: {
                                    facilitator_name: string;
                                    workshops: (number | undefined)[];
                                }[] = [];

                                for (const [key, value] of Object.entries(
                                    formData
                                )) {
                                    const data = key.split("|");
                                    const facilitatorName = data[0];

                                    const index = registrationData.findIndex(
                                        (registration) =>
                                            registration.facilitator_name ===
                                            facilitatorName
                                    );

                                    if (index !== -1) {
                                        registrationData[index].workshops.push(
                                            value ? parseInt(value) : undefined
                                        );
                                    } else {
                                        registrationData.push({
                                            facilitator_name: facilitatorName,
                                            workshops: [
                                                value
                                                    ? parseInt(value)
                                                    : undefined,
                                            ],
                                        });
                                    }
                                }

                                registerFacilitators({
                                    registrations: registrationData,
                                });
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
