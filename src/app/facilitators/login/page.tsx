"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import TextInput from "@/components/ui/TextInput";
import { useLogin } from "@/hooks/api/useLogin";
import Link from "next/link";
import { useState } from "react";

export default function FacilitatorLogin() {
    const [formData, setFormData] = useState<Object>({
        username: "",
        password: "",
    });

    return (
        <>
            <Navbar />

            <FormContainer
                submitText="Log in"
                formName="loginForm"
                onSubmit={() => {}}
                isLoading={false}
                errorMessage={undefined}
            >
                <div className="text-center">Facilitator Login</div>
                <TextInput
                    label="Username"
                    id="username"
                    setState={setFormData}
                />
                <TextInput
                    label="Password"
                    id="password"
                    showCharacters={false}
                    setState={setFormData}
                />

                <br />
                <div className="text-center text-sm">
                    Logging in for the first time? Make sure to use the
                    temporary password provided by FACT. If you have can not
                    find your password or run into problems logging in, please
                    contact fact.it@psauiuc.org
                </div>
            </FormContainer>
            <br />
            <div className="text-center">
                This page is for facilitators only. If you are not a
                facilitator, please login{" "}
                <Link
                    className="underline hover:text-highlight-primary"
                    href="/my-fact/login"
                >
                    here
                </Link>
            </div>
        </>
    );
}
