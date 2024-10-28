import { API_URL } from "@/util/constants";
import { useMutation } from "@tanstack/react-query";

async function fetchResetPassword(
    password: string,
    token: string
): Promise<void> {
    // request
    const response = await fetch(
        `${API_URL}/registration/users/reset-password/`,
        {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({ password: password, token: token }),
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

export function useResetPassword() {
    const {
        data,
        error,
        isPending,
        mutate: resetPassword,
        isSuccess,
    } = useMutation({
        mutationFn: ({
            password,
            token,
        }: {
            password: string;
            token: string;
        }) => {
            return fetchResetPassword(password, token);
        },
    });

    return { data, error, isPending, resetPassword, isSuccess };
}
