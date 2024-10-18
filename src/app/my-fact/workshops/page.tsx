"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import { updateUserProps, useUpdateUser } from "@/hooks/api/useUpdateUser";
import Link from "next/link";
import { useState } from "react";

export default function Workshops() {
    const { updateUser, isSuccess, isPending, error } = useUpdateUser();

    const [formData, setFormData] = useState<Object>({
        workshop_1_id: "",
        workshop_2_id: "",
        workshop_3_id: "",
    });

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateWorkshops"
                onSubmit={() => {
                    updateUser(formData as updateUserProps);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Edit Workshops</div>

                <WorkshopSelect
                    session={1}
                    id="workshop_1_id"
                    setState={setFormData}
                    required={false}
                />
                <WorkshopSelect
                    session={2}
                    id="workshop_2_id"
                    setState={setFormData}
                    required={false}
                />
                <WorkshopSelect
                    session={3}
                    id="workshop_3_id"
                    setState={setFormData}
                    required={false}
                />

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
