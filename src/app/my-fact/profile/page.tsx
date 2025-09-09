"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Footer from "@/components/formatting/PageFooter";
import LoadingCircle from "@/components/icons/LoadingCircle";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import { useRequestEmailVerification } from "@/hooks/api/useRequestEmailVerification";
import { UpdateUserProps, useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useUser } from "@/hooks/api/useUser";
import { useVerifyEmail } from "@/hooks/api/useVerifyEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
    const { user, isLoading, error: noUser } = useUser();

    const { updateUser, isSuccess, isPending, error } = useUpdateUser();

    const {
        requestVerification,
        isPending: requestPending,
        error: requestError,
        isSuccess: verificationRequested,
    } = useRequestEmailVerification();

    const {
        verifyEmail,
        isPending: verificationPending,
        error: verificationError,
        isSuccess: emailVerified,
    } = useVerifyEmail();

    const [formData, setFormData] = useState<Object>({
        f_name: "",
        l_name: "",
        email: "",
        pronouns: "",
        year: "",
        school_id: "",
        password: "",
        new_password: "",
    });

    const [emailData, setEmailData] = useState<Object>({
        email: "",
        code: "",
    });

    const router = useRouter();

    useEffect(() => {
        if (noUser) {
            router.push("/my-fact/login");
        }

        if (isSuccess) {
            router.push("/my-fact/dashboard");
        }
    }, [isSuccess, noUser]);

    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateProfile"
                onSubmit={() => {
                    updateUser(formData as UpdateUserProps);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Edit Profile</div>

                {!user && <LoadingCircle />}

                {user && (
                    <>
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
                            defaultValue={user?.delegate.year}
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
                            // defaultValue={user.delegate.school}
                        />
                    </>
                )}

                <Link
                    className="text-center text-sm text-highlight-primary hover:underline"
                    href="/my-fact/dashboard"
                >
                    Back to Dashboard
                </Link>
            </FormContainer>
            <br />
            <br />

            <FormContainer
                formName="updateEmail"
                submitText={
                    verificationRequested && !emailVerified
                        ? "Update Email"
                        : "Verify"
                }
                onSubmit={() => {
                    if (verificationRequested) {
                        verifyEmail(
                            emailData as { email: string; code: string }
                        );
                    } else if (emailVerified) {
                        updateUser(emailData as UpdateUserProps);
                    } else {
                        requestVerification(emailData as { email: string });
                    }
                }}
                isLoading={verificationPending || requestPending}
                errorMessage={verificationError?.message}
            >
                <div className="text-center">Update Email</div>

                <TextInput
                    label="Email"
                    id="email"
                    placeholder={user?.user.email}
                    setState={setEmailData}
                    required={true}
                />
                {verificationRequested && (
                    <>
                        <TextInput
                            label="Verification Code"
                            id="code"
                            maxLength={6}
                            setState={setFormData}
                            required={true}
                        />
                        <p className="text-xs">
                            {
                                "A temporary 6-digit code has been sent to your email. Can't find the code? Check your spam folder or search for emails from 'no-reply@psauiuc.org'"
                            }
                        </p>
                    </>
                )}
            </FormContainer>
            <br />
            <br />

            <FormContainer
                formName="changePassword"
                submitText="Change Password"
                onSubmit={() => {
                    updateUser(formData as UpdateUserProps);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Update Password</div>
                <p className="text-center text-xs">
                    After updating your password you will be asked to log in
                    again.
                </p>

                <TextInput
                    label="Old Password"
                    id="password"
                    setState={setFormData}
                    required={true}
                    showCharacters={false}
                />
                <TextInput
                    label="New Password"
                    id="new_password"
                    setState={setFormData}
                    required={true}
                    showCharacters={false}
                />
            </FormContainer>
            <br />
            <Footer />
        </>
    );
}
