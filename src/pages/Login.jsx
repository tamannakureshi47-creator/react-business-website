import React from "react";

const Login = () => {
  return (
    <section className="py-5">
      <div className="container">

        <div
          className="row justify-content-center align-items-center mx-auto shadow-sm"
          style={{
            maxWidth: "1100px",
            minHeight: "430px",
            backgroundColor: "#fff",
          }}
        >

          {/* ================= LEFT SIDE ================= */}
          <div className="col-lg-4 text-center p-5">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="Secure Login"
              className="img-fluid mb-3"
              style={{
                width: "210px",
                height: "150px",
                objectFit: "contain",
              }}
            />

            <h3 className="fw-bold">
              Secure Login
            </h3>

            <p className="text-secondary">
              Lorem ipsum dolor sit amet.
            </p>

          </div>


          {/* ================= LOGIN FORM ================= */}
          <div className="col-lg-4 p-4">

            <h2
              className="text-center fw-bold mb-4"
              style={{ color: "#008f63" }}
            >
              Login
            </h2>

            {/* Username */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Username *
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Your username"
                style={{
                  height: "47px",
                  borderRadius: "8px",
                }}
              />

            </div>


            {/* Password */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Password *
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter Your password"
                style={{
                  height: "47px",
                  borderRadius: "8px",
                }}
              />

            </div>


            {/* Remember Me */}
            <div className="form-check mb-4">

              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />

              <label
                className="form-check-label"
                htmlFor="remember"
              >
                Remember me
              </label>

            </div>


            {/* Login Button */}
            <button
              className="btn btn-success w-100"
              style={{
                height: "47px",
                borderRadius: "7px",
                backgroundColor: "#008f63",
              }}
            >
              Login
            </button>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="col-lg-4 p-5">

            <div className="mb-4">

              <a
                href="#"
                className="text-decoration-none fw-bold"
                style={{ color: "#008f63" }}
              >
                Forgot Password?
              </a>

            </div>


            <div className="mb-4">

              <a
                href="/register"
                className="text-decoration-none fw-bold"
                style={{ color: "#008f63" }}
              >
                Create New Account
              </a>

            </div>


            <p className="text-secondary">
              © 2025 ProManage
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Login;