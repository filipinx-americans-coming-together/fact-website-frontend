"use client"

import { useEffect, useState } from "react";

interface CountdownTimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const INIT_TIME = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

const FACT_2024_DATE = new Date('November 20, 2024 19:00:00')

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INIT_TIME);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
    }, []);

    function calculateTimeLeft(): CountdownTimeLeft {
        let timeLeft: CountdownTimeLeft = {};
        let currentDate = new Date();
        let difference = FACT_2024_DATE.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft;
    }

    return (
        <>
            <div>
                {timeLeft.days}
            </div>
            <div>
                {timeLeft.hours}
            </div>
            <div>
                {timeLeft.minutes}
            </div>
            <div>
                {timeLeft.seconds}
            </div>
        </>
    )
}