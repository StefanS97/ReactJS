import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = !isEmpty(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Enter a valid Name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Enter a valid Street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.postal && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formValidity.postal && <p>Enter a valid Postal Code!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Enter a valid City!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
