import { BsPeopleFill } from "react-icons/bs";
import { FaSchool, FaTicket } from "react-icons/fa6";
import RegistrationChart from "./charts/RegistrationChart";
import TicketsChart from "./charts/TicketsChart";

export default function Stats() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded shadow aspect-[4/3] md:w-[240px] flex items-center justify-center">
                    <div className="flex flex-col gap-2">
                        <div className="text-4xl text-green-400">
                            <BsPeopleFill />
                        </div>
                        <p className="text-4xl font-bold">234</p>
                        <p>Registered Delegates</p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded shadow aspect-[4/3] md:w-[240px] flex items-center justify-center">
                    <div className="flex flex-col gap-2">
                        <div className="text-4xl text-rose-400">
                            <FaTicket />
                        </div>
                        <p className="text-4xl font-bold">93</p>
                        <p>Variety Show Tickets</p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded shadow aspect-[4/3] md:w-[240px] flex items-center justify-center">
                    <div className="flex flex-col gap-2">
                        <div className="text-4xl text-blue-400">
                            <FaSchool />
                        </div>
                        <p className="text-4xl font-bold">17</p>
                        <p>Unique Schools</p>
                    </div>
                </div>
            </div>
            <br />
            <RegistrationChart />
            <br />
            <TicketsChart />
        </>
    );
}
