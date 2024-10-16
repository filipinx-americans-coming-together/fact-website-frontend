"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import { updateUserProps, useUpdateUser } from "@/hooks/api/useUpdateUser";
import Link from "next/link";

export default function Workshops() {
    const { updateUser, isSuccess, isPending, error } = useUpdateUser();

    if (isSuccess) {
        window.location.href = "/my-fact/dashboard";
    }

    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateWorkshops"
                onSubmit={(event) => {
                    // format data
                    const data: updateUserProps = {
                        workshop_1_id: event.currentTarget.workshop_1_id.value,
                        workshop_2_id: event.currentTarget.workshop_2_id.value,
                        workshop_3_id: event.currentTarget.workshop_3_id.value,
                    };

                    updateUser(data);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Edit Workshops</div>

                <WorkshopSelect session={1} id="workshop_1_id" />
                <WorkshopSelect session={2} id="workshop_2_id" />
                <WorkshopSelect session={3} id="workshop_3_id" />

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
