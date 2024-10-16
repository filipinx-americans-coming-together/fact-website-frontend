"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import { registrationProps, useRegister } from "@/hooks/api/useRegister";

export default function Register() {
    const { register, isSuccess, isPending, error } = useRegister();

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
                    // format data
                    const data: registrationProps = {
                        f_name: event.currentTarget.f_name.value,
                        l_name: event.currentTarget.l_name.value,
                        email: event.currentTarget.email.value,
                        password: event.currentTarget.password.value,
                        pronouns: event.currentTarget.pronouns.value,
                        year: event.currentTarget.year.value,
                        school_id: event.currentTarget.school_id.value,
                        workshop_1_id: event.currentTarget.workshop_1_id.value,
                        workshop_2_id: event.currentTarget.workshop_2_id.value,
                        workshop_3_id: event.currentTarget.workshop_3_id.value,
                    };

                    register(data);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Register for FACT</div>

                <TextInput label="First Name" id="f_name" />
                <TextInput label="Last Name" id="l_name" />
                <TextInput label="Email" id="email" />
                <TextInput
                    label="Password"
                    id="password"
                    showCharacters={false}
                />
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

                <br />
                <div className="text-center">Workshop Selection</div>

                <WorkshopSelect session={1} id="workshop_1_id" />
                <WorkshopSelect session={2} id="workshop_2_id" />
                <WorkshopSelect session={3} id="workshop_3_id" />
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

                    <TextInput label="Discount Code" id="discount" />
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
