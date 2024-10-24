"use client";

import TextInput from "@/components/ui/TextInput";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import DateTimeInput from "../components/DateTimeInput";
import Button from "../components/Button";
import AgendaList from "../components/AgendaList";

export interface AgendaItem {
    title: string;
    location: string;
    start: string;
    end: string;
}

export default function Agenda() {
    const [agendaData, setAgendaData] = useState<Object>({
        title: "",
        location: "",
        start: "",
        end: "",
    });

    // TODO default to agenda items from DB
    const [allAgendaItems, setAllAgendaItems] = useState<AgendaItem[]>([]);

    // PLACEHOLDER
    const isLoggedIn = true;

    if (!isLoggedIn) {
        return (
            <>
                <p>You are not permitted to view this page.</p>
                <a className="underline hover:text-highlight-primary" href="/">
                    Return home
                </a>
            </>
        );
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
                                agendaData as AgendaItem,
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
                        displayItems={allAgendaItems
                            .filter((item) => {
                                const asDate = new Date(item.start);
                                return asDate.getDay() === 5;
                            })
                            .sort((a, b) => {
                                const startA = new Date(a.start);
                                const startB = new Date(b.start);
                                return startA.getTime() - startB.getTime();
                            })}
                        allItems={allAgendaItems}
                        setState={setAllAgendaItems}
                    />

                    <br />
                    <br />
                    <h1 className="text-left">Saturday, December 7</h1>
                    <br />
                    <AgendaList
                        displayItems={allAgendaItems
                            .filter((item) => {
                                const asDate = new Date(item.start);
                                return asDate.getDay() === 6;
                            })
                            .sort((a, b) => {
                                const startA = new Date(a.start);
                                const startB = new Date(b.start);
                                return startA.getTime() - startB.getTime();
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
