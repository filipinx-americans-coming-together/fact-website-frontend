"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/navigation/Navbar";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import Link from "next/link";

export default function Workshops() {
    return (
        <>
            <Navbar />
            <FormContainer
                submitText="Save Changes"
                formName="updateWorkshops"
                onSubmit={() => {}}
                isLoading={false}
                errorMessage={undefined}
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
