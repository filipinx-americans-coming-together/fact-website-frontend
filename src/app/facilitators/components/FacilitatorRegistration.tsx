import InteractiveButton from "@/components/ui/InteractiveButton";
import FacilitatorRow from "./FacilitatorRow";

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
    return (
        <>
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
                        />
                    );
                })}
                <br />
                <div className="flex justify-center">
                    <InteractiveButton text="Save Changes" onClick={() => {}} />
                </div>
            </div>
        </>
    );
}
