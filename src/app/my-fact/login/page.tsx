"use client";
import FormContainer from "@/components/formatting/FormContainer";
import Navbar from "@/components/Navbar";
import APIForm from "@/components/registration/APIForm";
import TextInput from "@/components/ui/TextInput";

export default function Login() {
  return (
    <>
      <Navbar />
      <FormContainer>
        <div className="text-center">Login</div>

        <APIForm
          submitText="Log in"
          url="login/"
          onSuccess={() => (window.location.href = "/my-fact/dashboard")}
          requestMethod="POST"
          formName="loginForm"
        >
          <TextInput label="Email" id="email" />
          <TextInput label="Password" id="password" showCharacters={false} />
        </APIForm>

        <br />

        <div className="text-center">
          New to FACT?{" "}
          <a
            href="/my-fact/register"
            className="underline hover:text-highlight-primary"
          >
            Create an account
          </a>
        </div>
      </FormContainer>
    </>
  );
}
