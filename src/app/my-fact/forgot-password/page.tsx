"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useRequestPasswordReset } from "@/hooks/api/useRequestPasswordReset";
import { useState } from "react";

export default function ForgotPassword() {
    const { requestPasswordReset, isPending, error, isSuccess } =
        useRequestPasswordReset();

    const [formData, setFormData] = useState<Object>({
        email: "",
    });

    return (
        <>
            <Navbar />
            <br />

            {isSuccess ? (
                <div className="w-7/12 min-w-[460px] px-20 py-12 bg-text-primary text-black m-auto flex flex-col items-center gap-3 rounded-lg">
                    If an account with the email{" "}
                    {(formData as { email: string }).email} exists, instructions
                    to reset your password have been sent there. If you can not
                    find the email, please check your spam folder or search for
                    emails from no-reply@psauiuc.org
                </div>
            ) : (
                <FormContainer
                    submitText="Reset Password"
                    formName="resetPassword"
                    onSubmit={() => {
                        if (!isSuccess) {
                            requestPasswordReset({
                                email: (formData as { email: string }).email,
                            });
                        }
                    }}
                    isLoading={isPending}
                    errorMessage={error?.message}
                >
                    <h1>Reset Password</h1>
                    <TextInput
                        label="Email"
                        id="email"
                        setState={setFormData}
                        required
                    />
                </FormContainer>
            )}
        </>
    );
}
