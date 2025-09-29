interface InteractiveButtonProps {
    text: string;
    onClick: Function;
    isSubmit?: boolean;
}

/**
 * Interactive button
 * @param text text to display
 * @param onClick function to call on click
 * @returns InteractiveButton component
 */
export default function InteractiveButton({
    text,
    onClick,
    isSubmit = false,
}: InteractiveButtonProps) {
    return (
        <button
            className="bg-[#FF9056] px-8 py-2 rounded-xs hover:bg-[#FF6381]"
            type={isSubmit ? "submit" : "button"}
            onClick={(event) => {
                if (!isSubmit) event.preventDefault();
                onClick();
            }}
        >
            {text}
        </button>
    );
}
