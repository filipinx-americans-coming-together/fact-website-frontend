import { API_URL } from "@/util/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchUpdatePermission(
    label: string,
    value: boolean
): Promise<{ label: string; value: boolean }> {
    // request
    const response = await fetch(
        `${API_URL}/fact-admin/permissions/${label}/`,
        {
            credentials: "include",
            method: "PUT",
            body: JSON.stringify({
                value: value,
            }),
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

    return {
        label: json[0].fields.label,
        value: json[0].fields.value,
    };
}

export function useUpdatePermission() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: updatePermission,
        isSuccess,
    } = useMutation({
        mutationFn: (props: { label: string; value: boolean }) => {
            return fetchUpdatePermission(props.label, props.value);
        },

        onSuccess: (data) =>
            queryClient.setQueryData(["permissions", data.label], data),
    });

    return { data, error, isPending, updatePermission, isSuccess };
}
