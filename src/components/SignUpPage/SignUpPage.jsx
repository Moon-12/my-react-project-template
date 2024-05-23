import { useState } from "react";
import uiData from "../env/commonUIMetadata.json";
import "./SignUpPage.css";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../Input/Input";
import { validators } from "../../utils/inputValidation";

const SignUpPage = () => {
  const methods = useForm();
  const { signUp: signUpMetaData } = uiData;

  const submit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="signup-container">
      <h2>{signUpMetaData.heading}</h2>
      <FormProvider {...methods}>
        <form onSubmit={(event) => event.preventDefault()} noValidate>
          {signUpMetaData.fields.map((field) => {
            return (
              <Input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                inpValidation={validators[field.validatorSelector]}
              />
            );
          })}
          <button onClick={submit} value="Sign Up">
            Sign Up
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpPage;
