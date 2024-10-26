import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface OrderVShowTicketsProps {
    email: string;
}

async function fetchOrderTickets(props: OrderVShowTicketsProps): Promise<void> {
    // request
    // TODO placeholder so that it will always succeed
    // replace with actual endpoint/args when backend is done
    const response = await fetch(`${API_URL}/workshop/`, {
        // credentials: "include",
        method: "GET",
        // body: JSON.stringify(props),
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        throw new Error(message);
    }
}

export function useOrderVShowTickets() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: orderTickets,
        isSuccess,
    } = useMutation({
        mutationFn: (props: OrderVShowTicketsProps) => {
            return fetchOrderTickets(props);
        },
    });

    console.log("isSuccess", isSuccess);

    return { data, error, isPending, orderTickets, isSuccess };
}
