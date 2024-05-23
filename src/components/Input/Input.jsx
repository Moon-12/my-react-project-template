import { useFormContext } from "react-hook-form";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormValid";

const Input = ({ type, placeholder, name, inpValidation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <>
      {isInvalid && <InputError message={inputErrors.error.message} />}
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

const InputError = ({ message }) => {
  console.log("me", message);
  return <div> {message}</div>;
};
