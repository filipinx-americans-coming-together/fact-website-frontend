"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Footer from "@/components/formatting/PageFooter";
import LoadingCircle from "@/components/icons/LoadingCircle";
import Navbar from "@/components/navigation/Navbar";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import { UpdateUserProps, useUpdateUser } from "@/hooks/api/useUpdateUser";
import { useUser } from "@/hooks/api/useUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Workshops() {
    const { updateUser, isSuccess, isPending, error } = useUpdateUser();
    const { user, error: noUser } = useUser();

    const [formData, setFormData] = useState<Object>({
        workshop_1_id: "",
        workshop_2_id: "",
        workshop_3_id: "",
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
                formName="updateWorkshops"
                onSubmit={() => {
                    updateUser(formData as UpdateUserProps);
                }}
                isLoading={isPending}
                errorMessage={error?.message}
            >
                <div className="text-center">Edit Workshops</div>

                {!user && <LoadingCircle />}
                {user && (
                    <>
                        <WorkshopSelect
                            session={1}
                            id="workshop_1_id"
                            setState={setFormData}
                            defaultValue={user.registration[0].workshop.toString()}
                            required={false}
                        />
                        <WorkshopSelect
                            session={2}
                            id="workshop_2_id"
                            setState={setFormData}
                            defaultValue={user.registration[1].workshop.toString()}
                            required={false}
                        />
                        <WorkshopSelect
                            session={3}
                            id="workshop_3_id"
                            setState={setFormData}
                            defaultValue={user.registration[2].workshop.toString()}
                            required={false}
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
            <Footer />
        </>
    );
}
