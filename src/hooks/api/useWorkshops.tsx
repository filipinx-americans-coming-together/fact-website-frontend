import { API_URL } from "@/util/constants";
import { ResponseData, WorkshopData } from "@/util/types";
import { useQuery } from "@tanstack/react-query";

async function fetchWorkshops(): Promise<WorkshopData[]> {
    const response = await fetch(`${API_URL}/workshop/`);

    const json: ResponseData<WorkshopData>[] = await response.json();

    if (!response.ok) {
        let message = "Server Error";

        throw new Error(message);
    }

    const formatted_data = json.map((workshop: ResponseData<WorkshopData>) => {
        const formatted = {
            id: workshop.pk,
            title: workshop.fields.title,
            description: workshop.fields.description,
            session: workshop.fields.session,
            facilitators: workshop.fields.facilitators,
            location: workshop.fields.location,
        };

        return formatted;
    });

    return formatted_data;
}

export function useWorkshops(): {
    workshops: WorkshopData[] | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: workshops,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["workshops"],
        queryFn: () => fetchWorkshops(),
        retry: 0,
    });

    return { workshops, isLoading, error };
}
