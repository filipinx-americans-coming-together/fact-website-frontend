import Select from "./Select";
import { useSchools } from "@/hooks/api/useSchools";

interface SchoolSelectProps {
    id: string;
    setState: (state: Object) => void;
    required?: boolean;
}

/**
 * School selection menu
 * @param id for select for component
 * @param setState function to call on input change
 * @returns SchoolSelect component
 */
function SchoolSelect({ id, setState, required = true }: SchoolSelectProps) {
    const { schools } = useSchools();

    return (
        schools && (
            <Select
                id={id}
                label="School"
                setState={setState}
                defaultValue={schools[0].id}
                required={required}
            >
                {schools.map((school) => (
                    <option
                        className="py-1 px-2"
                        key={school.id}
                        value={school.id}
                    >
                        {school.name}
                    </option>
                ))}
            </Select>
        )
    );
}

export default SchoolSelect;
