import { API_URL } from "@/util/constants";
import { useQuery } from "@tanstack/react-query";

async function fetchRegistrationPermission({
    label,
}: {
    label: string;
}): Promise<{
    label: string;
    value: boolean;
}> {
    const response = await fetch(`${API_URL}/fact-admin/permissions/${label}/`);

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }

    return {
        label: json[0].fields.label,
        value: json[0].fields.value,
    };
}

export function useRegistrationPermission(label: string): {
    permission: { label: string; value: boolean } | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: permission,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["permission", label],
        queryFn: () => fetchRegistrationPermission({ label: label }),
    });

    return { permission, isLoading, error };
}
