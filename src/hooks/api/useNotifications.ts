import { API_URL } from "@/util/constants";
import { NotificationData, ResponseData } from "@/util/types";
import { useQuery } from "@tanstack/react-query";

async function fetchNotifications(): Promise<NotificationData[]> {
    const response = await fetch(`${API_URL}/fact-admin/notifications`);

    const json = await response.json();

    if (!response.ok) {
        let message = "Server error, please try again later";

        if (json.message) {
            message = json.message;
        }

        throw new Error(message);
    }

    const formatted_data = json.map(
        (
            notification: ResponseData<{ message: string; expiration: string }>
        ) => {
            const formatted = {
                message: notification.fields.message,
                expiration: new Date(
                    Date.parse(notification.fields.expiration)
                ),
            };

            return formatted;
        }
    );

    return formatted_data;
}

export function useNotifications(): {
    notifications: NotificationData[] | undefined;
    isLoading: boolean;
    error: Error | null;
} {
    const {
        data: notifications,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["notifications"],
        queryFn: () => fetchNotifications(),
        retry: 0,
    });

    return { notifications, isLoading, error };
}
