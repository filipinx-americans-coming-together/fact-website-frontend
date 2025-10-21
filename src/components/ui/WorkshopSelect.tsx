import { LocationData, WorkshopData } from "@/util/types";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import SearchableSelect from "./SearchableSelect";
import LoadingCircle from "../icons/LoadingCircle";
import { useLocations } from "@/hooks/api/useLocations";

interface WorkshopSelectProps {
    id: string;
    session: number;
    setState: (state: Object) => void;
    defaultValue?: string;
    required?: boolean;
}

const session_labels = [ "Awareness Workshops", "Personal Growth Workshops", "Professional Skill Workshops" ];

/**
 * Workshop selection menu
 * @param id html id for select
 * @param session session number
 * @param setState function to call on input change
 * @param defaultValue id of workshop to select by default
 * @returns WorkshopSelect component
 */
function WorkshopSelect({
    id,
    session,
    setState,
    defaultValue,
    required = true,
}: WorkshopSelectProps) {
    const { workshops, isLoading, error } = useWorkshops();
    const { locations, isLoading: isLoadingLocs, error: errorLocs } = useLocations();

    return (
        (isLoading || isLoadingLocs) ? (session===2 && <LoadingCircle/>) : 
        workshops &&
        workshops.length > 0 && (
            <SearchableSelect
                id={id}
                label={`Session ${session}: ${session_labels[session-1]}`}
                placeholder="Search for workshops..."
                setState={setState}
                defaultValue={
                    defaultValue
                    ? defaultValue
                    : workshops
                          .filter(
                              (workshop: WorkshopData) =>
                                  workshop.session == session
                          )[0]
                          .id.toString()
                }
                required={required}
                options={workshops
                    .filter(
                        (workshop: WorkshopData) => workshop.session == session
                    )
                    .map((workshop) => {
                        const loc = locations?.filter((location: LocationData) => location.id == workshop.location)[0]
                        return {
                            label: `${workshop.title} ${loc?.capacity ? (workshop.registrationCount >= 0.9*loc.capacity ? (workshop.registrationCount >= loc.capacity ? "(Full)" : "(Low Seats)"): "") : ""}`,
                            value: workshop.id.toString(),
                            disabled: loc?.capacity ? (workshop.registrationCount >= loc.capacity) : false
                        };
                    })}
            />
        )
    );
}

export default WorkshopSelect;
