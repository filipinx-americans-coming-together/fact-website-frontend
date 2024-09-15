interface LinkButtonProps {
  text: string;
  url: string;
  new_tab: boolean;
}

/**
 * Link button
 * @param text text to display
 * @param url url to direct to 
 * @returns LinkButton
 */
export default function LinkButton({ text, url, new_tab=false }: LinkButtonProps) {
  return (
    <a href={url} target={new_tab ? "_blank" : "_self"} className="m-4">
      <button className="text-center text-text-primary border-solid border-2 w-60 py-4 hover:text-background-primary hover:bg-text-primary">
        {text}
      </button>
    </a>
  );
}
