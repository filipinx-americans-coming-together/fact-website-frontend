import { API_URL } from "@/util/constants";
import { ResponseData, SchoolData, WorkshopData } from "@/util/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function fetchUploadSchools(file: File): Promise<SchoolData[]> {
    const formData = new FormData();
    formData.append("schools", file);

    // request
    const response = await fetch(`${API_URL}/registration/schools/bulk/`, {
        credentials: "include",
        method: "POST",
        body: formData,
    });

    const json = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }

    const formatted_data = json.map((school: ResponseData<SchoolData>) => {
        const formatted = {
            name: school.fields.name,
        };

        return formatted;
    });

    return formatted_data;
}

export function useUploadSchools() {
    const queryClient = useQueryClient();

    const {
        data,
        error,
        isPending,
        mutate: uploadSchools,
        isSuccess,
    } = useMutation({
        mutationFn: ({ file }: { file: File }) => {
            return fetchUploadSchools(file);
        },

        onSuccess: (data) => queryClient.setQueryData(["workshops"], data),
    });

    console.log("isSuccess", isSuccess);

    return { data, error, isPending, uploadSchools, isSuccess };
}
