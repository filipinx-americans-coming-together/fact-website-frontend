import { ReactNode, useEffect } from "react";

interface SelectProps {
    children: ReactNode;
    id: string;
    label: string;
    setState: (state: Object) => void;
    defaultValue?: number;
    required?: boolean;
}

/**
 * Select menu
 * @param id html id
 * @param label label text
 * @param setState function to call on input change
 * @param defaultValue default value id
 * @param required is required
 * @param children options
 * @returns
 */
function Select<T>({
    id,
    label,
    setState,
    defaultValue,
    required = true,
    children,
}: SelectProps) {
    useEffect(() => {
        setState((prevState: Object) => ({
            ...prevState,
            [id]: defaultValue,
        }));
    }, [defaultValue, id, setState]);

    return (
        <div className="flex flex-col w-full">
            {/* label */}
            <label htmlFor={id}>
                {label} {required && <span className="text-red-600">*</span>}
            </label>

            <select
                className="py-1 px-2 rounded border"
                id={id}
                defaultValue={defaultValue ? defaultValue : 1}
                onChange={(event) => {
                    const value = event.currentTarget.value;
                    setState((prevState: Object) => ({
                        ...prevState,
                        [id]: value,
                    }));
                }}
            >
                {children}
            </select>
        </div>
    );
}

export default Select;
