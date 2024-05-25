import { Link, redirect, useNavigate } from "react-router-dom";
import uiMetaData from "../env/commonUIMetadata.json";
import Input from "../Input/Input";
import { validators } from "../../utils/fieldValidation";
import { FormProvider, useForm } from "react-hook-form";
import "./LoginPage.css";
import { loginUser } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../../redux/slice/headerSlice";
import { useEffect } from "react";

const LoginPage = () => {
  const methods = useForm();
  const roleId = useSelector((state) => state.auth.roleId);

  const dispatch = useDispatch();
  const { login } = uiMetaData;
  const navigate = useNavigate();
  const submit = methods.handleSubmit(async (data) => {
    const resultAction = await dispatch(loginUser({ ...data }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/landing-page");
    } else {
      console.log(resultAction.payload); // This will contain the error message
    }
  });
  useEffect(() => {
    if (roleId) {
      dispatch(fetchHeader({ roleId }));
    }
  }, [roleId]);
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
