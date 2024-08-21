import { API_URL } from "@/util/constants";
import { ReactNode, useState } from "react";
import LoadingCircle from "../icons/LoadingCircle";
import InteractiveButton from "../ui/InteractiveButton";

interface APIFormProps {
  submitText: string;
  url: string;
  onSuccess(data: any): any;
  requestMethod: string;
  formName: string;
  children: ReactNode;
}

/**
 * Form component that submits form data to API
 * ids of children correspond to keys of request body
 * @param submitText text for submit button
 * @param url url to send request to
 * @param onSuccess function to call when request succeeds
 * @param requestMethod request method
 * @param formName form name
 * @returns APIForm component
 */
function APIForm(props: APIFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  return (
    <form
      name={props.formName}
      className="flex flex-col gap-6 items-center text-left"
      autoComplete="off"
      onSubmit={(event) => {
        setIsLoading(true);
        setErrorMessage("");
        event.preventDefault();

        // format data as JSON
        const data: { [key: string]: string } = {};

        Array.prototype.forEach.call(
          event.currentTarget.elements,
          (element) => {
            const key = element.id as string;
            const value = element.value as string;
            data[key] = value;
          }
        );

        const body = JSON.stringify(data);

        // post
        fetch(`${API_URL}/${props.url}`, {
          credentials: "include",
          method: props.requestMethod,
          body: body,
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json().then((data) => {
                props.onSuccess(data);
              });
            } else {
              response.text().then((data) => {
                setErrorMessage(data);
              });
            }

            setIsLoading(false);
          })
          .catch((error) => console.log("error", error));
      }}
    >
      {props.children}
      {errorMessage ? (
        <p className="text-red-600">{errorMessage}</p>
      ) : (
        <></>
      )}

      {isLoading ? (
        // loading
        <div className="flex justify-center py-2s">
          <LoadingCircle />
        </div>
      ) : (
        // submit
        <InteractiveButton text={props.submitText} onClick={() => {}} />
      )}
    </form>
  );
}

export default APIForm;
