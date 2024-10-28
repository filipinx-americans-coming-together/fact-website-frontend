"use client";

import TextInput from "@/components/ui/TextInput";
import FormContainer from "../components/FormContainer";
import DateTimeInput from "../components/DateTimeInput";
import AgendaList from "../components/AgendaList";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useAdminUser } from "@/hooks/api/useAdminUser";
import ForbiddenPage from "@/components/formatting/ForbiddenPage";
import { useAgendaItems } from "../hooks/useAgendaItems";
import { useState } from "react";
import Select from "@/components/ui/Select";

export default function Agenda() {
    const { user, isLoading } = useAdminUser();
    const { agendaItems } = useAgendaItems();

    const [formData, setFormData] = useState<Object>({
        title: "",
        building: "",
        room_num: "",
        start_time: "",
        end_time: "",
        session_num: "",
    });

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
                        onSubmit={() => {}}
                        errorMessage={undefined}
                        isLoading={false}
                    >
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <TextInput
                                label="Title"
                                id="title"
                                setState={setFormData}
                            />
                            <Select
                                label="Session"
                                id="session"
                                setState={setFormData}
                            >
                                <option value="">N/A</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Select>
                            <TextInput
                                label="Building"
                                id="building"
                                setState={setFormData}
                            />
                            <TextInput
                                label="Room Number"
                                id="room_num"
                                setState={setFormData}
                            />
                            <DateTimeInput
                                label="Start Time"
                                id="start_time"
                                setState={setFormData}
                            />
                            <DateTimeInput
                                label="End Time"
                                id="end_time"
                                setState={setFormData}
                            />
                        </div>
                    </FormContainer>
                    <br />
                    {/* TODO assumes agenda is only friday/saturday rn */}
                    <h1 className="text-left">Friday, December 6</h1>
                    <br />
                    <AgendaList
                        displayItems={
                            agendaItems
                                ? agendaItems.filter((item) => {
                                      const asDate = item.start_time;
                                      return asDate.getDay() === 5;
                                  })
                                : []
                        }
                    />

                    <br />
                    <br />
                    <h1 className="text-left">Saturday, December 7</h1>
                    <br />
                    <AgendaList
                        displayItems={
                            agendaItems
                                ? agendaItems.filter((item) => {
                                      const asDate = item.start_time;
                                      return asDate.getDay() === 6;
                                  })
                                : []
                        }
                    />
                </div>
            </div>
        </div>
    );
}
