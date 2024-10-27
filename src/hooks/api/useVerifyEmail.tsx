import { API_URL } from "@/util/constants";
import { useMutation } from "@tanstack/react-query";

async function fetchVerifyEmail(email: string, code: string): Promise<void> {
    console.log(email, code);
    // request
    const response = await fetch(`${API_URL}/verification/verify/`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ email: email, code: code }),
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }
}

export function useVerifyEmail() {
    const {
        data,
        error,
        isPending,
        mutate: verifyEmail,
        isSuccess,
    } = useMutation({
        mutationFn: ({ email, code }: { email: string; code: string }) => {
            return fetchVerifyEmail(email, code);
        },
    });

    console.log("isSuccess", isSuccess);

    return { data, error, isPending, verifyEmail, isSuccess };
}
