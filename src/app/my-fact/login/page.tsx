"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useLogin } from "@/hooks/api/useLogin";

export default function Login() {
    const { login, isPending, error, isSuccess } = useLogin();

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />

            <FormContainer
                submitText="Log in"
                formName="loginForm"
                onSubmit={(event) => {
                    event.preventDefault();

                    const email = event.currentTarget.email.value;
                    const password = event.currentTarget.password.value;

                    login({ email: email, password: password });
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Login</div>
                <TextInput label="Email" id="email" />
                <TextInput
                    label="Password"
                    id="password"
                    showCharacters={false}
                />

                <br />

                <div className="text-center">
                    New to FACT?{" "}
                    <a
                        href="/my-fact/register"
                        className="underline hover:text-highlight-primary"
                    >
                        Create an account
                    </a>
                </div>
            </FormContainer>
        </>
    );
}
