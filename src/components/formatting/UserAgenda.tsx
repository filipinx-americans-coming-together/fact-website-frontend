import jsPDF from "jspdf";
import LoadingCircle from "../icons/LoadingCircle";
import AgendaWorkshop from "./AgendaWorkshop";
import { useUser } from "@/hooks/api/useUser";
import { useWorkshops } from "@/hooks/api/useWorkshops";
import { useLocations } from "@/hooks/api/useLocations";

/**
 * Agenda for individual user
 * @param id id of user
 * @returns UserAgenda component
 */
function UserAgenda() {
    const { user } = useUser();
    const { workshops } = useWorkshops();
    const { locations } = useLocations();

    function downloadAgendaPDF() {
        if (!user) return;
        const pdf = new jsPDF("p", "mm", "a4", true);

        const textLines = [
            `${user.user.first_name}'s FACT 2024 Agenda`,
            "",
            "Friday, December 6",
        ];

        // friday schedule
        for (let i = 0; i < 2; i++) {
            textLines.push("    Event Name");
            textLines.push("    00:00AM - 00:00AM");
            textLines.push("    Building Name #");
            textLines.push("");
        }

        // saturday schedule
        textLines.push("Saturday, December 7");

        textLines.push("    Event Name");
        textLines.push("    00:00AM - 00:00AM");
        textLines.push("    Building Name #");
        textLines.push("");

        // workshops
        for (let i = 0; i < user.registration.length; i++) {
            if (!workshops || !locations) break;
            const workshop = workshops.find(
                (workshop) => workshop.id === user.registration[i].workshop
            );
            const location = locations.find(
                (location) => location.id === workshop?.location
            );

            textLines.push(`    Session ${i + 1}: ${workshop?.title}`);
            textLines.push("    00:00AM - 00:00AM");
            textLines.push(`    ${location?.building} ${location?.room_num}`);
            textLines.push("");
        }

        textLines.push("    Event Name");
        textLines.push("    00:00AM - 00:00AM");
        textLines.push("    Building Name #");
        textLines.push("");

        pdf.text(textLines, 8, 8);
        pdf.save("my-fact-agenda.pdf");
    }

    return (
        <>
            {user ? (
                <>
                    <div className="text-center">
                        <div className="text-3xl font-bold">My Agenda</div>
                        <br />
                        <button
                            className="underline font-light hover:text-highlight-2-primary my-3"
                            onClick={downloadAgendaPDF}
                        >
                            Download
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-bold text-xl my-2">
                            Friday, Month Day
                        </div>
                        <div>
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                        <div>
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                        <div className="font-bold text-xl my-2">
                            Saturday, Month Day
                        </div>
                        {user.registration.map((pair) => (
                            <AgendaWorkshop
                                key={pair.workshop}
                                id={pair.workshop}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <LoadingCircle />
            )}
        </>
    );
}

export default UserAgenda;
