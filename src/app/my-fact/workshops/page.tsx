"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/Navbar";
import APIForm from "@/components/registration/APIForm";
import WorkshopSelect from "@/components/ui/WorkshopSelect";
import Link from "next/link";

export default function Workshops() {
  return (
    <>
      <Navbar />
      <FormContainer>
        <div className="text-center">Edit Workshops</div>

        <APIForm
          submitText="Save Changes"
          url="user/"
          onSuccess={() => {
            window.location.href = "/my-fact/dashboard";
          }}
          requestMethod="PUT"
          formName="updateWorkshops"
        >
          <WorkshopSelect session={1} id="workshop_1_id" />
          <WorkshopSelect session={2} id="workshop_2_id" />
          <WorkshopSelect session={3} id="workshop_3_id" />
        </APIForm>

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
