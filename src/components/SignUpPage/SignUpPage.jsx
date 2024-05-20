import { useState } from "react";
import uiData from "../env/common_ui_metadata.json";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    userName: "",
    password: "",
    confirmPass: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const { signUp } = uiData;

  const handleInputChange = (event) => {
    let data = { ...inputFields };
    console.log(data);
    data[event.target.name] = event.target.value;
    setInputFields(data);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <div className="signup-container">
      <h2>{signUp.heading}</h2>
      <form onSubmit={submit}>
        {signUp.data.map((field) => {
          return (
            <input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={inputFields[field.name]}
              onChange={handleInputChange}
            />
          );
        })}

        <button onClick={submit} value="Sign Up" disabled={!isFormValid}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
