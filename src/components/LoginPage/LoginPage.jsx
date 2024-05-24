import { Link, redirect, useNavigate } from "react-router-dom";
import uiMetaData from "../env/commonUIMetadata.json";
import Input from "../Input/Input";
import { validators } from "../../utils/fieldValidation";
import { FormProvider, useForm } from "react-hook-form";
import "./LoginPage.css";
import axios from "axios";

const LoginPage = () => {
  const methods = useForm();
  const { login } = uiMetaData;
  const navigate = useNavigate();
  const submit = methods.handleSubmit((data) => {
    const { email, password } = data;
    const getData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8080/api/auth/login", getData)
      .then((res) => {
        sessionStorage.setItem("authToken", res.data.accessToken);
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="login-container">
      <h2>{login.heading}</h2>
      <FormProvider {...methods}>
        <form onSubmit={(event) => event.preventDefault()} noValidate>
          {login.fields.map((field) => {
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
          <button onClick={submit}> Login</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
