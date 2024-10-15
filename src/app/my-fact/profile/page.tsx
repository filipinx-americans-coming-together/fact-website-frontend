"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import Link from "next/link";

export default function Profile() {
    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateProfile"
                onSubmit={() => {}}
                isLoading={false}
                errorMessage={undefined}
            >
                <div className="text-center">Edit Profile</div>

                <TextInput label="First Name" id="f_name" />
                <TextInput label="Last Name" id="l_name" />
                <TextInput label="Email" id="email" />
                <TextInput label="Pronouns (optional)" id="pronouns" />

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
