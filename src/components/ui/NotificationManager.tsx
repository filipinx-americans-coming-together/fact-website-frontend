"use client";

import Notification from "./Notification";
import { useState } from "react";

export default function NotificationsManager({
    notifications,
}: {
    notifications: string[];
}) {
    const [currNotif, setCurrNotif] = useState(0);

    function handleCloseNotif() {
        setCurrNotif(currNotif + 1);
    }

    if (notifications.length < 1) {
        return <></>;
    }

    return (
        <>
            {currNotif < notifications.length && (
                <Notification
                    text={notifications[currNotif]}
                    setClose={handleCloseNotif}
                />
            )}
        </>
    );
}
