import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Workshops() {
    return (
        <>
            <Navbar />
            <div className="w-4/12 px-20 py-12 bg-text-primary text-black m-auto items-center rounded-lg">
                <div className="text-center mb-6">Register For Workshops</div>
                <form autoComplete="off">
                    <label className="block mt-2">Session 1</label>
                    <select
                        id="session-1"
                        className="block border-solid border-2 mb-2"
                    >
                        <option value="placeholder">Selected Workshop 1</option>
                        <option value="select">Select</option>
                    </select>
                    <label className="block mt-2">Session 2</label>
                    <select
                        id="session-2"
                        className="block border-solid border-2 mb-2"
                    >
                        <option value="placeholder">Selected Workshop 2</option>
                        <option value="select">Select</option>
                    </select>
                    <label className="block mt-2">Session 3</label>
                    <select
                        id="session-2"
                        className="block border-solid border-2 mb-2"
                    >
                        <option value="placeholder">Selected Workshop 3</option>
                        <option value="select">Select</option>
                    </select>
                    <br />
                    <Link
                        href="/dashboard"
                        className="px-4 py-2 me-2 mb-2 mt-8 text-sm rounded-md bg-blue-600 text-text-primary hover:bg-blue-700"
                    >
                        Save Changes
                    </Link>
                </form>
                <br />
                <div className="text-center">
                    View workshop information{" "}
                    <a
                        href="/"
                        className="underline hover:text-highlight-primary"
                    >
                        here
                    </a>
                </div>
            </div>
        </>
    );
}
