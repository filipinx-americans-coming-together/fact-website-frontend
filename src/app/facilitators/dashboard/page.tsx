"use client";
import Navbar from "@/components/navigation/Navbar";
import InteractiveButton from "@/components/ui/InteractiveButton";
import FacilitatorRegistration from "../components/FacilitatorRegistration";
import { useLogout } from "@/hooks/api/useLogout";

export default function FacilitatorDashboard() {
    const { logout } = useLogout();
    // PLACEHOLDERs FOR REQUESTS
    const facilitatorData = {
        facilitatorName: "Facilitator",
        individualFacilitators: [
            "Facilitator 1",
            "Facilitator 3",
            "Facilitator 4",
            "Facilitator 5",
        ],
        imgURL: "https://www.psauiuc.org/wp-content/uploads/2023/09/About-Kayak-Trip-1.jpeg",
        bios: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed blandit dui. Nam dolor dolor, vulputate sed justo a, efficitur auctor nisi. Donec neque elit, sagittis vel semper ac, ultrices at neque. Nunc semper neque eu viverra fringilla. Donec pharetra mi lorem. Pellentesque rutrum purus quam, in consequat mi imperdiet ut. Nulla molestie purus tristique tortor convallis hendrerit quis a tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sem massa, fermentum id consectetur a, hendrerit sollicitudin est.",
        ],
        workshops: [
            {
                title: "Workshop 1 Title",
                description: "Workshop 1 Description",
                session: 2,
            },
        ],
    };

    const facilitatedSessions = facilitatorData.workshops.map(
        (workshop) => workshop.session
    );

    const panelists = [
        "Facilitator 3",
        "Facilitator 4",
        "Facilitator 10",
        "Facilitator 15",
    ];

    if (facilitatorData) {
        return (
            <>
                <Navbar />
                <div className="w-9/12 mx-auto">
                    <div className="my-8"></div>
                    <FacilitatorRegistration
                        facilitators={facilitatorData.individualFacilitators}
                        facilitatedSessions={facilitatedSessions}
                    />
                </div>

                <br />
                <div className="flex items-center justify-center text-background-primary">
                    <InteractiveButton text="Log Out" onClick={logout} />
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <p>You do not have permission to view this page.</p>
        </>
    );
}
