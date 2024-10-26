import { API_URL } from "@/util/constants";
import { ResponseData } from "@/util/types";
import { useQuery } from "@tanstack/react-query";

async function fetchUser(): Promise<{ username: string }> {
    const response = await fetch(`${API_URL}/fact-admin/`, {
        credentials: "include",
    });
    const json: ResponseData<{ username: string }>[] = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        throw new Error(message);
    }

    // user data
    return { username: json[0].fields.username };
}

export function useAdminUser(): {
    user: { username: string } | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: user,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["active-user"],
        queryFn: () => fetchUser(),
        retry: 0,
    });

    return { user, isLoading, error };
}
