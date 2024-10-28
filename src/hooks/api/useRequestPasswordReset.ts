import { API_URL } from "@/util/constants";
import { useMutation } from "@tanstack/react-query";

async function fetchRequestPasswordReset(email: string): Promise<void> {
    // request
    const response = await fetch(
        `${API_URL}/registration/users/request-reset-password/`,
        {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({ email: email }),
        }
    );

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }
}

export function useRequestPasswordReset() {
    const {
        data,
        error,
        isPending,
        mutate: requestPasswordReset,
        isSuccess,
    } = useMutation({
        mutationFn: ({ email }: { email: string }) => {
            return fetchRequestPasswordReset(email);
        },
    });

    return { data, error, isPending, requestPasswordReset, isSuccess };
}
