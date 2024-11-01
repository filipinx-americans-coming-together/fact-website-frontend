"use client";

import { useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/formatting/PageContainer";
import Footer from "@/components/formatting/PageFooter";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useWorkshops } from "@/hooks/api/useWorkshops";

export default function Workshops() {
    const { workshops } = useWorkshops();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSession, setSelectedSession] = useState("");

    const filteredWorkshops =
        workshops?.filter((workshop) => {
            const matchesSearch = workshop.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            const matchesSession = (selectedSession === "") || (workshop.session === parseInt(selectedSession));

            return matchesSearch && matchesSession;
        });

    const hasFilteredWorkshops = (filteredWorkshops ?? []).length > 0;

    return (
        <PageContainer title="Workshops">
            <div className="flex flex-col items-center px-4">
                {/** Search and Filter Functionality */}
                <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4 mb-8 w-full max-w-2xl">
                    {/** Search Input */}
                    <input
                        type="text"
                        placeholder="Search workshops..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-2 border-highlight-primary bg-background-primary p-3 rounded-md
                                focus:outline-none hover:border-highlight-2-primary transition duration-300 mb-4 md:mb-0"
                    />

                    {/** Session Filter */}
                    <select
                        value={selectedSession}
                        onChange={(e) => setSelectedSession(e.target.value)}
                        className="w-full md:w-1/3 border-2 border-highlight-secondary 
                                bg-background-primary p-3 rounded-md hover:border-highlight-2-primary
                                focus:outline-none transition duration-300 font-semibold font-sans"
                    >
                        <option value="">All Sessions</option>
                        <option value="1">Session 1</option>
                        <option value="2">Session 2</option>
                        <option value="3">Session 3</option>
                    </select>
                </div>
                {/** Workshop Display */}
                {!workshops ? (
                    <LoadingCircle />
                ) : hasFilteredWorkshops ? (
                    <div>
                        {filteredWorkshops?.map((workshop) => {
                            const workshopURL = `${workshop.title.toLowerCase().replace(/\s+/g, "-")}-${workshop.id}`;

                            return (
                                <Link key={workshop.id} href={`/workshops/${encodeURIComponent(workshopURL)}`}>
                                    <div
                                        className="bg-highlight-secondary p-8 m-8 rounded 
                                                cursor-pointer hover:bg-highlight-primary 
                                                transition-all duration-500 ease-in-out"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="text-xl font-bold mr-4">{workshop.title}</h2>
                                            <div className="text-right">
                                                <h3 className="text-lg font-bold">
                                                    Session {workshop.session}
                                                </h3>
                                            </div>
                                        </div>
                                        <p>{workshop.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <p>No workshops found.</p>
                )}
            </div>
            <Footer />
        </PageContainer>
    );
}