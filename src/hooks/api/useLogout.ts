import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchLogout() {
    const response = await fetch(`${API_URL}/registration/logout/`, {
        credentials: "include",
        method: "POST",
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }
        
        throw new Error(message);
    }

    return json;
}

export function useLogout() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: logout,
        isSuccess,
    } = useMutation({
        mutationFn: () => fetchLogout(),
        onSuccess: () =>
            queryClient.removeQueries({ queryKey: ["active-profile"] }),
    });

    console.log("isSuccess from logout", isSuccess);

    return { data, error, isPending, logout, isSuccess };
}
