import Navbar from "@/components/navigation/Navbar";

export default function Refund() {
    return (
        <>
            <div className="h-screen">
                <Navbar/>
                <div className="flex flex-row justify-center">
                    <div className="w-1/2">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJKkUaErvvX76T__wd4Bdr7KUXAEZUcPQiLukB4jGkCr4C_Q/viewform?embedded=true" height="1450" width="100%"></iframe>
                    </div>
                </div>
            </div>
            
        </>
    );
}