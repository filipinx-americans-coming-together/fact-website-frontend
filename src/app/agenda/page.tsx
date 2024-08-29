"use client";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/formatting/PageHeader";
import LinkButton from "@/components/ui/LinkButton";
import { useState } from "react";

const agendaData = [
    {
        day: "Friday mm/dd",
        info: [
            {
                id: "0",
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
                id: "1",
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
        ],
    },
    {
        day: "Saturday mm/dd",
        info: [
            {
                id: "0",
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
                id: "1",
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
                id: "2",
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
                id: "3",
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
        ],
    },
];

export default function Agenda() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <Navbar />
            <PageHeader text="Agenda" />
            <div className="w-2/4 mx-auto mb-4">
                <div className="flex flex-row justify-start">
                    {agendaData.map((item, index) => (
                        <div
                            className={
                                "px-4 py-3 rounded-t-lg cursor-pointer" +
                                (index == activeTab
                                    ? " bg-text-primary text-background-primary"
                                    : "")
                            }
                            key={item.day}
                            onClick={() => setActiveTab(index)}
                        >
                            <div className="sm:text-3xl lg:text-4xl font-bold">
                                {item.day}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t-2 p-2">
                    {agendaData[activeTab].info.map((item) => (
                        <div className="mb-4 text-xl" key={item.id}>
                            <div className="font-bold">{item.event}</div>
                            <div>{item.time}</div>
                            <div>{item.location}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-fit m-auto">
                <LinkButton text="REGISTER NOW" url="/register" />
            </div>
        </>
    );
}
