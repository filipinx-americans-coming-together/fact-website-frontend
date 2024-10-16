import { API_URL } from "@/util/constants";
import { ResponseData, SchoolData, WorkshopData } from "@/util/types";
import { useQuery } from "@tanstack/react-query";

async function fetchSchools(): Promise<SchoolData[]> {
    const response = await fetch(`${API_URL}/schools/`);

    const json: ResponseData<SchoolData>[] = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        throw new Error(message);
    }

    let formatted_data = json.map((school: ResponseData<SchoolData>) => {
        return { id: school.pk, name: school.fields.name };
    });

    return formatted_data;
}

export function useSchools(): {
    schools: SchoolData[] | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: schools,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["schools"],
        queryFn: () => fetchSchools(),
        retry: 0,
    });

    return { schools, isLoading, error };
}
