import { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
}

/**
 * Container for forms
 * @param children 
 * @returns FormContainer component
 */
function FormContainer(props: FormContainerProps) {
  return (
    <div className="w-4/12 px-20 py-12 w-fit bg-text-primary text-black m-auto flex flex-col items-center gap-3 rounded-lg">
      {props.children}
    </div>
  );
}

export default FormContainer;
