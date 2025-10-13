"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import WorkshopSelect from "@/components/ui/WorkshopSelect";

import { registrationProps, useRegister } from "@/hooks/api/useRegister";
import { useEffect, useState } from "react";

import { useRequestEmailVerification } from "@/hooks/api/useRequestEmailVerification";
import { useVerifyEmail } from "@/hooks/api/useVerifyEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/formatting/PageFooter";
import RegPageContainer from "@/components/formatting/RegPageContainer";
import Script from "next/script";

const EventbriteWidget = ({ onComplete }: { onComplete: Function }) => {
    useEffect(() => {
        // @ts-ignore
        window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '1672144321679',
            iframeContainerId: 'eventbrite-widget-container-1672144321679',

            // Optional
            iframeContainerHeight: 500, // Widget height in pixels. Defaults to a minimum of 425px if not provided
            onOrderComplete: onComplete, // Method called when an order has successfully completed
        });
    }, []);

    return (
        <div
            className="w-full"
            id="eventbrite-widget-container-1060445463929"
        ></div>
    );
};

// Load the Eventbrite widgets script
const loadEventbriteScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;
    document.body.appendChild(script);
};

export default function Register() {
    const { register, isSuccess, isPending, error } = useRegister();

    const [formData, setFormData] = useState<{ [key: string]: any }>({
        workshop_1_id: -1,
        workshop_2_id: -1,
        workshop_3_id: -1,
        discount: "",
        code: "",
    });

    const [checkoutComplete, setCheckoutComplete] = useState(false);
    const [clientError, setClientError] = useState<string | null>(null);
    const [loadEB, setLoadEB] = useState(true);

    const router = useRouter();

    useEffect(() => {
        loadEventbriteScript();
        return () => {
            setLoadEB(true);
        };
    });

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
        <RegPageContainer>

            <FormContainer
                submitText="Register"
                formName="registerForm"
                onSubmit={() => {
                    setClientError(null);

                    if (checkoutComplete) {
                        register(formData as registrationProps);
                    } else {
                        setClientError(
                            "Complete EventBrite checkout before continuing"
                        );
                    }
                }}
                isLoading={isPending}
                errorMessage={clientError || error?.message}
            >
                <h1 className="text-center text-3xl uppercase font-bold pb-4 border-b w-full">Workshop Selection</h1>

                
                {/* <div className="text-center">Workshop Selection</div> */}
                <Link
                    href="/workshops"
                    target="_blank"
                    className="underline text-highlight-2-primary hover:text-highlight-third"
                >
                    Browse Workshops
                </Link>

                {/* <WorkshopSelect
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
                /> */}

                <div className="w-full">
                    {/* {loadEB && (<EventbriteWidget
                        onComplete={() => {
                            setCheckoutComplete(true);
                        }}
                    />)} */}
                    <div id="eventbrite-widget-container-1672144321679"></div>
                    <Script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" strategy="beforeInteractive" />

                    <Script id='inline'>
                        {`
                        var exampleCallback = function() {
                            console.log('Order complete!');
                        };

                        window.EBWidgets.createWidget({
                            // Required
                            widgetType: 'checkout',
                            eventId: '1672144321679',
                            iframeContainerId: 'eventbrite-widget-container-1672144321679',

                            // Optional
                            iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
                            onOrderComplete: exampleCallback  // Method called when an order has successfully completed
                        });
                        `}
                    </Script>
                </div>
                <div className="static flex items-start gap-1">
                    <div>
                    <input
                        className="relative top-1"
                        required
                        type="checkbox"
                        id="terms-conditions"
                    />
                    </div>
                    <span>
                        <p className="mb-2 lg:mb-4">
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

        </RegPageContainer>
    );
}
