interface WorkshopItem {
    title: string;
    description: string;
    facilitators: string[];
    location: string;
    session: number;
}

export default function FacilitatedWorkshopCard({workshops} : WorkshopItem[]) {
    return(
        <>
            <h1 className="font-bold text-xl">Workshop Information</h1>
            <div className="rounded p-6 flex flex-col gap-4 bg-text-primary text-background-primary">

            </div>
        </>
    );
}