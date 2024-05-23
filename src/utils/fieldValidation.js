export const validators = {
  freeTextValidation: {
    validation: {
      required: {
        value: true,
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
    },
  },
  passwordTextValidation: {
    validation: {
      required: {
        value: true,
        message: "required",
      },
      minLength: {
        value: 8,
        message: "min 8 characters",
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        message:
          "Password must contain at least one uppercase letter and one special character",
      },
    },
  },
  confirmPasswordTextValidation: {
    validation: {
      required: "Please confirm your password",
      validate: (value, { password }) =>
        value === password || "Passwords do not match",
    },
  },
  dropdownValidation: {
    validation: {
      required: {
        value: true,
        message: "required",
      },
    },
  },
};
