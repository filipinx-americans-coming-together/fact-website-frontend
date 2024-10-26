"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useRouter } from "next/router";
import { useState } from "react";

interface PasswordData {
    password: string;
    confirm_password: string;
}

export default function ResetPassword({
    params,
}: {
    params: { slug: string };
}) {
    const token = params.slug;

    const [passwords, setPasswords] = useState<Object>({
        password: "",
        confirm_password: "",
    });

    const [clientError, setClientError] = useState<string | undefined>();

    return (
        <>
            <Navbar />
            <br />
            <FormContainer
                submitText="Reset Password"
                formName="setPassword"
                onSubmit={() => {
                    if (
                        (passwords as PasswordData).password !==
                        (passwords as PasswordData).confirm_password
                    ) {
                        setClientError("Passwords do not match");
                        return;
                    } else {
                        setClientError(undefined);
                    }
                }}
                isLoading={false}
                errorMessage={clientError ? clientError : undefined}
            >
                <h1>Reset Password</h1>
                <TextInput
                    label="New Password"
                    id="password"
                    setState={setPasswords}
                    showCharacters={false}
                    required
                />
                <TextInput
                    label="Confirm Password"
                    id="confirm_password"
                    setState={setPasswords}
                    showCharacters={false}
                    required
                />
                <ul className="text-xs">
                    <li>
                        Your password can't be too similar to your other
                        personal information
                    </li>
                    <li>Your password must contain at least 8 characters</li>
                    <li>Your password can't be entirely numeric</li>
                </ul>
            </FormContainer>
        </>
    );
}
