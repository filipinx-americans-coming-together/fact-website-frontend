interface InteractiveButtonProps {
  text: string;
  onClick: Function;
}

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
