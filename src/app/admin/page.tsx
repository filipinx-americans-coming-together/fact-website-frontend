import Navbar from "@/components/Navbar";

export default function Admin() {
    return(
        <>
            <div className="bg-gradient-to-tr from-highlight-secondary to-background-primary h-screen flex flex-col">
                <div className="font-bold sm:text-4xl lg:text-6xl m-10 pb-4 w-fit border-b-4">FACT Admin Dashboard</div>
                <div className="flex flex-row">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="w-fit border-b-2 sm:text-2xl lg:3xl font-bold"><a href="/">Return to Homepage</a></div>
                </div>
            </div>
        </>
    )
}