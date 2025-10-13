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
import { GiGClef } from "react-icons/gi";

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
            )} {user.registration ? <div className="bg-[rgba(240,240,240,0.3)] py-8 px-12 rounded-xl min-w-9/12 w-fit flex justify-evenly flex-col text-left mx-auto gap-10 md:gap-16">
                <div className="font-bold text-4xl my-2 flex items-center">
                            Welcome, {user.user.first_name} {user.user.last_name} <span className="text-5xl"><GiGClef /></span>
                        </div>
                <div className="flex justify-between flex-col lg:flex-row">
                <div className="flex flex-col">
                
                        <div className="text-center my-6">
                        <LinkButton
                            text="EDIT PROFILE"
                            url="/my-fact/profile"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center px-2 py-4 my-4 gap-2 md:gap-3">
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
                            
                        
                    </div>
                    </div>
                    <UserAgenda/>
                    </div>
                    <div className="mx-auto my-6 w-fit text-background-primary">
                <InteractiveButton
                    text="Log out"
                    onClick={() => {
                        logout();
                        router.push("/");
                    }}
                />
            </div>
            </div> : <div className="bg-[rgba(240,240,240,0.25)] py-8 px-12 rounded-xl w-fit mx-auto flex flex-col justify-around gap-3 lg:gap-5">
                <div className="font-bold text-xl my-2 flex items-center">
                            Welcome, {user.user.first_name} {user.user.last_name} <span className="text-2xl"><GiGClef /></span>
                        </div>
                <div className="text-center">Thank you for creating an account! You have not yet registered for FACT 2025.</div>
                            <br/>
                            <LinkButton text="REGISTER NOW" url="/my-fact/register"/>
                </div>}</> : <div className="w-fit mx-auto"><LoadingCircle/></div>}
        </RegPageContainer> 
        </div>
    );
}
