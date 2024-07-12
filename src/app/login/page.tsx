import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="w-4/12 px-20 py-12 bg-text-primary text-black m-auto items-center rounded-lg">
                <div className="text-center mb-6">Login</div>
                <form autoComplete="off">
                    <label className="block mt-2">Email</label>
                    <input
                        required
                        type="text"
                        id="email"
                        className="block border-solid border-2 mb-2"
                    ></input>
                    <label className="block mt-2">Password</label>
                    <input
                        required
                        type="password"
                        id="password"
                        className="block border-solid border-2 mb-2"
                    ></input>
                    <br />
                    <Link
                        href="/dashboard"
                        className="px-4 py-2 me-2 mb-2 mt-8 text-sm rounded-md bg-blue-600 text-text-primary hover:bg-blue-700"
                    >
                        Login
                    </Link>
                    <br />
                    <br />
                    <div className="text-center">
                        New to FACT?{" "}
                        <a href="/" className="underline hover:text-highlight-primary">
                            Create an account
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}
