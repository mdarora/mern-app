import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import regSvg from "../images/register.svg";
import loader from "../images/Spinner-1s-200px.svg";
import lock from "../images/password.svg";

const VerifyOtp = ({ isLoggedin }) => {
  const history = useHistory();
  if (isLoggedin) {
    history.push("/");
  }

  const [enteredOtp, setEnteredOtp] = useState('')
  const [resultMsg, setresultMsg] = useState("");

//   const handleInputs = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };

  const matchOtp = async (e) => {
    e.preventDefault();
    const registerLoader = document.getElementById("register-loader");
    const resultMsg = document.getElementById("result-msg");

    try {
      setresultMsg("");
      registerLoader.hidden = false;
      const res = await fetch("http://localhost:5000/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            enteredOtp
        }),
      });

      const result = await res.json();

      if (result.message) {
        registerLoader.hidden = true;
        setresultMsg(result.message);
        resultMsg.classList.add("text-success");
        resultMsg.classList.remove("text-danger");
        // setTimeout(() => {
        //   history.push("/login");
        // }, 2000);
      } else {
        registerLoader.hidden = true;
        setresultMsg(result.error);
        resultMsg.classList.remove("text-success");
        resultMsg.classList.add("text-danger");
      }
    } catch (error) {
      registerLoader.hidden = true;
      setresultMsg("Something went wrong !");
      resultMsg.classList.remove("text-success");
      resultMsg.classList.add("text-danger");
    }
  };

  return (
    <>
      <section className="register">
        <div className="container">
          <div className="reg-box">
            <div className="row">
              <div className="col-sm-6">
                <div className="reg-form-area h-100">
                  <h4>Verify OTP</h4>
                  <form
                    method="POST"
                    onSubmit={matchOtp}
                    className="reg-form h-75 otp-form "
                  >
                    <div className="field pb-2">
                      <label htmlFor='otp'>
                        <img src={lock} alt="otp code icon" width='15' />
                      </label>
                      <input
                        type="text"
                        id='otp'
                        placeholder='Enter OTP here'
                        name='otp'
                        autoComplete="off"
                        value={enteredOtp}
                        onChange={(e) => (setEnteredOtp(e.target.value))}
                        required
                      />
                    </div>
                    
                    <p id="result-msg" className="text-success">
                      {resultMsg}
                      <img
                        src={loader}
                        alt="Loading"
                        width="30"
                        id="register-loader"
                        hidden
                      />
                    </p>

                    <div className="form-btn mt-2">
                      <button type="submit">Submit OTP</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="register-side-img">
                  <figure className="text-center">
                    <img src={regSvg} alt="Register" />
                  </figure>
                  <p>
                    Already registered ? |{" "}
                    <Link className="login-link" to="/login">
                      Login here
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyOtp;
