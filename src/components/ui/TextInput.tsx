import { useState } from "react";

interface TextInputProps {
    label: string;
    id: string;
    setState: (state: Object) => void;
    maxLength?: number;
    placeholder?: string;
    showCharacters?: boolean;
    showMaxLength?: boolean;
    autoComplete?: string;
}

/**
 *
 * @param label label
 * @param id html id
 * @param setState function to call on input change
 * @param maxLength max length
 * @param placeholder placeholder text, default ""
 * @param showCharacters display characters, input type=text if true, type=password if false, default true
 * @param showMaxLength show number of typed characters out of max, default false
 * @param autoComplete autocomplete setting, default "off"
 * @returns
 */
function TextInput({
    label,
    id,
    maxLength = 1000,
    placeholder = "",
    showCharacters = true,
    showMaxLength = false,
    autoComplete = "off",
    setState,
}: TextInputProps) {
    const [inputLength, setInputLength] = useState(0);

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-end justify-between gap-4">
                {/* label */}
                <label htmlFor={id}>{label}</label>

                {/* display number of typed characters */}
                {showMaxLength && (
                    <p className="text-highlight-secondary">
                        {inputLength}/{maxLength}
                    </p>
                )}
            </div>

            <input
                type={showCharacters ? "text" : "password"}
                id={id}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="py-1 px-2 rounded border w-full min-w-64"
                onChange={(event) => {
                    const value = event.currentTarget.value;

                    setInputLength(event.currentTarget.value.length);
                    setState((prevState: Object) => ({
                        ...prevState,
                        [id]: value,
                    }));
                }}
            />
        </div>
    );
}

export default TextInput;
