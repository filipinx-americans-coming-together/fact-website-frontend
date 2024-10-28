import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchDeleteAgendaItem(id: number): Promise<void> {
    // request
    const response = await fetch(`${API_URL}/fact-admin/agenda-item/${id}/`, {
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

export function useDeleteAgendaItem() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: deleteAgendaItem,
        isSuccess,
    } = useMutation({
        mutationFn: (props: { id: number }) => {
            return fetchDeleteAgendaItem(props.id);
        },

        onSuccess: () =>
            queryClient.refetchQueries({
                queryKey: ["agenda"],
                type: "active",
            }),
    });

    return { data, error, isPending, deleteAgendaItem, isSuccess };
}
