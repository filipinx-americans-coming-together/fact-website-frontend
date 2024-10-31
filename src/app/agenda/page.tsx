"use client";
import PageContainer from "@/components/formatting/PageContainer";
import { useAgendaItems } from "@/hooks/api/useAgendaItems";
import { AgendaItemData } from "@/util/types";
import { useMemo, useState } from "react";

interface FormattedData extends AgendaItemData {
    day: string;
}

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "America/Chicago",
};

const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Chicago",
};

const SATURDAY = "Saturday, December 7";
const FRIDAY = "Friday, December 6";

export default function Agenda() {
    const currentDate = new Date().toLocaleDateString("en-US", DATE_OPTIONS);

    const { agendaItems } = useAgendaItems();
    const [activeTab, setActiveTab] = useState(
        currentDate === SATURDAY ? SATURDAY : FRIDAY
    );

    const formattedData: FormattedData[] = useMemo(() => {
        if (!agendaItems) {
            return [];
        }

        return agendaItems.map((item) => {
            const newItem = item as FormattedData;
            newItem.day = item.start_time.toLocaleDateString(
                "en-US",
                DATE_OPTIONS
            );

            return newItem;
        });
    }, [agendaItems]);

    return (
        <PageContainer title="Agenda">
            <div className="flex flex-row justify-start border-b-2 w-fit">
                {[FRIDAY, SATURDAY].map((day) => (
                    <div
                        className={
                            "px-4 py-3 rounded-t-lg cursor-pointer" +
                            (day == activeTab
                                ? " bg-text-primary text-background-primary"
                                : "")
                        }
                        key={day}
                        onClick={() => setActiveTab(day)}
                    >
                        <div className="sm:text-3xl lg:text-4xl font-bold">
                            {day}
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="flex flex-col gap-14">
                {formattedData
                    .filter((item) => item.day === activeTab)
                    .map((item) => (
                        <div key={item.id} className="flex flex-col gap-2">
                            <div className="uppercase font-bold text-4xl">
                                {item.title}
                            </div>
                            <div className="text-2xl">
                                {item.start_time.toLocaleTimeString(
                                    "en-US",
                                    TIME_OPTIONS
                                )}{" "}
                                -{" "}
                                {item.end_time.toLocaleTimeString(
                                    "en-US",
                                    TIME_OPTIONS
                                )}
                            </div>
                            <div className="text-2xl text-highlight-primary">
                                {item.building != "nan" && item.building}{" "}
                                {item.room_num != "nan" && item.room_num}
                                {item.building === "nan" &&
                                    item.room_num === "nan" &&
                                    "Locations vary"}
                            </div>
                        </div>
                    ))}
            </div>
            {/* <div className="w-fit m-auto">
                <LinkButton text="REGISTER NOW" url="/register" />
            </div> */}
        </PageContainer>
    );
}
