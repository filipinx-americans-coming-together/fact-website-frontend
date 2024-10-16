"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import { registrationProps, useRegister } from "@/hooks/api/useRegister";
import { useState } from "react";

export default function Register() {
    const { register, isSuccess, isPending, error } = useRegister();
    const [formData, setFormData] = useState<Object>({
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
    });

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Register"
                formName="registerForm"
                onSubmit={(event) => {
                    console.log(formData);
                    register(formData as registrationProps);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Register for FACT</div>

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
                <TextInput label="Email" id="email" setState={setFormData} />
                <TextInput
                    label="Password"
                    id="password"
                    showCharacters={false}
                    setState={setFormData}
                />
                <TextInput
                    label="Pronouns (optional)"
                    id="pronouns"
                    setState={setFormData}
                />

                <Select id="year" label="Year" setState={setFormData}>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Super Senior">Super Senior</option>
                    <option value="Other">Other</option>
                </Select>

                <SchoolSelect id="school_id" setState={setFormData} />

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
                    <div>Ticket Type</div>
                    <div>
                        <input type="radio" name="ticket" />
                        <label>Workshops Only - $##</label>
                        <br />
                        <input type="radio" name="ticket" />
                        <label>Workshops + Variety Show - $##</label>
                    </div>

                    <TextInput
                        label="Discount Code"
                        id="discount"
                        setState={setFormData}
                    />
                    <br />
                    <br />
                    <p>
                        Your total is <span className="font-bold">$##</span>
                    </p>
                    <div>
                        Payment can be made via Venmo @PSA_Treasurer. Please
                        upload proof of payment.
                    </div>
                    <input type="file" />
                </div>
            </FormContainer>
            <br />
        </>
    );
}
