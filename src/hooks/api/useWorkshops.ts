import { API_URL } from "@/util/constants";
import { ResponseData, WorkshopData } from "@/util/types";
import { useQueries, useQuery } from "@tanstack/react-query";

async function fetchWorkshops(): Promise<WorkshopData[]> {
    const response = await fetch(`${API_URL}/registration/workshop/`);

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

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

// async function fetchRegistrationCount(): Promise<{ registrations: number }> {
//     // json format num_registrations: number
// }

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

    // const counts = useQueries({
    //     queries:
    //         workshops && workshops.length > 0
    //             ? workshops.map((workshop) => {
    //                   return {
    //                       queryKey: ["registration-counts", workshop.id],
    //                       queryFn: () => fetchRegistrationCount(workshop.id),
    //                   };
    //               })
    //             : [],
    //     combine: (results: any[]) => {
    //         return {
    //             data: results.map((result) => result.data),
    //             isLoading: results.some((result) => result.isLoading),
    //             isError: results.some((result) => result.isError),
    //         };
    //     },
    // });

    // combine results
    // if (workshops && counts) {
    //     for (let i = 0; i < workshops.length; i++) {
    //         workshops[i].registrationCount = counts.data[i];
    //     }
    // }

    return { workshops, isLoading, error };
}
