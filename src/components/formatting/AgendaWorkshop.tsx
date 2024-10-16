import LoadingCircle from "../icons/LoadingCircle";
import { useWorkshop } from "@/hooks/api/useWorkshop";

interface AgendaWorkshop {
    id: number;
}

/**
 * Workshop information for dashboard agenda
 * @param id id of workshop
 * @returns AgendaWorkshop component
 */
export default function AgendaWorkshop(props: AgendaWorkshop) {
    const { workshop } = useWorkshop({ id: props.id });

    return (
        <>
            {workshop ? (
                <div>
                    <div>
                        Session {workshop.workshop.session}:{" "}
                        {workshop.workshop.title}
                    </div>
                    <div>00:00AM - 00:00AM</div>
                    <div>
                        {workshop.location.building}{" "}
                        {workshop.location.room_num}
                    </div>
                </div>
            ) : (
                <LoadingCircle />
            )}
        </>
    );
}
