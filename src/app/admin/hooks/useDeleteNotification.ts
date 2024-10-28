import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchDeleteNotification(id: number): Promise<void> {
    // request
    const response = await fetch(`${API_URL}/fact-admin/notification/${id}/`, {
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

export function useDeleteNotification() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: deleteNotification,
        isSuccess,
    } = useMutation({
        mutationFn: (props: { id: number }) => {
            return fetchDeleteNotification(props.id);
        },

        onSuccess: () =>
            queryClient.refetchQueries({
                queryKey: ["notifications"],
                type: "active",
            }),
    });

    return { data, error, isPending, deleteNotification, isSuccess };
}
