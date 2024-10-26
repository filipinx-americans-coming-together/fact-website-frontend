import WorkshopSelect from "@/components/ui/WorkshopSelect";

const SESSION_NUMBERS = [1, 2, 3];

export default function FacilitatorRow({
    name,
    facilitatedSessions,
}: {
    name: string;
    facilitatedSessions: number[];
}) {
    return (
        <div className="grid grid-cols-1 pb-6 md:pb-2 border-b border-gray-300 md:gap-0 md:grid-cols-4 items-center">
            <div>{name}</div>
            {SESSION_NUMBERS.map((sessionNum) => {
                if (facilitatedSessions.includes(sessionNum)) {
                    return (
                        <div className="md:text-center" key={sessionNum}>
                            Your Workshop
                        </div>
                    );
                } else {
                    return (
                        <div key={sessionNum}>
                            <WorkshopSelect
                                session={sessionNum}
                                id={sessionNum.toString()}
                                setState={() => {}}
                                required={false}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
}
