import React, { useState } from "react";
import "./FormComponent.css";

export const FormComponent = () => {
  const [formChange, setFormChange] = React.useState(false);

  const [activateAnimation, setActivateAnimation] = useState(false);

  const formChangeHandler = () => {
    setActivateAnimation(!activateAnimation)
    setFormChange(!formChange);
  };
  return (
    <section className={`form-component ${formChange ? "left" : ""}`}>
      {!formChange ? (
        <div className="form-box">
          <div className="form">
            <div className="form__header">
              <h1>sign in</h1>
              <div className="form___icons">
                <div className="icons">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icons">
                  <i class="fa-brands fa-github"></i>
                </div>
                <div className="icons">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <p>or sign in using your email and password</p>

            <div className="input-fields">
              <div className="inputfield">
                <input type="text" />
              </div>
              <div className="inputfield">
                <input type="text" />
              </div>

              <button className="btn primary">sign in</button>
            </div>
          </div>
          <div className="form-box__content">
            <h1>hello there!!</h1>
            <p>Don't have an account?</p>
            <button className="btn secondary" onClick={formChangeHandler}>
              sign up
            </button>
          </div>
        </div>
      ) : (
        <div className="form-box">
          <div className="form-box__content">
            <h1>hello there!!</h1>
            <p>already have an account?</p>
            <button className="btn secondary" onClick={formChangeHandler}>
              sign in
            </button>
          </div>
          <div className="form">
            <div className="form__header">
              <h1>sign up</h1>
              <div className="form___icons">
                <div className="icons">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icons">
                  <i class="fa-brands fa-github"></i>
                </div>
                <div className="icons">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <p>or sign up using your email and password</p>

            <div className="input-fields">
              <div className="inputfield">
                <input type="text" />
              </div>
              <div className="inputfield">
                <input type="text" />
              </div>

              <button className="btn primary">sign up</button>
            </div>
          </div>
        </div>
      )}

      <div className="background"></div>
    </section>
  );
};
