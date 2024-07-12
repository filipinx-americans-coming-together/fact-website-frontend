import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import WorkshopCard from "@/components/WorkshopCard";

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="flex justify-evenly sm: flex-col sm:text-center md:flex-row md:text-left">
                <div>
                    <div>
                        <div className="font-bold text-xl my-2">
                            Welcome, First name
                        </div>
                        <div className="my-1">First name Last name</div>
                        <div className="my-1">Some other info</div>
                    </div>
                    <div className="text-center my-6">

                    <Button text="EDIT PROFILE" url="/profile" />
                    </div>
                    <div className="flex flex-col justify-center items-center bg-text-primary px-2 py-4 my-4">
                        <WorkshopCard
                            session="1"
                            title="Workshop Name"
                            start="00:00AM"
                            end="00:00AM"
                            location="Building Room #"
                        />
                        <WorkshopCard
                            session="2"
                            title="Workshop Name"
                            start="00:00AM"
                            end="00:00AM"
                            location="Building Room #"
                        />
                        <WorkshopCard
                            session="3"
                            title="Workshop Name"
                            start="00:00AM"
                            end="00:00AM"
                            location="Building Room #"
                        />
                    </div>
                    <div className="text-center my-6">
                        <Button text="UPDATE WORKSHOPS" url="/workshops" />
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <div className="text-3xl font-bold">My Agenda</div>
                        <button className="underline font-light hover:text-highlight-2-primary my-3">Download</button>
                    </div>
                    <div>
                        <div className="font-bold text-xl my-2">Friday, Month Day</div>
                        <div className="my-4">
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                        <div className="my-4">
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                        <div className="font-bold text-xl my-2">Saturday, Month Day</div>
                        <div className="my-4">
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                        <div className="my-4">
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                        <div>
                            <div>Event Name</div>
                            <div>00:00AM - 00:00AM</div>
                            <div>Building Name #</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
