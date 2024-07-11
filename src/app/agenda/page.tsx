"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { useState } from "react";

const agendaData = [
    {
        day: "Friday mm/dd",
        info: [
            {
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
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
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
                event: "Event Name",
                time: "00:00AM - 00:00 AM",
                location: "Building Name #",
            },
            {
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
            <div className="text-center p-10 border-b-2 m-10">
                <div className="font-bold sm:text-4xl lg:text-6xl">AGENDA</div>
            </div>
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
                        <div className="mb-4 text-xl">
                            <div className="font-bold">{item.event}</div>
                            <div>{item.time}</div>
                            <div>{item.location}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-fit m-auto">
                <Button text="REGISTER NOW" url="/" />
            </div>
        </>
    );
}
