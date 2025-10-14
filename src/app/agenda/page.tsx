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

const SATURDAY = "Saturday, November 15";
const FRIDAY = "Friday, November 14";
const SUNDAY = "Sunday, November 16";


type props = {
    day: string,
    formattedData: FormattedData[]
}
const DisplayDay = ({day, formattedData}: props) => {return(<>
            {formattedData
                            .filter((item) => item.day === day)
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
                                    <div className="text-m sm:text-xl lg:text-2xl text-highlight-2-secondary">
                                        {item.building != "nan" &&
                                            item.building}{" "}
                                        {item.room_num != "nan" &&
                                            item.room_num}
                                    </div>
                                    <br/>
                                </div>
                            ))}
        </>)};


export default function Agenda() {
    const currentDate = new Date().toLocaleDateString("en-US", DATE_OPTIONS);

    const { agendaItems } = useAgendaItems();
    const [activeTab, setActiveTab] = useState(
        currentDate === SUNDAY ? SUNDAY : (SATURDAY ? SATURDAY : FRIDAY)
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
        <PageContainer title="Agenda" background="bg-gradient mask-(--background-image-blurry-3) mask-size-[1400px] mask-top">
            <div className="flex justify-around w-full">
                <div className="flex flex-col justify-around gap-5 w-1/3">
                    <div className="p-10 bg-[rgb(250,250,250,0.4)] rounded-4xl flex flex-col gap-6">
                    <div className="text-3xl font-bold bg-[rgb(250,250,250,0.3)] border-slate-700 border-1 shadow-xl rounded-xl px-6 py-4 uppercase w-fit self-center">{FRIDAY}</div>
                    <DisplayDay day={FRIDAY} formattedData={formattedData}/>
                    </div>
                    <div className="p-10 bg-[rgb(250,250,250,0.4)] rounded-4xl flex flex-col gap-6">
                    <div className="text-3xl font-bold bg-[rgb(250,250,250,0.3)] border-slate-700 border-1 shadow-xl rounded-xl px-6 py-4 uppercase w-fit self-center">{SUNDAY}</div>
                    <DisplayDay day={SUNDAY} formattedData={formattedData}/>
                    </div>
                    </div>
                
                <div className="flex flex-col p-10 bg-[rgb(250,250,250,0.4)] rounded-4xl w-1/2 gap-6">
                    <div className="text-3xl font-bold bg-[rgb(250,250,250,0.3)] border-slate-700 border-1 shadow-xl rounded-xl px-6 py-4 uppercase w-fit self-center">{SATURDAY}</div>
                    <DisplayDay day={SATURDAY} formattedData={formattedData}/>
                </div>
            
            </div>
            
            {/* <div className="w-fit m-auto">
                <LinkButton text="REGISTER NOW" url="/register" />
            </div> */}
        </PageContainer>
    );
}
