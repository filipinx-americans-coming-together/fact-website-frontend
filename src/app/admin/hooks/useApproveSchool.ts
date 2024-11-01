import { API_URL } from "@/util/constants";
import { SchoolData } from "@/util/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchApproveSchool(props: {
    other_school: string;
    approved_name: string;
}): Promise<SchoolData> {
    // request
    const response = await fetch(`${API_URL}/registration/new-schools/`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(props),
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }

    const formatted = {
        id: json[0].pk,
        name: json[0].fields.name,
    };

    return formatted;
}

export function useApproveSchool() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: approveSchool,
        isSuccess,
    } = useMutation({
        mutationFn: (props: {
            other_school: string;
            approved_name: string;
        }) => {
            return fetchApproveSchool(props);
        },

        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ["new-schools"],
                type: "active",
            });

            queryClient.refetchQueries({
                queryKey: ["schools"],
                type: "active",
            });
        },
    });

    return { data, error, isPending, approveSchool, isSuccess };
}
