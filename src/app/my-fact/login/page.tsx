"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useLogin } from "@/hooks/api/useLogin";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const { login, isPending, error, isSuccess } = useLogin();

    const [isDelegate, setIsDelegate] = useState(true);

    const [formData, setFormData] = useState<Object>({
        email: "",
        password: "",
    });

    if (isSuccess) {
        if (isDelegate) {
            window.location.href = "/my-fact/dashboard";
        } else {
            window.location.href = "/facilitators/dashboard";
        }
    }

    return (
        <>
            <Navbar />

            <br />
            {/* toggle log in type */}
            <div className="mx-auto p-2 border-2 border-highlight-primary rounded w-fit flex gap-4">
                <button
                    type="button"
                    className={
                        (isDelegate
                            ? "bg-highlight-primary text-background-primary rounded"
                            : "") + " py-2 px-4"
                    }
                    onClick={(event) => {
                        event.preventDefault();
                        setIsDelegate(true);
                    }}
                >
                    Delegate
                </button>
                <button
                    type="button"
                    className={
                        (!isDelegate
                            ? "bg-highlight-primary text-background-primary rounded"
                            : "") + " py-2 px-4"
                    }
                    onClick={(event) => {
                        event.preventDefault();
                        setIsDelegate(false);
                    }}
                >
                    Facilitator
                </button>
            </div>
            <br />
            <FormContainer
                submitText="Log in"
                formName="loginForm"
                onSubmit={() => {
                    login(formData as { email: string; password: string });
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">
                    {isDelegate ? "Delegate " : "Facilitator "}Login
                </div>
                <TextInput label="Email" id="email" setState={setFormData} />
                <TextInput
                    label="Password"
                    id="password"
                    showCharacters={false}
                    setState={setFormData}
                />
                <Link
                    href="/my-fact/forgot-password"
                    className="underline text-highlight-secondary text-xs hover:text-highlight-primary"
                >
                    Forgot Password
                </Link>

                <br />

                <div className="text-center">
                    {isDelegate ? (
                        <>
                            New to FACT?{" "}
                            <a
                                href="/my-fact/register"
                                className="underline hover:text-highlight-primary"
                            >
                                Create an account
                            </a>
                        </>
                    ) : (
                        <p>
                            First time logging in? Check your email for detailed
                            instructions on how to log in.
                        </p>
                    )}
                </div>
            </FormContainer>
        </>
    );
}
