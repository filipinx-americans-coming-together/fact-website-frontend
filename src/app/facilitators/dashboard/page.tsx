"use client";
import Navbar from "@/components/navigation/Navbar";
import InteractiveButton from "@/components/ui/InteractiveButton";
import FacilitatorRegistration from "../components/FacilitatorRegistration";
import { useLogout } from "@/hooks/api/useLogout";
import { useFacilitatorUser } from "@/hooks/api/useFacilitatorUser";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import { useMemo } from "react";
import ForbiddenPage from "@/components/formatting/ForbiddenPage";

export default function FacilitatorDashboard() {
    const { logout } = useLogout();
    const { user, isLoading } = useFacilitatorUser();
    const { workshops } = useWorkshops();

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
        console.log("is loading");
        return <></>;
    }

    if (!user) {
        return <ForbiddenPage />;
    }

    return (
        <>
            <Navbar />
            <div className="w-9/12 mx-auto">
                <div className="my-8"></div>
                <FacilitatorRegistration
                    facilitators={user.facilitator.facilitator_names}
                    facilitatedSessions={facilitatedSessions}
                    registrations={facilitatorRegistrations}
                />
            </div>

            <br />
            <div className="flex items-center justify-center text-background-primary">
                <InteractiveButton text="Log Out" onClick={logout} />
            </div>
        </>
    );
}
