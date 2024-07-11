interface WorkshopProps {
    session: string;
    title: string;
    start: string;
    end: string;
    location: string;
}

export default function WorkshopCard({
    session,
    title,
    start,
    end,
    location,
}: WorkshopProps) {
    return (
        <div className="bg-highlight-secondary text-black text-xs px-8 py-4 m-4 rounded-md w-80 shadow-lg">
            <div>Session {session}</div>
            <div className="text-center">
                <div>{title}</div>
                <div>
                    {start} - {end}
                </div>
                <div>{location}</div>
            </div>
        </div>
    );
}
