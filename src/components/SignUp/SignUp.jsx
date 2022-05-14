import React from "react";
import "./SignUp.css";

const SignUp = () => {

  return (
    <form>
      <div className="maincontainer">
        <div class="container-fluid">
          <div class="row no-gutter">
            <div class="col-md-6 d-none d-md-flex bg-image"></div>

            <div class="col-md-6 bg-light">
              <div class="login d-flex align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-10 col-xl-7 mx-auto">
                      <h3 class="display-4">Sign Up</h3>
                      <p class="text-muted mb-4">Create an account</p>
                      <form>
                        <div class="form-group mb-3">
                          <input
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                            class="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <input
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                        <div class="text-center d-flex justify-content-between mt-4">
                          <p>Already a customer?</p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;