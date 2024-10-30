"use client";

import { useRouter } from "next/navigation";
import PageContainer from "@/components/formatting/PageContainer";
import Footer from "@/components/formatting/PageFooter";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useWorkshop } from "@/hooks/api/useWorkshop";

function extractWorkshopId(slug: string) {
    const parts = slug.split("-");
    const idPart = parts[parts.length - 1];
    return parseInt(idPart, 10);
}

export default function WorkshopDetail({
    params,
}: {
    params: { slug: string };
}) {
    const token = params.slug
    const workshopId = extractWorkshopId(token);
    const router = useRouter();

    const { workshop, isLoading, error } = useWorkshop({
        id: workshopId ?? 0,
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <LoadingCircle />
            </div>
        );
    }

    if (error || !workshop) {
        return (
            <p className="flex items-center justify-center h-screen text-red-600">
                Error loading workshop. Please try again later.
            </p>
        );
    }

    const { title, description, facilitators, session } = workshop.workshop;
    const { building, room_num, capacity } = workshop.location;

    return (
        <PageContainer title="Workshop">
            <div className="flex flex-col items-center w-full mx-auto 
                            p-4 md:p-8 rounded bg-highlight-secondary">
                {/** Workshop Title and Description */}
                <h1 className="text-3xl font-bold text-center p-2 md:p-4">{title}</h1>
                <p className="text-lg text-center px-2 py-12">{description}</p>

                {/** Workshop and Location Details */}
                <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-6 space-y-4 md:space-y-0 text-center">
                    {/** Workshop Details */}
                    <div className="flex-1 flex flex-col space-y-2 border-2 rounded p-4">
                        <h2 className="text-xl font-semibold">Details</h2>
                        <p>Session: {session}</p>
                        <p>Facilitators: {facilitators}</p>
                    </div>

                    {/** Location Details */}
                    <div className="flex-1 flex flex-col space-y-2 border-2 rounded p-4">
                        <h2 className="text-xl font-semibold">Location</h2>
                        <p>Building: {building}</p>
                        <p>Room: {room_num}</p>
                        <p>Capacity: {capacity}</p>
                    </div>
                </div>
            </div>

            {/** Back Button */}
            <div className="flex justify-center mt-8 px-4">
                <button
                    onClick={() => router.back()}
                    className="w-full md:w-auto px-4 py-2 bg-highlight-secondary 
                               text-white rounded-md hover:bg-highlight-primary 
                               transition duration-500"
                >
                    &larr; Back
                </button>
            </div>
            <Footer />
        </PageContainer>
    );
}