'use client';

import PageContainer from "@/components/formatting/PageContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegistrationClosed() {
    const router = useRouter();
    const [seconds, setSeconds] = useState(10);
    
    seconds > 0 ? setTimeout(() => setSeconds(seconds-1), 1000) : router.push('/')

    return (
        <PageContainer title="My FACT accounts are unavailable until FACT 2025 registration." maintainCase={true}>
        <div className="flex flex-col justify-between gap-4 items-center mb-[-32px]">
                <div className="p-8 font-bold text-3xl rounded-3xl bg-highlight-secondary w-fit">
                    {`Redirecting to home page in ${seconds} seconds`}
                </div>
                <Link href='/' className="underline">Go To Home Now</Link>
            </div>
        </PageContainer>
    );
}
