import { FaTrashCan } from "react-icons/fa6";
import FormContainer from "./FormContainer";
import TextInput from "@/components/ui/TextInput";
import DateTimeInput from "./DateTimeInput";
import NotificationCard from "./NotificationCard";
import { useNotifications } from "@/hooks/api/useNotifications";

export default function NotificationManager() {
    const { notifications } = useNotifications();
    // const { createNotification } = useCreateNotification();
    // const { deleteNotification } = useDeleteNotification();

    return (
        <div className="rounded bg-gray-300 p-6 w-fit">
            <FormContainer
                formName="notifications"
                onSubmit={() => {}}
                submitText="Save"
                isLoading={false}
                errorMessage={undefined}
            >
                <div className="flex flex-col gap-2 justify-between md:flex-row">
                    <TextInput
                        label="Message"
                        id="message"
                        setState={() => {}}
                        maxLength={180}
                        showCharacters
                    />
                    <DateTimeInput
                        label="Expiration"
                        id="expiration"
                        setState={() => {}}
                    />
                </div>
            </FormContainer>
            <br />

            <h2>Active Notifications</h2>
            <br />
            <div className="flex flex-col gap-4">
                {notifications &&
                    notifications.map((notification, idx) => (
                        <div key={idx} className="flex gap-4">
                            <NotificationCard
                                text={notification.message}
                                expiration={notification.expiration.toDateString()}
                            />
                            <button
                                className="w-fit hover:text-slate-700"
                                type="button"
                                onClick={() => {
                                    confirm(
                                        "Are you sure you want to delete this notification? This action can not be undone."
                                    );
                                }}
                            >
                                <FaTrashCan />
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}
