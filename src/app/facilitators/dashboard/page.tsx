"use client";
import Navbar from "@/components/navigation/Navbar";
import InteractiveButton from "@/components/ui/InteractiveButton";
import FacilitatorRegistration from "../components/FacilitatorRegistration";
import { useLogout } from "@/hooks/api/useLogout";
import { useFacilitatorUser } from "@/hooks/api/useFacilitatorUser";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import { useMemo, useState } from "react";
import ForbiddenPage from "@/components/formatting/ForbiddenPage";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useLocations } from "@/hooks/api/useLocations";

export default function FacilitatorDashboard() {
    const { logout } = useLogout();
    const { user, isLoading } = useFacilitatorUser();
    const { workshops } = useWorkshops();
    const { locations } = useLocations();

    const facilitatedSessions = useMemo(() => {
        if (!user || !workshops) {
            return [];
        }

        const result: { title: string; session: number }[] = [];

        user.workshops.forEach((facilitatorWorkshop) => {
            const workshop = workshops.find(
                (workshop) => facilitatorWorkshop.workshop === workshop.id
            );

            if (workshop) {
                result.push({
                    title: workshop.title,
                    session: workshop.session,
                });
            }
        });

        return result;
    }, [user, workshops]);

    const facilitatorRegistrations = useMemo(() => {
        if (!user || !workshops) {
            return [];
        }

        const result: {
            facilitator_name: string;
            workshop: number;
            session: number;
        }[] = [];

        user.registrations.forEach((registration) => {
            const workshop = workshops.find(
                (workshop) => registration.workshop === workshop.id
            );

            if (workshop) {
                result.push({
                    facilitator_name: registration.facilitator_name,
                    workshop: workshop.id,
                    session: workshop.session,
                });
            }
        });

        return result;
    }, [user, workshops]);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="my-2 w-fit mx-auto">
                    <LoadingCircle />
                </div>
            </>
        );
    }

    if (!user) {
        return <ForbiddenPage />;
    }

    return (
        // <div className="bg-gradient-to-tl from-background-primary to-emerald-900">
        <>
            <Navbar />
            <div className="w-9/12 mx-auto flex flex-col items-left gap-10">
                <div className="flex flex-col md:flex-row md:justify-between gap-2">
                    <h1 className="text-4xl font-bold">
                        {user.facilitator.department_name}
                    </h1>
                    <div className="w-fit text-background-primary">
                        <InteractiveButton text="Log Out" onClick={logout} />
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-bold w-full border-b-2 pb-2 border-highlight-primary">
                        Your Workshops
                    </h1>
                    <br />
                    <div className="flex flex-col gap-6">
                        {user.workshops.map((facilitatorWorkshop) => {
                            const workshopData = workshops?.find(
                                (workshop) =>
                                    workshop.id === facilitatorWorkshop.workshop
                            );

                            const locationData = locations?.find(
                                (location) =>
                                    location.id === workshopData?.location
                            );

                            if (workshopData) {
                                return (
                                    <div className="">
                                        <h2 className="text-lg font-bold flex justify-between gap-4">
                                            Session {workshopData.session}
                                            <span className="text-highlight-primary">
                                                00:00AM - 00:00AM
                                            </span>
                                        </h2>
                                        <p>{workshopData.title}</p>
                                        <p>
                                            Location (subject to change):{" "}
                                            {locationData
                                                ? `${locationData.building} ${locationData.room_num}`
                                                : "TBD"}
                                        </p>
                                        <p>Registered Delegates: NAN</p>
                                        <br />
                                        <p>Facilitator Assistant: NAME</p>
                                        <p className="text-highlight-primary">000-000-0000</p>
                                    </div>
                                );
                            }

                            return <></>;
                        })}
                    </div>
                </div>

                <FacilitatorRegistration
                    facilitators={user.facilitator.facilitator_names}
                    facilitatedSessions={facilitatedSessions}
                    registrations={facilitatorRegistrations}
                />
            </div>
        </>
    );
}
