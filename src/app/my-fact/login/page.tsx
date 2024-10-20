"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useLogin } from "@/hooks/api/useLogin";
import { useState } from "react";

export default function Login() {
    const { login, isPending, error, isSuccess } = useLogin();

    const [formData, setFormData] = useState<Object>({
        email: "",
        password: "",
    });

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />

            <FormContainer
                submitText="Log in"
                formName="loginForm"
                onSubmit={() => {
                    login(formData as { email: string; password: string });
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Login</div>
                <TextInput label="Email" id="email" setState={setFormData} />
                <TextInput
                    label="Password"
                    id="password"
                    showCharacters={false}
                    setState={setFormData}
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
