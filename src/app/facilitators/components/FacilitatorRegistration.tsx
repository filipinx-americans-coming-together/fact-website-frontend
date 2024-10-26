import InteractiveButton from "@/components/ui/InteractiveButton";
import FacilitatorRow from "./FacilitatorRow";

export default function FacilitatorRegistration({
    facilitators,
    facilitatedSessions,
}: {
    facilitators: string[];
    facilitatedSessions: number[];
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
