import Link from "next/link";
import Button from "./Button";
import { useLogout } from "@/hooks/api/useLogout";
import LoadingCircle from "@/components/icons/LoadingCircle";
import { useEffect } from "react";

const LINKS: { label: string; url: string }[] = [
    { label: "Dashboard", url: "/admin/dashboard" },
    { label: "Workshops", url: "/admin/workshops" },
    { label: "Locations", url: "/admin/locations" },
    { label: "Schools", url: "/admin/schools" },
];

export default function Navbar() {
    const { logout, isSuccess, isPending } = useLogout();

    return (
        <div className="w-full bg-text-primary text-background-primary flex justify-evenly border-b-2 items-center p-4">
            {LINKS.map((link) => (
                <Link key={link.label} href={link.url}>
                    {link.label}
                </Link>
            ))}

            {isPending ? (
                <LoadingCircle />
            ) : (
                <Button text="Log out" onClick={logout} isSubmit={false} />
            )}
        </div>
    );
}
