import { FaTrashCan } from "react-icons/fa6";
import { AgendaItem } from "../agenda/page";
import AgendaItemCard from "./AgendaItemCard";

export default function AgendaList({
    displayItems,
    allItems,
    setState,
}: {
    displayItems: AgendaItem[];
    allItems: AgendaItem[];
    setState(state: AgendaItem[]): void;
}) {
    return (
        <div className="flex flex-col gap-4">
            {displayItems.map((item, idx) => {
                return (
                    <div
                        key={item.title + item.start + idx}
                        className="flex gap-4 justify-between"
                    >
                        <AgendaItemCard
                            title={item.title}
                            location={item.location}
                            start={item.start}
                            end={item.end}
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
                                            return (
                                                other.title !== item.title ||
                                                other.location !==
                                                    item.location ||
                                                other.start !== item.start ||
                                                other.end !== item.end
                                            );
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
