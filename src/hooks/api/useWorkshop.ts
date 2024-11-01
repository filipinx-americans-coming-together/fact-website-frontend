import { API_URL } from "@/util/constants";
import {
    FacilitatorData,
    LocationData,
    ResponseData,
    WorkshopData,
    WorkshopResponse,
} from "@/util/types";
import { useQuery } from "@tanstack/react-query";

async function fetchWorkshop({ id }: { id: number }): Promise<{
    workshop: WorkshopData;
    location: LocationData;
    facilitator: FacilitatorData;
    registrations: number;
    facilitator_assistants?: { name: string; contact: string }[];
}> {
    const response = await fetch(`${API_URL}/registration/workshops/${id}`, {
        credentials: "include",
    });

    let json;

    try {
        json = await response.json();
    } catch {
        throw new Error("Server error, please try again later");
    }

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message && response.status !== 500) {
            message = json.message;
        }

        throw new Error(message);
    }

    const workshopData = json.workshop[0];

    const formattedWorkshop: WorkshopData = {
        id: workshopData.pk,
        title: workshopData.fields.title,
        description: workshopData.fields.description,
        facilitators: workshopData.fields.facilitators,
        location: workshopData.fields.location,
        session: workshopData.fields.session,
    };

    // Format location data
    const locationData = json.location[0];

    const formattedLocation: LocationData = {
        id: locationData.pk,
        room_num: locationData.fields.room_num,
        building: locationData.fields.building,
        capacity: locationData.fields.capacity,
        session: locationData.fields.session,
    };

    const facilitatorData = json.facilitator[0];

    const formattedFacilitator: FacilitatorData = {
        id: facilitatorData.pk,
        userId: facilitatorData.fields.user,
        fa_name: facilitatorData.fields.fa_name,
        fa_contact: facilitatorData.fields.fa_contact,
        department_name: facilitatorData.fields.department_name,
        position: facilitatorData.fields.position,
        facilitators: facilitatorData.fields.facilitators,
        image_url: facilitatorData.fields.image_url,
        bio: facilitatorData.fields.bio,
        attending_networking_session: facilitatorData.fields.attending_networking_session,
    };

    const formattedAssistants = json.facilitator_assistants?.map(
        (fa: ResponseData<{ name: string; contact: string }>) => {
            return { name: fa.fields.name, contact: fa.fields.contact };
        }
    );

    return {
        workshop: formattedWorkshop,
        location: formattedLocation,
        facilitator: formattedFacilitator,
        registrations: json.registrations,
        facilitator_assistants: formattedAssistants,
    };
}

export function useWorkshop({ id }: { id: number }): {
    workshop:
        | {
              workshop: WorkshopData;
              location: LocationData;
              facilitator: FacilitatorData;
              registrations: number;
              facilitator_assistants?: { name: string; contact: string }[];
          }
        | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: workshop,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["workshops", id],
        queryFn: () => fetchWorkshop({ id: id }),
        retry: 0,
    });

    return { workshop, isLoading, error };
}