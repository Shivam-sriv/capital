
export const submitData = (states, methods) => {

  const { Name, Mobile, Email, PostAppliedFor, Cv ,isVarified} = states
  const { setNameError, setEmailError, setMobileError, setPostAppliedForError, setCvError,setIsVarifiedError } = methods
  // console.log("Cvv", Cv);
  const data_err = [];
  if (Name == '') {
    let isValid = { Name: "1" };
    data_err.push(isValid);
    setNameError("Mandatory Field")
  } else {
    setNameError("")
  }
  if (!isVarified) {
    let isValid = { isVarified: "1" };
    data_err.push(isValid);
    setIsVarifiedError("Mandatory Field")
  } else {
    setIsVarifiedError("")
  }
  // PostAppliedFor Validation
  if (PostAppliedFor == '') {
    let isValid = { PostAppliedFor: "1" };
    data_err.push(isValid);
    setPostAppliedForError("Mandatory Field")
  } else {
    setPostAppliedForError("")
  }

  if (!Cv) {
    let isValid = { Cv: "1" };
    data_err.push(isValid);
    setCvError("Mandatory Field")
  } else {
    setCvError("")
  }

  // Email Validation
  const emailRegex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
  const EmailValid = emailRegex.test(Email)
  if (Email == '') {
    let isValid = { Email: "1" };
    data_err.push(isValid);
    setEmailError("Mandatory Field")
  } else if (EmailValid == false) {
    let isValid = { Email: "1" };
    data_err.push(isValid);
    setEmailError("Email Id is Invalid")
  } else {
    setEmailError("")

  }

  //mobile No validation
  const mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[6789]\d{9}$/;
  const mobileValid = mobPattern.test(Mobile);
  if (Mobile == '') {
    let isValid = { Mobile: "1" };
    data_err.push(isValid);
    setMobileError("Mandatory Field")
  } else if (mobileValid == false) {
    let isValid = { Mobile: "1" };
    data_err.push(isValid);
    setMobileError("Mobile No is Invalid")
  } else {
    setMobileError("")

  }
  return data_err.length;

}