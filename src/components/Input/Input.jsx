import { useFormContext } from "react-hook-form";
import { findFieldError } from "../../utils/findFieldError";
import { isFormInvalid } from "../../utils/isFormValid";

const Input = ({ type, placeholder, name, inpValidation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findFieldError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <>
      {isInvalid && <FieldError message={inputErrors.error.message} />}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name, inpValidation.validation)}
      />
    </>
  );
};

export default Input;

const FieldError = ({ message }) => {
  return <div> {message}</div>;
};
