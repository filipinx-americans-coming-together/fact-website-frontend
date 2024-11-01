import { API_URL } from "@/util/constants";
import { useMutation } from "@tanstack/react-query";

async function fetchSetUpAccount(
    email: string,
    password: string,
    token: string
): Promise<void> {
    // request
    const response = await fetch(`${API_URL}/registration/facilitators/set-up/`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            token: token,
        }),
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message && response.status !== 500) {
            message = json.message;
        }
        
        throw new Error(message);
    }
}

export function useSetUpFacilitatorAccount() {
    const {
        data,
        error,
        isPending,
        mutate: setUpAccount,
        isSuccess,
    } = useMutation({
        mutationFn: ({
            email,
            password,
            token,
        }: {
            email: string;
            password: string;
            token: string;
        }) => {
            return fetchSetUpAccount(email, password, token);
        },
    });

    return { data, error, isPending, setUpAccount, isSuccess };
}
