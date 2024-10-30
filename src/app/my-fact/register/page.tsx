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

    const [ticketSelection, setTicketSelection] = useState<{
        id: number;
        label: string;
        value: number;
    }>({
        id: 0,
        label: ticketTypes.ticketTypes[0].label,
        value: parseInt(ticketTypes.ticketTypes[0].price),
    });

    const [validDiscount, setValidDiscount] = useState<{
        code: string;
        value: number;
    }>();

    // TODO replace with server call to verify code
    const discounts: { [key: string]: number } = {
        FACILITATOR: 20,
        DISCOUNT10: 10,
    };

    function validateDiscount(code: string): void {
        const capitalCode = code.toUpperCase();

        if (discounts[capitalCode]) {
            setValidDiscount({ code: code, value: discounts[capitalCode] });
        } else {
            setValidDiscount(undefined);
        }
    }

    // make sure to clear other school data if school_id changes to not be "School not listed"
    useEffect(() => {
        if (formData.school_id !== "School not listed") {
            formData.other_school_name = null;
        }
    }, [formData.school_id]);

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

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

                    <div className="text-left w-full flex gap-2">
                        Verified Email: {formData.email}
                        <a
                            href=""
                            className="underline text-highlight-2-secondary hover:text-highlight-2-primary"
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

                    <div className="text-left flex flex-col gap-2 w-full">
                        <label>
                            Ticket Type <span className="text-red-600">*</span>
                        </label>
                        <div className="flex flex-col gap-2 items-start">
                            {ticketTypes.ticketTypes.map(
                                (
                                    type: { label: string; price: string },
                                    idx
                                ) => (
                                    <button
                                        className="hover:cursor-pointer"
                                        key={idx}
                                        onClick={(event) => {
                                            event.preventDefault();

                                            setTicketSelection({
                                                id: idx,
                                                label: type.label,
                                                value: parseInt(type.price),
                                            });
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="ticket"
                                            checked={idx == ticketSelection.id}
                                            readOnly
                                        />
                                        <label>
                                            {type.label} - ${type.price}
                                        </label>
                                    </button>
                                )
                            )}
                        </div>

                        <br />

                        <TextInput
                            label="Discount Code"
                            id="discount"
                            setState={setFormData}
                            required={false}
                        />
                        <div className="flex justify-end">
                            <InteractiveButton
                                text="Apply Code"
                                onClick={() => {
                                    console.log(validDiscount);
                                    validateDiscount(formData["discount"]);
                                }}
                            />
                        </div>

                        <br />
                        <br />
                        <div className="border-2 p-4">
                            <p className="flex justify-between font-bold">
                                Order total:
                                <span>
                                    $
                                    {Math.max(
                                        0,
                                        ticketSelection.value -
                                            (validDiscount?.value ?? 0)
                                    )}
                                </span>
                            </p>
                            <p className="text-highlight-2-secondary">
                                {ticketSelection.label} - $
                                {ticketSelection.value}
                            </p>
                            {validDiscount && (
                                <p className="text-highlight-2-secondary">
                                    Discount code{" "}
                                    {validDiscount.code.toUpperCase()} applied
                                </p>
                            )}
                        </div>

                        <br />
                        <div>
                            Payment can be made via Venmo @PSA_Treasurer. Please
                            upload proof of payment.{" "}
                            <span className="text-red-600">*</span>
                        </div>
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            required
                        />

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
                                    By checking this box, I affirm that I agree
                                    to the following terms and conditions:{" "}
                                    <span className="text-red-600">*</span>
                                </p>
                                <div className="text-xs">
                                    <p>
                                        I. I am responsible for loss of items or
                                        damage to FACT Conference facilities. I
                                        will be liable for any costs incurred to
                                        repair any inflicted damage
                                    </p>
                                    <p>
                                        II. I am responsible for any personal
                                        valuables, as FACT Conference
                                        coordinators and PSA will not be held
                                        responsible for any missing belongings.
                                    </p>
                                    <p>
                                        III. PSA is committed to providing a
                                        safe, productive, and welcoming
                                        environment to all participants,
                                        including staff, vendors, guests, and
                                        delegates. PSA has no tolerance for
                                        discrimination, harassment, or bullying
                                        in any form at FACT-related events.
                                        Participants are expected to adhere to
                                        these principles and respect the rights
                                        of others.
                                    </p>
                                    <br />
                                    <p>
                                        If you are a witness or are subject to
                                        unacceptable behavior, please report to
                                        any PSA, FACT, or trusted organization
                                        leader, who will assist in resolving the
                                        issue and escorting out any individuals
                                        disrupting the safe environment FACT
                                        aims to foster.
                                    </p>
                                </div>
                            </span>
                        </div>
                    </div>
                </FormContainer>
            )}

            <br />
        </>
    );
}
