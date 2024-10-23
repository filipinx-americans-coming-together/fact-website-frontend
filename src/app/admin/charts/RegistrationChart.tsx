import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function addDays(date: Date, days: number) {
    var date = new Date(date.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const data = [
    { date: addDays(new Date(), 1), value: 10 },
    { date: addDays(new Date(), 2), value: 24 },
    { date: addDays(new Date(), 3), value: 34 },
    { date: addDays(new Date(), 4), value: 2 },
    { date: addDays(new Date(), 5), value: 95 },
];

export default function RegistrationChart() {
    return (
        <LineChart
            width={600}
            height={300}
            dataset={data}
            xAxis={[
                {
                    dataKey: "date",
                    valueFormatter: (timestamp) =>
                        new Date(timestamp).toDateString(),
                },
            ]}
            series={[{ dataKey: "value", label: "Recent Registrations" }]}
        />
    );
}
