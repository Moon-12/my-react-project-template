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
        message: "min 6 characters",
      },
    },
  },
  confirmPasswordTextValidation: {
    validation: {
      required: {
        value: true,
        message: "required",
      },
      minLength: {
        value: 8,
        message: "min 6 characters",
      },
    },
  },
};
