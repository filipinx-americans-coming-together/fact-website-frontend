"use client";
import PageContainer from "@/components/formatting/PageContainer";
import { useAgendaItems } from "@/hooks/api/useAgendaItems";
import { AgendaItemData } from "@/util/types";
import Link from "next/link";
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
            <div className="flex flex-row gap-8 justify-between flex-wrap-reverse lg:flex-nowrap">
                <div className="flex flex-col gap-4 w-fit">
                    <div className="flex flex-row justify-start border-b-2 w-fit">
                        {[FRIDAY, SATURDAY].map((day) => (
                            <div
                                className={
                                    "px-4 py-3 rounded-t-lg cursor-pointer w-fit" +
                                    (day == activeTab
                                        ? " bg-text-primary text-background-primary"
                                        : "")
                                }
                                key={day}
                                onClick={() => setActiveTab(day)}
                            >
                                <div className="text-xl sm:text-3xl lg:text-4xl font-bold">
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
                                <div
                                    key={item.id}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="uppercase font-bold text-xl sm:text-3xl lg:text-4xl">
                                        {item.title}
                                    </div>
                                    <div className="text-m sm:text-xl lg:text-2xl">
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
                                    <div className="text-m sm:text-xl lg:text-2xl text-highlight-primary">
                                        {item.building != "nan" &&
                                            item.building}{" "}
                                        {item.room_num != "nan" &&
                                            item.room_num}
                                        {item.building === "nan" &&
                                            item.room_num === "nan" &&
                                            "Locations vary"}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="bg-highlight-secondary rounded-lg px-6 sm:px-8 py-6 h-fit lg:shrink-0 lg:w-1/3">
                    <div className="font-bold uppercase text-2xl md:text-3xl mb-8">
                        New to FACT 2024!
                    </div>
                    <div className="mb-4 md:text-xl">
                        <span className="font-bold uppercase underline">
                            Delegate day
                        </span>{" "}
                        is the first event of the two day conference where
                        delegates from many different schools can socialize
                        before the main event kicks off! Delegates can connect
                        with each other by playing sports such as basketball and
                        volleyball or by teaming up for fun activities like
                        relay races!
                    </div>
                    <div className="mb-4 md:text-xl">
                        Do you want to speak with facilitators and panelists
                        one-on-one? FACT&apos;s{" "}
                        <span className="font-bold uppercase underline">
                            networking session
                        </span>{" "}
                        gives delegates the unique opportunity to connect with
                        facilitators and panelists in an intimate setting. If
                        you were unable to attend a specific facilitator&apos;s
                        workshop but wanted to, this session provides an ideal
                        chance to speak with them. Delegates are welcome to
                        explore beyond their original career panels. Please note
                        that some facilitators/panelists are unable to
                        participate. You can find which facilitators/panelists
                        are participating{" "}
                        <Link
                            href="/workshops"
                            className="underline font-semibold"
                        >
                            here
                        </Link>
                        .
                    </div>
					<div className="md:text-xl"> For <span className="font-bold uppercase underline">day-of updates</span>, sign up for reminders via the Remind app by texting @fact2024 to 81080!
						</div>
                </div>
            </div>
            {/* <div className="w-fit m-auto">
                <LinkButton text="REGISTER NOW" url="/register" />
            </div> */}
        </PageContainer>
    );
}
