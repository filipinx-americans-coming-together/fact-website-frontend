"use client";

import TextInput from "@/components/ui/TextInput";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import DateTimeInput from "../components/DateTimeInput";

export default function Agenda() {
    const [agendaData, setAgendaData] = useState<Object>({
        title: "",
        location: "",
        start: new Date(),
        end: new Date(),
    });

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
            <div className="w-9/12 mx-auto">
                <h1>Agenda</h1>

                <label>Upload file</label>
                <input
                    type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                />
                <br />

                <div className="rounded bg-gray-300 p-6 w-fit">
                    <FormContainer
                        formName="newAgendaItem"
                        submitText="Save"
                        onSubmit={() => {}}
                        errorMessage={undefined}
                        isLoading={false}
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                                label="Start Time"
                                id="start"
                                setState={setAgendaData}
                            />
                        </div>
                    </FormContainer>
                </div>
            </div>
        </div>
    );
}
