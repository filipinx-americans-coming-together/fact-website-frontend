import { WorkshopData } from "@/util/types";
import Select from "./Select";
import { useWorkshops } from "@/hooks/api/useWorkshops";

interface WorkshopSelectProps {
    id: string;
    session: number;
    setState: (state: Object) => void;
}

/**
 * Workshop selection menu
 * @param id html id for select
 * @param session session number
 * @param setState function to call on input change
 * @returns WorkshopSelect component
 */
function WorkshopSelect(props: WorkshopSelectProps) {
    const { workshops } = useWorkshops();

    return (
        workshops && (
            <Select
                id={props.id}
                label={`Session ${props.session} Workshop`}
                setState={props.setState}
                defaultValue={
                    workshops.filter(
                        (workshop: WorkshopData) =>
                            workshop.session == props.session
                    )[0].id
                }
            >
                {workshops
                    .filter(
                        (workshop: WorkshopData) =>
                            workshop.session == props.session
                    )
                    .map((workshop) => {
                        console.log("setting workshop value", workshop.id);
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
