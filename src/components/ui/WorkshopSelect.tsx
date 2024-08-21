import { API_URL } from "@/util/constants";
import { ResponseData, WorkshopData } from "@/util/types";
import { useEffect, useState } from "react";
import Select from "./Select";

interface WorkshopSelectProps {
  id: string;
  session: number;
}

function WorkshopSelect(props: WorkshopSelectProps) {
  const [workshops, setWorkshops] = useState<WorkshopData[]>();

  useEffect(() => {
    fetch(`${API_URL}/workshop/`)
      .then((response) => response.json())
      .then((data) => {
        const formatted_data = data.map(
          (workshop: ResponseData<WorkshopData>) => {
            const formatted = {
              id: workshop.pk,
              title: workshop.fields.title,
              session: workshop.fields.session,
              facilitators: workshop.fields.facilitators,
              location: workshop.fields.location,
            };
            return formatted;
          }
        );

        setWorkshops(
          formatted_data.filter(
            (workshop: WorkshopData) => workshop.session == props.session
          )
        );
      });
  }, [props.session]);

  return workshops ? (
    <Select id={props.id} label={`Session ${props.session} Workshop`} >
      {workshops.map((workshop) => (
        <option className="py-1 px-2" key={workshop.id} value={workshop.id}>
          {workshop.title}
        </option>
      ))}
    </Select>
  ) : (
    <></>
  );
}

export default WorkshopSelect;
