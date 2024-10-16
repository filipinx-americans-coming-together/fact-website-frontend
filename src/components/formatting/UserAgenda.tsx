import LoadingCircle from "../icons/LoadingCircle";
import AgendaWorkshop from "./AgendaWorkshop";
import { useUser } from "@/hooks/api/useUser";
/**
 * Agenda for individual user
 * @param id id of user
 * @returns UserAgenda component
 */
function UserAgenda() {
    const { user } = useUser();

    return (
        <>
            {user ? (
                <>
                    <div className="text-center">
                        <div className="text-3xl font-bold">My Agenda</div>
                        <button className="underline font-light hover:text-highlight-2-primary my-3">
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
