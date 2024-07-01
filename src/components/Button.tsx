interface ButtonProps {
    text: string;
    url: string;
}

export default function Button({ text, url }: ButtonProps) {
    return(
        <a href={url} className="m-4">
            <button className="text-center text-text-primary border-solid border-2 w-60 py-4 hover:text-background-primary hover:bg-text-primary">{text}</button>
        </a>
    );
}