import { EMAIL_INVALID, PASSWORD_INVALID, NAME_INVALID } from "./constants";

export const validateName = (name) => {
  const isNameValid = /^[a-zA-Z]{2,}(?: [a-zA-Z'-]+)*$/.test(name);

  if (!isNameValid) {
    return NAME_INVALID;
  }
  return null;
};

export const validateEmail = (email) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (!isEmailValid) {
    return EMAIL_INVALID;
  }
  return null;
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordValid) {
    return PASSWORD_INVALID;
  }

  return null;
};
