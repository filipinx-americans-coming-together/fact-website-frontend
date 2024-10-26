import LoadingCircle from "@/components/icons/LoadingCircle";
import Navbar from "@/components/navigation/Navbar";

export default function Refund() {
    // have to login? (have to have registered to request refund)
    return (
        <>
            <div className="h-screen">
                <Navbar/>
                <div className="flex flex-row justify-center">
                    <div className="w-1/2">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJKkUaErvvX76T__wd4Bdr7KUXAEZUcPQiLukB4jGkCr4C_Q/viewform?embedded=true" height="1450" width="100%"><div><LoadingCircle/></div></iframe>
                    </div>
                </div>
            </div>
            
        </>
    );
}