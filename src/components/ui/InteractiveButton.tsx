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
            className="bg-highlight-primary px-8 py-2 rounded-xs hover:bg-highlight-secondary"
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
