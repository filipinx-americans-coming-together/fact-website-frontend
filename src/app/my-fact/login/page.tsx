"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useFacilitatorLogin } from "@/hooks/api/useFacilitatorLogin";
import { useLogin } from "@/hooks/api/useLogin";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const { login, isPending, error, isSuccess } = useLogin();
    const {
        login: facilitatorLogin,
        isPending: facilitatorPending,
        error: facilitatorError,
        isSuccess: facilitatorSuccess,
    } = useFacilitatorLogin();

    const [isDelegate, setIsDelegate] = useState(true);

    const [formData, setFormData] = useState<Object>({
        email: "",
        password: "",
    });

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    if (facilitatorSuccess) {
        window.location.href = "/facilitators/dashboard";
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
                    if (isDelegate) {
                        login(formData as { email: string; password: string });
                    } else {
                        facilitatorLogin(
                            formData as { username: string; password: string }
                        );
                    }
                }}
                isLoading={isPending || facilitatorPending}
                errorMessage={error ? error.message : facilitatorError?.message}
            >
                <div className="text-center">
                    {isDelegate ? "Delegate " : "Facilitator "}Login
                </div>
                <div className="w-6/12 flex flex-col gap-6">
                    <TextInput
                        label={isDelegate ? "Email" : "Username"}
                        id={isDelegate ? "email" : "username"}
                        setState={setFormData}
                    />
                    <TextInput
                        label="Password"
                        id="password"
                        showCharacters={false}
                        setState={setFormData}
                    />
                </div>

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
