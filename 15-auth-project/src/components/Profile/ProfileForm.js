import { useRef, useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const newPassword = newPasswordRef.current.value;

    // optional - add vavlidation

    // https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC4z8kS9-ILE_miApUkFF-aL5GC0Ihaxfw
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC4z8kS9-ILE_miApUkFF-aL5GC0Ihaxfw",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption: always succeeds
      history.replace("/");
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordRef}
          minLength="7"
          required
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
