"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import WorkshopSelect from "@/components/ui/WorkshopSelect";

import { registrationProps, useRegister } from "@/hooks/api/useRegister";
import { useEffect, useState } from "react";

import ticketTypes from "./ticketTypes.json";
import InteractiveButton from "@/components/ui/InteractiveButton";
import { useRequestEmailVerification } from "@/hooks/api/useRequestEmailVerification";
import { useVerifyEmail } from "@/hooks/api/useVerifyEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
    const { register, isSuccess, isPending, error } = useRegister();

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

    const [formData, setFormData] = useState<{ [key: string]: any }>({
        f_name: "",
        l_name: "",
        email: "",
        password: "",
        pronouns: "",
        year: "",
        school_id: -1,
        workshop_1_id: -1,
        workshop_2_id: -1,
        workshop_3_id: -1,
        discount: "",
        code: "",
    });

    const router = useRouter();

    // make sure to clear other school data if school_id changes to not be "School not listed"
    useEffect(() => {
        if (formData.school_id !== "School not listed") {
            formData.other_school_name = null;
        }

        if (isSuccess) {
            router.push("/my-fact/dashboard");
        }
    }, [formData.school_id, isSuccess]);

    return (
        <>
            <Navbar />

            {!emailVerified && (
                <FormContainer
                    submitText={verificationRequested ? "Verify" : "Next"}
                    formName="emailVerification"
                    onSubmit={() => {
                        if (verificationRequested) {
                            console.log(formData);
                            verifyEmail({
                                email: formData.email,
                                code: formData.code,
                            });
                        } else {
                            requestVerification({ email: formData.email });
                        }
                    }}
                    isLoading={verificationPending || requestPending}
                    errorMessage={
                        verificationError
                            ? verificationError.message
                            : requestError?.message
                    }
                >
                    <div className="text-center">Register for FACT</div>
                    <TextInput
                        label="Email"
                        id="email"
                        setState={setFormData}
                    />
                    {verificationRequested && (
                        <>
                            <TextInput
                                label="Verification Code"
                                id="code"
                                maxLength={6}
                                setState={setFormData}
                            />
                            <p className="text-xs">
                                {
                                    "A temporary 6-digit code has been sent to your email. Can't find the code? Check your spam folder or search for emails from 'no-reply@psauiuc.org'"
                                }
                            </p>
                        </>
                    )}
                </FormContainer>
            )}

            {emailVerified && (
                <FormContainer
                    submitText="Register"
                    formName="registerForm"
                    onSubmit={() => {
                        console.log(formData);
                        register(formData as registrationProps);
                    }}
                    isLoading={isPending}
                    errorMessage={error?.message}
                >
                    <h1 className="text-center">Register for FACT</h1>

                    <div className="text-left w-full flex flex-col gap-2">
                        Verified Email: {formData.email}
                        <a
                            href=""
                            className="text-xs underline text-highlight-primary hover:text-highlight-secondary"
                        >
                            Use a different email
                        </a>
                    </div>

                    <TextInput
                        label="First Name"
                        id="f_name"
                        setState={setFormData}
                    />
                    <TextInput
                        label="Last Name"
                        id="l_name"
                        setState={setFormData}
                    />
                    <TextInput
                        label="Password"
                        id="password"
                        showCharacters={false}
                        setState={setFormData}
                    />
                    <TextInput
                        label="Pronouns"
                        id="pronouns"
                        setState={setFormData}
                        required={false}
                    />
                    <p className="text-slate-600">
                        The pronouns provided will appear on your name tag
                    </p>

                    <Select id="year" label="Year" setState={setFormData}>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Super Senior">Super Senior</option>
                        <option value="Other">Other</option>
                        <option value="N/A">N/A</option>
                    </Select>

                    {formData.year == "Other" && (
                        <TextInput
                            label="Specify Other Year"
                            id="other_year"
                            setState={setFormData}
                            required={true}
                        />
                    )}

                    <SchoolSelect
                        id="school_id"
                        setState={setFormData}
                        defaultValue="N/A"
                    />

                    {formData.school_id == "School not listed" && (
                        <TextInput
                            label="School Name (no abbreviations please)"
                            id="other_school_name"
                            setState={setFormData}
                            required={true}
                        />
                    )}

                    <br />
                    <div className="text-center">Workshop Selection</div>
                    <Link
                        href="/workshops"
                        target="_blank"
                        className="underline text-highlight-primary hover:text-highlight-secondary"
                    >
                        Browse Workshops
                    </Link>

                    <WorkshopSelect
                        session={1}
                        id="workshop_1_id"
                        setState={setFormData}
                    />
                    <WorkshopSelect
                        session={2}
                        id="workshop_2_id"
                        setState={setFormData}
                    />
                    <WorkshopSelect
                        session={3}
                        id="workshop_3_id"
                        setState={setFormData}
                    />
                    <br />

                    <div>
                        <input type="checkbox" required />{" "}
                        <label>EVENTBRITE PLACEHOLDER</label>
                    </div>

                    <br />
                    <div className="static flex items-start gap-1">
                        <input
                            className="relative top-1"
                            required
                            type="checkbox"
                            id="terms-conditions"
                        />
                        <span>
                            <p>
                                By checking this box, I affirm that I agree to
                                the following terms and conditions:{" "}
                                <span className="text-red-600">*</span>
                            </p>
                            <div className="text-xs">
                                <p>
                                    I. I am a registered student of a college or
                                    university with proof of ID or student
                                    enrollment.
                                </p>
                                <p>
                                    II. I am responsible for any self-inflicted
                                    loss, theft or damage of my person, personal
                                    valuables, or FACT Conference facilities,
                                    vendors, and furniture and therefore am
                                    liable for any missing belongings or costs
                                    incurred to repair any damage.
                                </p>
                                <p>
                                    III. I understand that there may be
                                    reactions to sensitive material discussed
                                    and that I am allowed to leave any space
                                    where I no longer feel comfortable in at any
                                    time.
                                </p>
                                <p>
                                    IV. I allow myself to be included in photos,
                                    videos, and livestreams taken by
                                    FACTographers during the event for
                                    promotional purposes.
                                </p>
                                <p>
                                    V. I am responsible for all payments made
                                    for food, drink, parking, or Palengke
                                    purchases during the duration of the
                                    conference.
                                </p>
                                <p>
                                    VI. If I would like to rescind my
                                    registration purposes for reasons of changed
                                    availability, I must submit a request for
                                    refund prior to the Early Registration
                                    deadline of November 21st.
                                </p>
                                <p>
                                    VII. PSA does not associate with contraband
                                    material such as alcohol, nicotine products,
                                    or other drug related items. Therefore, I
                                    will not bring any contraband material to
                                    any FACT-related event during the
                                    conference.
                                </p>
                                <p>
                                    VIII. I agree to follow all policies of the
                                    University of Illinois at Urbana-Champaign
                                    and its campus facilities that are outlined
                                    via their respective websites.
                                </p>
                                <p>
                                    IX. My data and information will be used
                                    solely for administering my participation in
                                    this event and acting as a source of contact
                                    for conference-related alerts and
                                    notifications. All payment information will
                                    be protected.
                                </p>
                                <p>
                                    X. PSA is committed to providing a safe,
                                    productive, and welcoming environment to all
                                    participants, including staff, vendors,
                                    guests, and delegates. PSA has no tolerance
                                    for any form of discrimination, harassment,
                                    or bullying in any form at FACT-related
                                    events. Participants are expected to adhere
                                    to these principles and respect the rights
                                    of others.
                                </p>
                                <p className="ml-8">
                                    a. If you are a witness or are subject to
                                    unacceptable behavior, please report to any
                                    PSA, FACT, or trusted organization leader,
                                    who will assist in resolving the issue and
                                    escorting out any individuals disrupting the
                                    safe environment FACT aims to foster.
                                </p>
                                <p>
                                    XI. PSA FACT reserves the right to change,
                                    amend, add or remove any of the above Terms
                                    & Conditions in its sole discretion and
                                    without prior notice. If one or more of the
                                    conditions outlined in these Terms &
                                    Conditions should become invalid, the
                                    remaining conditions will continue to be
                                    valid and apply. These Terms & Conditions
                                    apply to all event participants (attendees,
                                    speakers, sponsors, exhibitors).
                                </p>
                            </div>
                        </span>
                    </div>
                </FormContainer>
            )}

            <br />
        </>
    );
}
