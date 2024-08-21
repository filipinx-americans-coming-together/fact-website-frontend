import { useState } from "react";

interface TextInputProps {
  label: string;
  id: string;
  maxLength?: number;
  placeholder?: string;
  showCharacters?: boolean;
  showMaxLength?: boolean;
  autoComplete?: string
}

function TextInput({
  label,
  id,
  maxLength=1000,
  placeholder = "",
  showCharacters = true,
  showMaxLength = false,
  autoComplete = "off"
}: TextInputProps) {
  const [inputLength, setInputLength] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-end justify-between gap-4">
        {/* label */}
        <label htmlFor={id}>{label}</label>

        {/* display number of typed characters */}
        {showMaxLength ? (
          <p className="text-highlight-secondary">
            {inputLength}/{maxLength}
          </p>
        ) : (
          <></>
        )}
      </div>

      <input
        type={showCharacters ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="py-1 px-2 rounded border w-full min-w-64"
        onChange={(event) => {
          setInputLength(event.currentTarget.value.length);
        }}
      />
    </div>
  );
}

export default TextInput;
