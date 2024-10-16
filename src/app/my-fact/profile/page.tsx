"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import { updateUserProps, useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useUser } from "@/hooks/api/useUser";
import Link from "next/link";

export default function Profile() {
    const { user } = useUser();
    const { updateUser, isSuccess, isPending, error } = useUpdateUser();

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateProfile"
                onSubmit={(event) => {
                    // format data
                    const data: updateUserProps = {
                        f_name: event.currentTarget.f_name.value,
                        l_name: event.currentTarget.l_name.value,
                        email: event.currentTarget.email.value,
                        pronouns: event.currentTarget.pronouns.value,
                        year: event.currentTarget.year.value,
                        school_id: event.currentTarget.school_id.value,
                    };

                    updateUser(data);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Edit Profile</div>

                <TextInput
                    label="First Name"
                    id="f_name"
                    placeholder={user?.user.first_name}
                />
                <TextInput
                    label="Last Name"
                    id="l_name"
                    placeholder={user?.user.last_name}
                />
                <TextInput
                    label="Email"
                    id="email"
                    placeholder={user?.user.email}
                />
                <TextInput
                    label="Pronouns (optional)"
                    id="pronouns"
                    placeholder={user?.delegate.pronouns}
                />

                <Select id="year" label="Year">
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Super Senior">Super Senior</option>
                    <option value="Other">Other</option>
                </Select>

                <SchoolSelect id="school_id" />

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
