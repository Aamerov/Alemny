import { Navigate, Route } from "react-router-dom";
import google from "./../assets/imgs/google.svg";
import facebook from "./../assets/imgs/facebook.svg";
import poster from "./../assets/imgs/auth.svg";
import { useState } from "react";
import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import "./signup.css";
const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [secondNameError, setSecondNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [secondName, setSecondName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorM, setErrorM] = useState("");
  const patterns = {
    firstName: /^([a-z]|[\u0621-\u064A]){2,12}$/i,
    secondName: /^([a-z]|[\u0621-\u064A]){2,12}$/i,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    mobileNumber: /^\+[0-9]{2}[0-9]{10}(?:x.+)?$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  const validate = (e) => {
    const field = e.target.attributes[2].value;
    const regex = patterns[field];
    const result = regex.test(e.target.value);
    if (field === "firstName") {
      if (result === false) {
        setFirstNameError("please write 2 characters at least");
        e.target.classList.remove("success");
        e.target.classList.add("alert");
      } else {
        e.target.classList.remove("alert");
        e.target.classList.add("success");
        setFirstNameError("");
      }
    } else if (field === "secondName") {
      if (result === false) {
        setSecondNameError("please write 2 characters at least");
        e.target.classList.remove("success");
        e.target.classList.add("alert");
      } else {
        e.target.classList.remove("alert");
        e.target.classList.add("success");
        setSecondNameError("");
      }
    } else if (field === "email") {
      if (result === false) {
        setEmailError("please write a valid email address");
        e.target.classList.remove("success");
        e.target.classList.add("alert");
      } else {
        e.target.classList.remove("alert");
        e.target.classList.add("success");
        setEmailError("");
      }
    } else if (field === "mobileNumber") {
      if (result === false) {
        setMobileNumberError(
          "please write mobileNumber like follows : +201227899000"
        );
        e.target.classList.remove("success");
        e.target.classList.add("alert");
      } else {
        e.target.classList.remove("alert");
        e.target.classList.add("success");
        setMobileNumberError("");
      }
    } else if (field === "password") {
      if (result === false) {
        setPasswordError(
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        );
        e.target.classList.remove("success");
        e.target.classList.add("alert");
      } else {
        e.target.classList.remove("alert");
        e.target.classList.add("success");
        setPasswordError("");
      }
    }
  };

  const register = async (e) => {
    e.preventDefault();
    if (
      registerEmail !== "" &&
      registerPassword !== "" &&
      firstName !== "" &&
      secondName !== "" &&
      registerEmail !== "" &&
      mobileNumber !== ""
    ) {
      document.querySelectorAll(".register__input").forEach((input) => {
        input.classList.remove("alert");
      });
      try {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
      } catch (error) {
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErrorM("Please write a valid email");
        }
      }
      setRedirect(true);
      const userCollectionRef = collection(db, "users");
      await addDoc(userCollectionRef, {
        email: registerEmail,
        firstName: firstName,
        secondName: secondName,
        mobileNumber: mobileNumber,
      });
    } else {
      document.querySelectorAll(".register__input").forEach((input) => {
        input.classList.add("alert");
      });
      setErrorM("Please fill out all the feilds");
    }
  };

  return (
    <div className="signup">
      <header className="d-flex align-items-center justify-content-center text-white">
        <p className="text-center mb-0">
          Join now and enjoy your first free course
        </p>
      </header>
      <section id="login">
        <div className="container">
          <div className="row mx-0 w-100">
            <div className="col-md-5 text-center order-1 order-md-0">
              <h1>Lets Sign you up</h1>
              <p className="register">
                write your information correctly so we can reach you as soon as
                possible ! &#128512;
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control register__input"
                    id="firstName"
                    placeholder="First Name"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    onInput={validate}
                  />
                  <h5 className="error-message">{firstNameError}</h5>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control register__input"
                    id="secondName"
                    placeholder="Family Name"
                    onChange={(event) => {
                      setSecondName(event.target.value);
                    }}
                    onInput={validate}
                  />
                  <h5 className="error-message">{secondNameError}</h5>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control register__input"
                    id="mobileNumber"
                    placeholder="Phone Number"
                    onChange={(event) => {
                      setMobileNumber(event.target.value);
                    }}
                    onInput={validate}
                  />
                  <h5 className="error-message">{mobileNumberError}</h5>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control register__input"
                    id="email"
                    placeholder="Email"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                    onInput={validate}
                  />
                  <h5 className="error-message">{emailError}</h5>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control register__input"
                    id="password"
                    placeholder="Password"
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    onInput={validate}
                  />
                  <h5 className="error-message">{passwordError}</h5>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control register__input"
                    placeholder="Retype password"
                  />
                </div>
                <h5 className="error-message">{errorM}</h5>
                <div className="mt-3">
                  <button className="btn btn-primary w-100" onClick={register}>
                    Sign up
                  </button>
                </div>
                <span className="or fw-bolder">or</span>
                <div className="mt-3">
                  <button className="btn btn-primary google w-100 d-flex align-items-center justify-content-center">
                    <img src={google} className="" alt="" />
                    <span>Sign-in with google</span>
                  </button>
                  <button className="btn btn-primary facebook w-100 d-flex align-items-center justify-content-center mt-3">
                    <img src={facebook} className="" alt="" />
                    <span>Sign-in with facebook</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 order-0 order-md-1 d-flex justify-content-end signup__img">
              <img src={poster} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      {redirect && <Navigate to="/success" replace={true} />}
    </div>
  );
};

export default Signup;
