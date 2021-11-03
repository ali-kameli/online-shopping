import React, { useRef, useState } from "react";
import digi from "../assets/digistore.png";
import "./SignIn.css";
import SimpleReactValidator from "simple-react-validator";
import { signin } from "../../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();
  const history = useHistory();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "This field is required",
        min: "This field should not be less than 5 characters",
        email: "The email was not entered correctly",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      if (validator.current.allValid()) {
        const { status, data } = await signin(user);
        if (status === 200) {
          toast.success("Login successfully", {
            position: "top-right",
            closeOnClick: true,
          });
          localStorage.setItem("token", data.token);
          history.replace("/");
          // reset();
        }
      } else {
        validator.current.showMessages();

        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Error to login", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="container-fluid container-sign-in py-5">
      <div className="row pt-5">
        <div
          className="col-12 col-md-9 col-lg-2 p-0
         offset-md-1 offset-lg-4 form-sign-in"
        >
          <form
            onSubmit={handleSubmit}
            className="form-contorol forms-in-sign"
          >
            {/* Email input group  */}
            <div className="input-group mb-2">
              <input
                type="text"
                aria-describedby="email-address"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />

              <div className="input-group-prepend">
                <span className="input-group-text  span-icon">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <div>
                {validator.current.message("email", email, "required|email")}
              </div>
            </div>
            {/*End Email input group  */}

            {/*password input group  */}
            <div className="input-group  mb-2">
              <input
                type="password"
                placeholder=" password"
                name="password"
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />

              <div className="input-group-prepend">
                <span className="input-group-text span-icon">
                  <i className="fa fa-lock"></i>
                </span>
                <div></div>
              </div>
            </div>
            {validator.current.message("password", password, "required|min:5")}
            {/*End password input group  */}
            {/* bootstrap modal  */}
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
              >
                Login info
              </button>
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h6 className="modal-title">
                        for login the website use Bottem form(email & password)
                      </h6>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Email : eve.holt@reqres.in</p>
                      <p>password : cityslicka</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="" className="btn-sign-in btn">
                Sign In
              </button>
            </div>
            {/* End bootstrap modal  */}
            <div>
            </div>
          </form>
        </div>
        <div className="col-1 p-0 d-none d-lg-block border-form"></div>
        <div clasName=" col-12 col-md-2 col-lg-4  logo-sign-in">
          <img src={digi} alt="digi" className="w-100 d-none d-lg-block" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
