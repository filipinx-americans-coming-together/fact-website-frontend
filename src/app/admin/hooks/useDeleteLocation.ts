import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";


async function fetchDeleteLocation(
    id: number
): Promise<void> {
    // request
	console.log(id)
    const response = await fetch(`${API_URL}/registration/location/${id}/`, {
        credentials: "include",
        method: "DELETE",
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }
}

export function useDeleteLocation() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: deleteLocation,
        isSuccess,
    } = useMutation({
        mutationFn: (props: {id: number}) => {
            return fetchDeleteLocation(props.id);
        },

        onSuccess: () =>
            queryClient.refetchQueries({
                queryKey: ["location"],
                type: "active",
            }),
    });

    return { data, error, isPending, deleteLocation, isSuccess };
}