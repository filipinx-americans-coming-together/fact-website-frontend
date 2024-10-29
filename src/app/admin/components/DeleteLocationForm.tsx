import { useState } from "react";
import { useDeleteLocation } from "../hooks/useDeleteLocation";
import FormContainer from "./FormContainer";
import Select from "@/components/ui/Select";
import { LocationData } from "@/util/types";

interface IndexObject {
    idx: number;
}

export default function DeleteLocationForm({
    locations,
}: {
    locations: LocationData[] | undefined;
}) {
    const {
        deleteLocation,
        error: deleteError,
        isPending: deletePending,
    } = useDeleteLocation();
    const [deleteLocationIdx, setDeleteLocationIdx] = useState<Object>({
        idx: 0,
    });
    return (
        <FormContainer
            formName="deleteLocationItem"
            submitText="Delete"
            onSubmit={() => {
                deleteLocation({ id: (deleteLocationIdx as IndexObject).idx });
            }}
            isLoading={false}
            errorMessage={undefined}
        >
            <Select
                label=""
                id="idx"
                setState={setDeleteLocationIdx}
                required={false}
            >
                {locations?.map((locationItem, index) => (
                    <option key={locationItem.id} value={locationItem.id}>
                        {locationItem.building +
                            " " +
                            locationItem.room_num +
                            " - Session " +
                            locationItem.session +
                            " (Capacity: " +
                            locationItem.capacity +
                            ")"}
                    </option>
                ))}
            </Select>
        </FormContainer>
    );
}
