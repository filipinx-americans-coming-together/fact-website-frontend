import Button from "@/components/Button";
import WorkshopCard from "@/components/WorkshopCard";

export default function Admin() {
    return(
        <>
            <div className="bg-gradient-to-tr from-highlight-secondary to-background-primary h-screen flex flex-col">
                <div className="font-bold sm:text-4xl lg:text-6xl m-10 pb-4 w-fit border-b-4">FACT Admin Dashboard</div>
                <div className="flex flex-row justify-evenly my-8">
                    <div className="flex flex-col">
                        <Button text="Update Individual Workshop" url="/" /> 
                        <Button text="Upload Workshops" url="/" /> 
                        <Button text="Upload Locations" url="/" /> 
                    </div>
                    <div className="flex flex-col justify-evenly items-center bg-text-primary py-4 px-2">
                        <div className="font-bold text-black text-2xl">STATS</div>
                        <WorkshopCard
                            session="1"
                            title="Workshop Name"
                            start="00:00AM"
                            end="00:00AM"
                            location="Building Room #"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="w-fit border-b-2 sm:text-2xl lg:3xl font-bold"><a href="/">Return to Homepage</a></div>
                </div>
            </div>
        </>
    )
}