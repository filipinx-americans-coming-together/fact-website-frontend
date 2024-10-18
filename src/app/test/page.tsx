"use client"

import SearchableSelect from "@/components/ui/SearchableSelect";

const options = [
    { label: "option 1", value: 1 },
    { label: "option 2", value: 2 },
    { label: "option 3", value: 3 },
    { label: "option 4", value: 4 },
];

export default function Test() {
    return (
        <div>
            <SearchableSelect
                options={options}
                id="test"
                setState={() => {}}
                label="test"
                placeholder="Search..."
            />
        </div>
    );
}
