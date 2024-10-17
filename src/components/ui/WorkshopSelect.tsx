import { WorkshopData } from "@/util/types";
import Select from "./Select";
import { useWorkshops } from "@/hooks/api/useWorkshops";

interface WorkshopSelectProps {
    id: string;
    session: number;
    setState: (state: Object) => void;
    required?: boolean;
}

/**
 * Workshop selection menu
 * @param id html id for select
 * @param session session number
 * @param setState function to call on input change
 * @returns WorkshopSelect component
 */
function WorkshopSelect({
    id,
    session,
    setState,
    required = true,
}: WorkshopSelectProps) {
    const { workshops } = useWorkshops();
    
    return (
        workshops && (
            <Select
                id={id}
                label={`Session ${session} Workshop`}
                setState={setState}
                defaultValue={
                    workshops.filter(
                        (workshop: WorkshopData) => workshop.session == session
                    )[0].id
                }
                required={required}
            >
                {workshops
                    .filter(
                        (workshop: WorkshopData) => workshop.session == session
                    )
                    .map((workshop) => {
                        return (
                            <option
                                className="py-1 px-2"
                                key={workshop.id}
                                value={workshop.id}
                            >
                                {workshop.title}
                            </option>
                        );
                    })}
            </Select>
        )
    );
}

export default WorkshopSelect;
