"use client";
import TextInput from "@/components/ui/TextInput";
import FormContainer from "./components/FormContainer";
import NotificationCard from "./components/NotificationCard";
import { FaTrashCan } from "react-icons/fa6";

const NOTIFICATION_PLACEHOLDER = [
    {
        text: "Notification example text for notification card",
        expiration: "October 22, 2024 at 12:45PM",
    },
    {
        text: "Notification example text for notification card",
        expiration: "October 22, 2024 at 12:45PM",
    },
    {
        text: "Notification example text for notification card",
        expiration: "October 22, 2024 at 12:45PM",
    },
];

export default function Admin() {
    // TODO placeholder
    const isLoggedIn = true;

    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

    // dashboard
    if (isLoggedIn) {
        return (
            <div className="min-h-screen bg-slate-50 text-black">
                <div className="w-9/12 mx-auto">
                    {/* stats */}
                    <h1 className="text-xl font-bold">FACT at a glance</h1>

                    {/* notifications */}
                    <h1 className="text-xl font-bold">Notifications</h1>
                    <div className="rounded bg-gray-300 py-4 px-6 w-fit">
                        <FormContainer
                            formName="notifications"
                            onSubmit={() => {}}
                            submitText="Save"
                            isLoading={false}
                            errorMessage={undefined}
                        >
                            <div className="flex flex-col gap-2 md:flex-row">
                                <div className="flex flex-col">
                                    <TextInput
                                        label="Message"
                                        id="message"
                                        setState={() => {}}
                                        maxLength={180}
                                        showCharacters
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label>
                                        Expiration{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        className="py-1 px-2 rounded border w-full min-w-48"
                                        type="datetime-local"
                                        required
                                    />
                                    <p className="text-xs text-right text-gray-500">
                                        {timeZone} Time
                                    </p>
                                </div>
                            </div>
                        </FormContainer>
                        <br />

                        <h2>Active Notifications</h2>
                        <br />
                        <div className="flex flex-col gap-4">
                            {NOTIFICATION_PLACEHOLDER.map(
                                (notification, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <NotificationCard
                                            text={notification.text}
                                            expiration={notification.expiration}
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
                                )
                            )}
                        </div>
                    </div>

                    {/* danger zone */}
                    <h1 className="text-xl font-bold text-red-600">
                        Danger Zone
                    </h1>
                </div>
            </div>
        );
    }

    // login
    return <></>;
}
