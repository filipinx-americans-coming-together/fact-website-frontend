import { API_URL } from "@/util/constants";
import fetchWithCredentials from "@/util/fetchWithCredentials";
import { useMutation } from "@tanstack/react-query";

async function fetchRequestEmailVerification(email: string): Promise<void> {
    // request
    const response = await fetchWithCredentials({
        url: `${API_URL}/verifications/request/`,
        method: "POST",
        body: JSON.stringify({
            email: email,
            email_subject: "FACT One-Time Verification Code",
        }),
    });

    let json;

    try {
        json = await response.json();
    } catch {
        throw new Error("Server error, please try again later");
    }

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message && response.status !== 500) {
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
