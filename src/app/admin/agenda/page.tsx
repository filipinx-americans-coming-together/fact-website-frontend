"use client";

import TextInput from "@/components/ui/TextInput";
import FormContainer from "../components/FormContainer";
import { useEffect, useState } from "react";
import DateTimeInput from "../components/DateTimeInput";
import Button from "../components/Button";
import AgendaList from "../components/AgendaList";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useAdminUser } from "@/hooks/api/useAdminUser";
import ForbiddenPage from "@/components/formatting/ForbiddenPage";
import { useAgendaItems } from "../hooks/useAgendaItems";
import { AgendaItemData } from "@/util/types";

export default function Agenda() {
    const [agendaData, setAgendaData] = useState<Object>({
        title: "",
        location: "",
        start_time: "",
        end_time: "",
    });

    const { user, isLoading } = useAdminUser();

    const { agendaItems } = useAgendaItems();
    const [allAgendaItems, setAllAgendaItems] = useState<AgendaItemData[]>([]);

    useEffect(() => {
        if (agendaItems) setAllAgendaItems(agendaItems);
    }, [agendaItems]);

    if (isLoading) {
        return (
            <div className="mx-auto w-fit p-4">
                <LoadingCircle />
            </div>
        );
    }

    if (!user) {
        return <ForbiddenPage />;
    }

    return (
        <div className="min-h-screen bg-slate-50 text-black">
            <div className="w-9/12 mx-auto text-center">
                <h1>Agenda</h1>

                <br />

                <div className="mx-auto rounded bg-gray-300 p-6 w-fit">
                    <FormContainer
                        formName="newAgendaItem"
                        submitText="Add"
                        onSubmit={() => {
                            setAllAgendaItems([
                                ...allAgendaItems,
                                agendaData as AgendaItemData,
                            ]);
                        }}
                        errorMessage={undefined}
                        isLoading={false}
                    >
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <TextInput
                                label="Title"
                                id="title"
                                setState={setAgendaData}
                            />
                            <TextInput
                                label="Location"
                                id="location"
                                setState={setAgendaData}
                            />
                            <DateTimeInput
                                label="Start Time"
                                id="start"
                                setState={setAgendaData}
                            />
                            <DateTimeInput
                                label="End Time"
                                id="end"
                                setState={setAgendaData}
                            />
                        </div>
                    </FormContainer>
                    <br />
                    {/* TODO assumes agenda is only friday/saturday rn */}
                    <h1 className="text-left">Friday, December 6</h1>
                    <br />
                    <AgendaList
                        displayItems={allAgendaItems.filter((item) => {
                            const asDate = item.start_time;
                            return asDate.getDay() === 5;
                        })}
                        allItems={allAgendaItems}
                        setState={setAllAgendaItems}
                    />

                    <br />
                    <br />
                    <h1 className="text-left">Saturday, December 7</h1>
                    <br />
                    <AgendaList
                        displayItems={allAgendaItems.filter((item) => {
                            const asDate = item.start_time;
                            return asDate.getDay() === 6;
                        })}
                        allItems={allAgendaItems}
                        setState={setAllAgendaItems}
                    />
                </div>

                <br />
                {/* send to database */}
                <Button
                    text="Approve Changes"
                    onClick={() => {}}
                    isSubmit={false}
                />
            </div>
        </div>
    );
}
