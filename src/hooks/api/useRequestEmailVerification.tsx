import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface RequestEmailVerificationProps {
    email: string;
}

async function fetchRequestEmailVerification(
    props: RequestEmailVerificationProps
): Promise<void> {
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

export function useRequestEmailVerification() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: requestVerification,
        isSuccess,
    } = useMutation({
        mutationFn: (props: RequestEmailVerificationProps) => {
            return fetchRequestEmailVerification(props);
        },
    });

    console.log("isSuccess", isSuccess);

    return { data, error, isPending, requestVerification, isSuccess };
}
