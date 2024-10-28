import { FaTrashCan } from "react-icons/fa6";
import AgendaItemCard from "./AgendaItemCard";
import { AgendaItemData } from "@/util/types";

export default function AgendaList({
    displayItems,
    allItems,
    setState,
}: {
    displayItems: AgendaItemData[];
    allItems: AgendaItemData[];
    setState(state: AgendaItemData[]): void;
}) {
    return (
        <div className="flex flex-col gap-4">
            {displayItems.map((item, idx) => {
                return (
                    <div
                        key={item.title + item.start_time + idx}
                        className="flex gap-4 justify-between"
                    >
                        <AgendaItemCard
                            title={item.title}
                            building={item.building ? item.building : ""}
                            roomNum={item.room_num ? item.room_num : ""}
                            start={item.start_time.toLocaleString()}
                            end={item.end_time.toLocaleString()}
                        />
                        <button
                            className="w-fit hover:text-slate-700"
                            type="button"
                            onClick={() => {
                                const confirmation = confirm(
                                    "Are you sure you want to delete this agenda item?"
                                );

                                if (confirmation) {
                                    setState(
                                        allItems.filter((other, idx) => {
                                            return other.id !== item.id;
                                        })
                                    );
                                }
                            }}
                        >
                            <FaTrashCan />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
