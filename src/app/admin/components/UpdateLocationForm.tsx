import FormContainer from "./FormContainer";
import { LocationData } from "@/util/types";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import { useUpdateLocation } from "../hooks/useUpdateLocation";
import { useState } from "react";

function getLocationByID(locations: LocationData[] | undefined, id: number) {
    return locations && locations.find((loc) => loc.id === id);
}

export default function UpdateLocationForm({
    locations,
}: {
    locations: LocationData[] | undefined;
}) {
    const {
        updateLocation,
        error: updateError,
        isPending: updatePending,
    } = useUpdateLocation();
    const [updateLocationData, setUpdateLocationData] = useState<Object>({
        id: 0,
        room_num: "",
        building: "",
        capacity: 0,
        session: 0,
    });

    return (
        <FormContainer
            formName="updateLocationItem"
            submitText="Update"
            onSubmit={() => {
                updateLocation(updateLocationData as LocationData);
            }}
            isLoading={updatePending}
            errorMessage={updateError?.message}
        >
            <Select
                label=""
                id="id"
                setState={setUpdateLocationData}
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <TextInput
                    label="Building"
                    id="building"
                    setState={setUpdateLocationData}
                    required={false}
                    placeholder={
                        getLocationByID(
                            locations,
                            (updateLocationData as LocationData).id
                        )?.building
                    }
                />
                <TextInput
                    label="Room"
                    id="room_num"
                    setState={setUpdateLocationData}
                    required={false}
                    placeholder={
                        getLocationByID(
                            locations,
                            (updateLocationData as LocationData).id
                        )?.room_num
                    }
                />
                <TextInput
                    label="Capacity"
                    id="capacity"
                    setState={setUpdateLocationData}
                    required={false}
                    placeholder={getLocationByID(
                        locations,
                        (updateLocationData as LocationData).id
                    )?.capacity.toString()}
                />
                <Select
                    label="Session"
                    id="session"
                    setState={setUpdateLocationData}
                    required={false}
                    defaultValue={getLocationByID(
                        locations,
                        (updateLocationData as LocationData).id
                    )?.session.toString()}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </Select>
            </div>
        </FormContainer>
    );
}
