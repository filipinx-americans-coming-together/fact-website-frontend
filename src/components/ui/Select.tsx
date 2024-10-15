import { ReactNode } from "react";

interface SelectProps {
    children: ReactNode;
    id: string;
    label: string;
    defaultValue?: number;
}

/**
 * Select menu
 * @param id html id
 * @param label label text
 * @param defaultValue default value id
 * @param children options
 * @returns
 */
function Select<T>(props: SelectProps) {
    return (
        <div className="flex flex-col w-full">
            {/* label */}
            <label htmlFor={props.id}>{props.label}</label>

            <select
                className="py-1 px-2 rounded border"
                id={props.id}
                defaultValue={props.defaultValue ? props.defaultValue : -1}
            >
                {props.children}
            </select>
        </div>
    );
}

export default Select;
