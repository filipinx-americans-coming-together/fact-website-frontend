import SearchableSelect from "./SearchableSelect";
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
        schools &&
        schools.length > 0 && (
            <SearchableSelect
                id={id}
                label="School"
                setState={setState}
                defaultValue={schools[0].id}
                required={required}
                options={schools.map((school) => {
                    return { label: school.name, value: school.id };
                })}
                placeholder="Search for schools..."
            />
        )
    );
}

export default SchoolSelect;
