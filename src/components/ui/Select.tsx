import { ReactNode, useEffect } from "react";

interface SelectProps {
    children: ReactNode;
    id: string;
    label: string;
    setState: (state: Object) => void;
    defaultValue?: number;
}

/**
 * Select menu
 * @param id html id
 * @param label label text
 * @param setState function to call on input change
 * @param defaultValue default value id
 * @param children options
 * @returns
 */
function Select<T>(props: SelectProps) {
    useEffect(() => {
        props.setState((prevState: Object) => ({
            ...prevState,
            [props.id]: props.defaultValue,
        }));
    }, [props.defaultValue]);

    return (
        <div className="flex flex-col w-full">
            {/* label */}
            <label htmlFor={props.id}>{props.label}</label>

            <select
                className="py-1 px-2 rounded border"
                id={props.id}
                defaultValue={props.defaultValue ? props.defaultValue : 1}
                onChange={(event) => {
                    const value = event.currentTarget.value;
                    console.log("selecting: ", value);
                    props.setState((prevState: Object) => ({
                        ...prevState,
                        [props.id]: value,
                    }));
                }}
            >
                {props.children}
            </select>
        </div>
    );
}

export default Select;
