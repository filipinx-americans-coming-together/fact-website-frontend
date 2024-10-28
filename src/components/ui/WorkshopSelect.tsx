import { WorkshopData } from "@/util/types";
import Select from "./Select";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import SearchableSelect from "./SearchableSelect";

interface WorkshopSelectProps {
    id: string;
    session: number;
    setState: (state: Object) => void;
    defaultValue?: string;
    required?: boolean;
}

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
    const { workshops } = useWorkshops();

    return (
        workshops &&
        workshops.length > 0 && (
            <SearchableSelect
                id={id}
                label={`Session ${session} Workshop`}
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
                        return {
                            label: workshop.title,
                            value: workshop.id.toString(),
                        };
                    })}
            />
        )
    );
}

export default WorkshopSelect;
