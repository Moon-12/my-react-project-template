import { Link, redirect, useNavigate } from "react-router-dom";
import uiMetaData from "../env/commonUIMetadata.json";
import Input from "../Input/Input";
import { validators } from "../../utils/fieldValidation";
import { FormProvider, useForm } from "react-hook-form";
import "./LoginPage.css";
import { loginUserThunk } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../../redux/slice/headerSlice";
import { useEffect } from "react";

const LoginPage = () => {
  const methods = useForm();

  const dispatch = useDispatch();
  const { login } = uiMetaData;
  const navigate = useNavigate();
  const submit = methods.handleSubmit(async (data) => {
    const resultAction = await dispatch(loginUserThunk({ ...data }));
    if (loginUserThunk.fulfilled.match(resultAction)) {
      navigate("/landing-page");
    }
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
                defaultValue={field.defaultValue}
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
