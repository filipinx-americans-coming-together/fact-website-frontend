import { EventHandler, ReactNode } from "react";
import LoadingCircle from "../icons/LoadingCircle";
import InteractiveButton from "../ui/InteractiveButton";

interface FormProps {
    children: ReactNode;
    onSubmit: EventHandler<any>;
    formName: string;
    submitText: string;
    isLoading: boolean;
    errorMessage: string | undefined | null;
}

function FormContainer(props: FormProps) {
    return (
        <div className="w-7/12 min-w-[460px] px-20 py-12 bg-text-primary text-black m-auto flex flex-col items-center gap-3 rounded-lg">
            <form
                name={props.formName}
                className="flex flex-col gap-6 items-center text-left w-7/12"
                autoComplete="off"
                onSubmit={(event) => {
                    event.preventDefault();
                    props.onSubmit(event);
                }}
            >
                {props.children}
                {props.errorMessage && (
                    <p className="text-red-600">{props.errorMessage}</p>
                )}

                {props.isLoading ? (
                    // loading
                    <div className="flex justify-center py-2s">
                        <LoadingCircle />
                    </div>
                ) : (
                    // submit
                    <InteractiveButton
                        text={props.submitText}
                        onClick={() => {}}
                        isSubmit={true}
                    />
                )}

                <p className="text-xs text-slate-600">
                    This site uses cookies to perform necessary actions. If you
                    are on a mobile device, please disable &quot;Prevent Cross-Site
                    Tracking&quot; before continuing
                </p>
            </form>
        </div>
    );
}

export default FormContainer;
