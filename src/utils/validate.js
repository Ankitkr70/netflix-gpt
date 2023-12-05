export const validateName = (name) => {
  const isNameValid = /^[a-zA-Z]{2,}(?: [a-zA-Z'-]+)*$/.test(name);

  if (!isNameValid) {
    return "Please enter a valid name";
  }
  return "";
};

export const validateEmail = (email) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (!isEmailValid) {
    return "Please enter a valid email";
  }
  return "";
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return "";
};
