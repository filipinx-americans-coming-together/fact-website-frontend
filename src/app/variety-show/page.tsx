"use client";
import FormContainer from "@/components/formatting/FormContainer";
import PageContainer from "@/components/formatting/PageContainer";
import TextInput from "@/components/ui/TextInput";
import { useState } from "react";
import {
    RequestEmailVerificationProps,
    useRequestEmailVerification,
} from "@/hooks/api/useRequestEmailVerification";
import { useVerifyEmail, VerifyEmailProps } from "@/hooks/api/useVerifyEmail";
import {
    OrderVShowTicketsProps,
    useOrderVShowTickets,
} from "@/hooks/api/useOrderVShowTickets";

const TICKET_NAME = "Variety Show Ticket";
const TICKET_PRICE = 10;

/*
TODO for some reason just putting plain text with "" or ' is resulting in build errors (saying to escape the characters)
thats why some of the inner html on paragraphs are in the form {"........"}
*/
export default function VarietyShow() {
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

    const {
        orderTickets,
        isPending: orderPending,
        error: orderError,
        isSuccess: orderSuccess,
    } = useOrderVShowTickets();

    const [formData, setFormData] = useState<Object>({
        email: "",
        verification_code: "",
    });

    return (
        <PageContainer title="Variety Show">
            <h1 className="text-center text-xl">Buy Tickets</h1>
            <br />
            {/* first show email input, then verification code, then ticket order, then success */}
            {!emailVerified && (
                <FormContainer
                    formName="email-verification"
                    onSubmit={() => {
                        if (verificationRequested) {
                            verifyEmail(formData as VerifyEmailProps);
                        } else {
                            requestVerification(
                                formData as RequestEmailVerificationProps
                            );
                        }
                    }}
                    submitText={verificationRequested ? "Verify Email" : "Next"}
                    isLoading={
                        verificationRequested
                            ? verificationPending
                            : requestPending
                    }
                    errorMessage={
                        verificationRequested
                            ? verificationError?.message
                            : requestError?.message
                    }
                >
                    <TextInput
                        label="Email"
                        id="email"
                        setState={setFormData}
                    />

                    {verificationRequested && (
                        <>
                            <TextInput
                                label="Verification Code"
                                id="verification_code"
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
            {emailVerified && !orderSuccess && (
                <FormContainer
                    formName="v-show-tix"
                    onSubmit={() => {
                        orderTickets(formData as OrderVShowTicketsProps);
                    }}
                    submitText="Confirm Order"
                    isLoading={orderPending}
                    errorMessage={orderError?.message}
                >
                    <div className="text-left flex flex-col gap-2 w-full">
                        <label>
                            Ticket Type <span className="text-red-600">*</span>
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="radio"
                                name="ticket"
                                checked
                                readOnly
                            />
                            <label>
                                {TICKET_NAME} - ${TICKET_PRICE}
                            </label>
                        </div>
                        <br />
                        <br />
                        <div className="border-2 p-4">
                            <p className="flex justify-between font-bold">
                                Order total:
                                <span>${TICKET_PRICE}</span>
                            </p>
                            <p className="text-highlight-2-secondary">
                                {TICKET_NAME} - ${TICKET_PRICE}
                            </p>
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
            {orderSuccess && (
                <div className="w-7/12 min-w-[460px] px-20 py-12 bg-text-primary text-black m-auto flex flex-col items-center gap-3 rounded-lg">
                    <p>
                        Thank you for your order! You should receive a ticket to{" "}
                        <span className="text-red-600">
                            {(formData as OrderVShowTicketsProps).email}
                        </span>{" "}
                        shortly
                    </p>
                    <p>
                        {
                            "Didn't receive and email? Check your spam folder or search for emails from 'no-reply@psauiuc.org.' If the issue persists, contact"
                        }{" "}
                        <a
                            className="underline hover:text-highlight-2-primary"
                            href="mailto:fact.it@psauiuc.org"
                        >
                            fact.it@psauiuc.org
                        </a>
                    </p>
                </div>
            )}
            <br />
            <br />
            <h1 className="text-center text-xl">About Variety Show</h1>
            <br /> <div>placeholder text</div>
        </PageContainer>
    );
}
