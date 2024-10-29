import { useWorkshop } from "@/hooks/api/useWorkshop";

export default function WorkshopInfo({ workshopID }: { workshopID: number }) {
    const { workshop } = useWorkshop({ id: workshopID });

    if (!workshop) {
        return <></>;
    }

    return (
        <div className="">
            <h2 className="text-lg font-bold flex justify-between gap-4">
                Session {workshop.workshop.session}
                <span className="text-highlight-primary">
                    00:00AM - 00:00AM
                </span>
            </h2>
            <p>{workshop.workshop.title}</p>
            <p>
                Location (subject to change): {workshop.location.building}{" "}
                {workshop.location.room_num}
            </p>
            <p>Registered Delegates: {workshop.registrations}</p>
            <br />
            <div>
                <h2>Facilitator Assistant(s)</h2>
                <ul>
                    {workshop.facilitator_assistants?.map((fa) => (
                        <li key={fa.name}>
                            - {fa.name}, {fa.contact}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
