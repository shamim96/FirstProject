const validate = (value, rules, connectedValue) => {
    let val = value.trim()
    let isValid = true;
    console.log(rules)
    for (let rule in rules) {
        console.log("first")
      switch (rule) {
        case "isEmail":
          isValid = isValid && emailValidator(val);
          console.log("in")
          break;
        case "minLength":
          isValid = isValid && minLengthValidator(val, rules[rule]);
          break;
        case "equalTo":
          isValid = isValid && equalToValidator(val, connectedValue[rule]);
          break;
        default:
          isValid = true;
      }
    }
    console.log(isValid)
    return isValid;
  };
  
  const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      val
    );
  };
  
  const minLengthValidator = (val, minLength) => {
      return val.length >= minLength;
  };
  
  const equalToValidator = (val, checkValue) => {
      return val === checkValue;
  };
  
  export default validate;