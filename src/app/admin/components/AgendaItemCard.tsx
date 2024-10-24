function addLeadingZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}


export default function AgendaItemCard({
    title,
    location,
    start,
    end,
}: {
    title: string;
    location: string;
    start: string;
    end: string;
}) {
    return (
        <div className="w-full flex flex-col md:flex-row gap-8 bg-slate-50 px-6 py-4 rounded shadow justify-between">
            <div className="text-left">
                <div>{title}</div>
                <div>{location}</div>
            </div>
            <div className="text-right">
                <div>
                    Start: {addLeadingZero(new Date(start).getHours())}:
                    {addLeadingZero(new Date(start).getMinutes())} CST
                </div>
                <div>
                    End: {addLeadingZero(new Date(end).getHours())}:
                    {addLeadingZero(new Date(end).getMinutes())} CST
                </div>
            </div>
        </div>
    );
}
