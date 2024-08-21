interface InteractiveButtonProps {
  text: string;
  onClick: Function;
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
}: InteractiveButtonProps) {
  return (
    <button
      className="bg-highlight-primary px-8 py-2 rounded-sm hover:bg-highlight-secondary"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
