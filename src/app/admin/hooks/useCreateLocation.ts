import { API_URL } from "@/util/constants";
import { LocationData } from "@/util/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface LocationProps {
    building: string | undefined;
    room_num: string | undefined;
    capacity: number | undefined;
    session: number | undefined;
}

async function fetchCreateLocation(
    props: LocationProps
): Promise<LocationData> {
    // request
	console.log(props.session)
    const response = await fetch(`${API_URL}/registration/locations/`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(
            props
        ),
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message && response.status !== 500) {
            message = json.message;
        }
        
        throw new Error(message);
    }

    const formatted = {
        id: json[0].pk,
        room_num: json[0].fields.room_num,
        building: json[0].fields.building,
        capacity: json[0].fields.capacity,
        session: json[0].fields.session,
    };

    return formatted;
}

export function useCreateLocation() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: createLocation,
        isSuccess,
    } = useMutation({
        mutationFn: (props: LocationProps) => {
            return fetchCreateLocation(props);
        },

        onSuccess: (data) =>
            queryClient.refetchQueries({
                queryKey: ["location", data.id],
                type: "active",
            }),
    });

    return { data, error, isPending, createLocation, isSuccess };
}