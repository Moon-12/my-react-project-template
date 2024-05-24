import { useState } from "react";
import uiData from "../env/commonUIMetadata.json";
import "./SignUpPage.css";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../Input/Input";
import { validators } from "../../utils/fieldValidation";
import Select from "../Select/Select";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const methods = useForm();
  const { signUp: signUpMetaData } = uiData;
  const [response, setResponse] = useState(null);

  const submit = methods.handleSubmit((data) => {
    const { userName, email, password, role } = data;
    const postData = {
      username: userName,
      email: email,
      password: password,
      roles: [role],
    };
    axios
      .post("http://localhost:8080/api/auth/signup", postData)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  });

  return (
    <div className="signup-container">
      {response ? (
        <>
          <p>{response.message}</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      ) : (
        <>
          <h2>{signUpMetaData.heading}</h2>
          <FormProvider {...methods}>
            <form onSubmit={(event) => event.preventDefault()} noValidate>
              {signUpMetaData.fields.map((field) => {
                const fields =
                  field.type === "text" || field.type === "password" ? (
                    <Input
                      key={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      inpValidation={validators[field.validatorSelector]}
                    />
                  ) : field.type === "select" ? (
                    <Select
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      options={field.options}
                      rules={validators[field.validatorSelector]}
                    />
                  ) : (
                    ""
                  );
                return fields;
              })}

              <button onClick={submit} value="Sign Up">
                Sign Up
              </button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default SignUpPage;
