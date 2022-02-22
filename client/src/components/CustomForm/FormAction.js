import React from "react";
const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const initialLoginFormData = {
  email: "",
  password: "",
};
export default function FormAction() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState(initialFormData);
  const [loginformData, setLoginFormData] =
    React.useState(initialLoginFormData);
  const [error, setError] = React.useState(null);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setLoginFormData({
      ...loginformData,
      [name]: value,
    });
    // setConfirmCode({
    //   ...confirmCode,
    //   [name]: value,
    // });
  };
  const handleFormClear = () => {
    setFormData(initialFormData);
    // setConfirmCode("");
  };
  const handleCloseError = () => {
    setError(false);
  };
  console.log(formData);
  console.log(loginformData);
  return {
    showPassword,
    handleShowPassword,
    formData,
    loginformData,
    handleInputChange,
    handleFormClear,
    handleCloseError,
   error,
  };
}
