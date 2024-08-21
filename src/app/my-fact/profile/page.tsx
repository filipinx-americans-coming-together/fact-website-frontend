"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/Navbar";
import APIForm from "@/components/registration/APIForm";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Navbar />
      <FormContainer>
        <div className="text-center">Edit Profile</div>

        <APIForm
          submitText="Save Changes"
          url="user/"
          onSuccess={() => {
            window.location.href = "/my-fact/dashboard";
          }}
          requestMethod="PUT"
          formName="updateProfile"
        >
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
        </APIForm>

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
