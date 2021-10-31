import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  formIsValid = nameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    nameReset();
    emailReset();
  };

  const nameClasses = !nameHasError ? "form-control" : "form-control invalid";
  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameHasError && <p className="error-text">Enter a valid Name!</p>}
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailHasError && <p className="error-text">Enter a valid Email!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
