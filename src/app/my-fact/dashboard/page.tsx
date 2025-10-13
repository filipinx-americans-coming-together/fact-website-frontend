"use client";

import UserAgenda from "@/components/formatting/UserAgenda";
import WorkshopCard from "@/components/formatting/WorkshopCard";
import LoadingCircle from "@/components/icons/LoadingCircle";
import Navbar from "@/components/navigation/Navbar";
import InteractiveButton from "@/components/ui/InteractiveButton";
import LinkButton from "@/components/ui/LinkButton";
import { useLogout } from "@/hooks/api/useLogout";
import NotificationsManager from "@/components/ui/NotificationManager";
import { useNotifications } from "@/hooks/api/useNotifications";
import { useUser } from "@/hooks/api/useUser";
import { useRegistrationFlag } from "@/hooks/api/useRegistrationFlag";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RegPageContainer from "@/components/formatting/RegPageContainer";

export default function Dashboard() {
    const { user, isLoading, error } = useUser();
    const { logout, isSuccess, isPending: logoutLoading } = useLogout();
    const { notifications } = useNotifications();
    const { flag } = useRegistrationFlag("workshop-changes");
    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            router.push("/admin/dashboard");
        }

        if (error) {
            router.push("/my-fact/login");
        }
    }, [isSuccess, error]);

    return (
        <div>
        <RegPageContainer>
            {user ?
            <>
            {notifications && (
                <NotificationsManager
                    notifications={notifications.map(
                        (notification) => notification.message
                    )}
                />
            )}
            <div className="w-9/12 flex justify-evenly flex-col gap-10 md:gap-16 md:flex-row text-left mx-auto">
                <div>
                    {/* user info */}
                    <div>
                         <div className="font-bold text-xl my-2">
                            Welcome, {user.user.first_name} {user.user.last_name}
                        </div>
                    </div>
                    <div className="text-center my-6">
                        <LinkButton
                            text="EDIT PROFILE"
                            url="/my-fact/profile"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center px-2 py-4 my-4">
                        {user?.registration ? (
                            <>
                            {user.registration.map((pair) => (
                                <WorkshopCard
                                    key={pair.workshop}
                                    id={pair.workshop}
                                />
                            ))}
                            {flag?.value ? (
                                <div className="text-center my-6">
                                    <LinkButton
                                        text="UPDATE WORKSHOPS"
                                        url="/my-fact/workshops"
                                    />
                                </div>
                            ) : (
                                <div className="text-center my-6 text-xs">
                                    Workshop changes are not available at this time.
                                </div>
                            )}
                            </>
                        ) : (
                            <>
                            <div>Thank you for creating an account! You have not yet registered for FACT 2025.</div>
                            <LinkButton text="REGISTER NOW" url="/my-fact/register"/>
                            </>
                        )}
                    </div>
                    
                </div>
                {user.registration && <UserAgenda/>}
            </div>
            <br />
            <br />
            <div className="mx-auto mb-6 w-fit text-background-primary">
                <InteractiveButton
                    text="Log out"
                    onClick={() => {
                        logout();
                        router.push("/");
                    }}
                />
            </div> </> : <div className="w-fit mx-auto"><LoadingCircle/></div> }
        </RegPageContainer> 
        </div>
    );
}
