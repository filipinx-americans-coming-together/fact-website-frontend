import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="w-4/12 px-20 py-12 bg-text-primary text-black m-auto items-center rounded-lg">
                <div className="text-center mb-6">Your FACT Account</div>
                <form autoComplete="off">
                    <label className="block mt-2">Email</label>
                    <input
                        required
                        type="text"
                        id="email"
                        className="block border-solid border-2 mb-2"
                        value="email@email.com"
                    ></input>
                    <label className="block mt-2">First Name</label>
                    <input
                        required
                        type="text"
                        id="first-name"
                        className="block border-solid border-2 mb-2"
                        value="firstname"
                    ></input>
                    <label className="block mt-2">Last Name</label>
                    <input
                        required
                        type="text"
                        id="last-name"
                        className="block border-solid border-2 mb-2"
                        value="lastname"
                    ></input>
                    <label className="block mt-2">Pronouns</label>
                    <input
                        type="text"
                        id="pronouns"
                        className="block border-solid border-2 mb-2"
                        value="pronoun/pronoun"
                    ></input>
                    <label className="block mt-2">Year</label>
                    <select
                        id="year"
                        className="block border-solid border-2 mb-2"
                    >
                        <option value="placeholder">Year</option>
                        <option value="select">Select</option>
                    </select>
                    <label className="block mt-2">School</label>
                    <select
                        id="school"
                        className="block border-solid border-2 mb-2"
                    >
                        <option value="placeholder">School</option>
                        <option value="select">Select</option>
                    </select>
                    <br/>
                    <Link href="/dashboard" className="px-4 py-2 me-2 mb-2 mt-8 text-sm rounded-md bg-blue-600 text-text-primary hover:bg-blue-700">Save Changes</Link>
                </form>
            </div>
        </>
    );
}
