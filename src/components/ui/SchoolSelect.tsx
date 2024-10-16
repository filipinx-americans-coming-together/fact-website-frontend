import Select from "./Select";
import { useSchools } from "@/hooks/api/useSchools";

interface SchoolSelectProps {
    id: string;
    setState: (state: Object) => void;
}

/**
 * School selection menu
 * @param id for select for component
 * @param setState function to call on input change
 * @returns SchoolSelect component
 */
function SchoolSelect(props: SchoolSelectProps) {
    const { schools } = useSchools();

    return (
        schools && (
            <Select
                id={props.id}
                label="School"
                setState={props.setState}
                defaultValue={schools[0].id}
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
