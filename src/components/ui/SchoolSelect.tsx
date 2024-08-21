import { API_URL } from "@/util/constants";
import { ResponseData, SchoolData } from "@/util/types";
import { useEffect, useState } from "react";
import Select from "./Select";

interface SchoolSelectProps {
  id: string;
}

/**
 * School selection menu
 * @param id for select for component
 * @returns SchoolSelect component
 */
function SchoolSelect(props: SchoolSelectProps) {
  const [schools, setSchools] = useState<SchoolData[]>();

  useEffect(() => {
    fetch(`${API_URL}/schools/`)
      .then((response) => response.json())
      .then((data) => {
        const formatted_data = data.map((school: ResponseData<SchoolData>) => {
          return { id: school.pk, name: school.fields.name };
        });

        setSchools(formatted_data);
      });
  }, []);

  return schools ? (
    <Select id={props.id} label="School">
      {schools.map((school) => (
        <option className="py-1 px-2" key={school.id} value={school.id}>
          {school.name}
        </option>
      ))}
    </Select>
  ) : (
    <></>
  );
}

export default SchoolSelect;
