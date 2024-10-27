import { API_URL } from "@/util/constants";
import { useMutation } from "@tanstack/react-query";

async function fetchRequestEmailVerification(email: string): Promise<void> {
    // request
    const response = await fetch(`${API_URL}/verification/request/`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
            email: email,
            email_subject: "FACT One-Time Verification Code",
        }),
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

export function useRequestEmailVerification() {
    const {
        data,
        error,
        isPending,
        mutate: requestVerification,
        isSuccess,
    } = useMutation({
        mutationFn: ({ email }: { email: string }) => {
            return fetchRequestEmailVerification(email);
        },
    });

    console.log("isSuccess", isSuccess);

    return { data, error, isPending, requestVerification, isSuccess };
}
