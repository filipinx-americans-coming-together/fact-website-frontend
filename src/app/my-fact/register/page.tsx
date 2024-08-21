"use client";

import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/Navbar";
import APIForm from "@/components/registration/APIForm";
import ImageInput from "@/components/ui/ImageInput";
import SchoolSelect from "@/components/ui/SchoolSelect";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import WorkshopSelect from "@/components/ui/WorkshopSelect";

export default function Register() {
  //   const [workshops, setWorkshops] = useState<WorkshopData[]>();

  return (
    <>
      <Navbar />
      <FormContainer>
        <div className="text-center">Register for FACT</div>

        <APIForm
          submitText="Register"
          url="user/"
          onSuccess={() => (window.location.href = "/my-fact/dashboard")}
          requestMethod="POST"
          formName="registerForm"
        >
          <TextInput label="First Name" id="f_name" />
          <TextInput label="Last Name" id="l_name" />
          <TextInput label="Email" id="email" />
          <TextInput label="Password" id="password" showCharacters={false} />
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
            <br/>
            <br/>
            <p>
              Your total is <span className="font-bold">$##</span>
            </p>
            <div>Payment can be made via Venmo @PSA_Treasurer. Please upload proof of payment.</div>
            <input type="file" />
          </div>
        </APIForm>
      </FormContainer>
      <br />
    </>
  );
}
