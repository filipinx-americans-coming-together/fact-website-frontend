"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import { updateUserProps, useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useUser } from "@/hooks/api/useUser";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
    const { user } = useUser();
    const { updateUser, isSuccess, isPending, error } = useUpdateUser();

    const [formData, setFormData] = useState<Object>({
        f_name: "",
        l_name: "",
        email: "",
        pronouns: "",
        year: "",
        school_id: "",
    });

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateProfile"
                onSubmit={() => {
                    updateUser(formData as updateUserProps);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Edit Profile</div>

                <TextInput
                    label="First Name"
                    id="f_name"
                    placeholder={user?.user.first_name}
                    setState={setFormData}
                    required={false}
                />
                <TextInput
                    label="Last Name"
                    id="l_name"
                    placeholder={user?.user.last_name}
                    setState={setFormData}
                    required={false}
                />
                <TextInput
                    label="Email"
                    id="email"
                    placeholder={user?.user.email}
                    setState={setFormData}
                    required={false}
                />
                <TextInput
                    label="Pronouns"
                    id="pronouns"
                    placeholder={user?.delegate.pronouns}
                    setState={setFormData}
                    required={false}
                />

                <Select
                    id="year"
                    label="Year"
                    setState={setFormData}
                    required={false}
                >
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Super Senior">Super Senior</option>
                    <option value="Other">Other</option>
                </Select>

                <SchoolSelect
                    id="school_id"
                    setState={setFormData}
                    required={false}
                />

                <Link
                    className="text-center text-sm text-highlight-primary hover:underline"
                    href="/my-fact/dashboard"
                >
                    Back to Dashboard
                </Link>
            </FormContainer>
        </>
    );
}
