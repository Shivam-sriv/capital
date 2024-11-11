
export const submitData = (states, methods) => {

    const { FullName, MobileNumber, Email, Subject,isVarified } = states
    const {setFullNameError, setMobileNumberError, setEmailError, setSubjectError,setIsVarifiedError } = methods
    const data_err = [];
    if (FullName == '') {
      let isValid = { FullName: "1" };
      data_err.push(isValid);
      setFullNameError("Mandatory Field")
    } else {
      setFullNameError("")
    }
    if (!isVarified) {
      let isValid = { isVarified: "1" };
      data_err.push(isValid);
      setIsVarifiedError("Mandatory Field")
    } else {
      setIsVarifiedError("")
    }
    // Subject Validation
    if (Subject == '') {
      let isValid = { Subject: "1" };
      data_err.push(isValid);
      setSubjectError("Mandatory Field")
    } else {
      setSubjectError("")
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
    const mobileValid = mobPattern.test(MobileNumber);
    if (MobileNumber == '') {
      let isValid = { MobileNumber: "1" };
      data_err.push(isValid);
      setMobileNumberError("Mandatory Field")
    } else if (mobileValid == false) {
      let isValid = { MobileNumber: "1" };
      data_err.push(isValid);
      setMobileNumberError("Mobile No is Invalid")
    } else {
      setMobileNumberError("")
  
    }
    return data_err.length;
  
  }