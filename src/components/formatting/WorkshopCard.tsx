import { API_URL } from "@/util/constants";
import { LocationData, WorkshopData, WorkshopResponse } from "@/util/types";
import { useEffect, useState } from "react";
import LoadingCircle from "../icons/LoadingCircle";
import { useWorkshop } from "@/hooks/api/useWorkshop";

interface WorkshopProps {
    id: number;
}

/**
 * Card for individual workshop
 * @param id workshop
 * @returns WorkshopCard component
 */
export default function WorkshopCard(props: WorkshopProps) {
    // const { workshop } = useWorkshop({ id: props.id });
    const workshop: WorkshopData = {id: 1, title: "Workshop 1", session: 1, description: "blah baladsjf lasdhlf jalskd flkjsldk fjlkjlong description yeah", location:1, facilitators:null}
    const location: {building: string, room_num: number} = {building: "building 1", room_num:1}

    return (
        <>
            {workshop ? (
                <div className="bg-[rgba(250,250,250,0.3)] text-black text-xs px-8 py-4 m-4 rounded-md w-80 shadow-lg">
                    <div>Session {workshop.session}</div>
                    <div className="text-center">
                        <div>{workshop.title}</div>
                        <div>
                            {workshop.session === 1 ? "10:00 AM - 11:10 AM" :
                            workshop.session === 2 ? "11:20 AM - 12:30 PM" :
                            workshop.session === 3 ? "1:50 PM - 3:00 PM" :
                            "Time TBD"}
                        </div>
                        <div>
                            {location.building}{" "}
                            {location.room_num}
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingCircle />
            )}
        </>
    );
}
