import React from "react";

const Register = () => {
  return (
    <div>

      {/* ================= REGISTER SECTION ================= */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-start">

            {/* ================= LEFT CONTENT ================= */}
            <div className="col-lg-7 pe-lg-5">

              <h1 className="fw-bold mb-4">
                Manage Projects With Ease-
                <span className="text-success"> ProManage</span>
              </h1>

              <p className="text-secondary fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ullam suscipit quia, corrupti dolorem vitae quas
                non itaque sint dolorum?
              </p>

              <p className="text-secondary fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ullam suscipit quia, corrupti dolorem vitae quas
                non itaque sint dolorum?
              </p>

              <p className="text-secondary fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ullam suscipit quia, corrupti dolorem vitae quas
                non itaque sint dolorum?
              </p>

              <p className="text-secondary fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ullam suscipit quia, corrupti dolorem vitae quas
                non itaque sint dolorum?
              </p>

              {/* Buttons */}
              <div className="mt-4">

                <button
                  className="btn btn-outline-success me-3 px-4 py-2"
                  style={{ borderRadius: "7px" }}
                >
                  Learn More
                </button>

                <button
                  className="btn btn-success px-4 py-2"
                  style={{ borderRadius: "7px" }}
                >
                  Start Now
                </button>

              </div>

            </div>


            {/* ================= REGISTER FORM ================= */}
            <div className="col-lg-5 mt-4 mt-lg-0">

              <div
                className="card shadow-sm p-4"
                style={{
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              >

                <h2 className="text-center fw-bold mb-4">
                  Register Now
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    style={{
                      height: "58px",
                      borderRadius: "10px",
                    }}
                  />
                </div>


                {/* Email */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    style={{
                      height: "58px",
                      borderRadius: "10px",
                    }}
                  />
                </div>


                {/* Phone */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Phone
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    style={{
                      height: "58px",
                      borderRadius: "10px",
                    }}
                  />
                </div>


                {/* Select Plan */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Select plan
                  </label>

                  <select
                    className="form-select"
                    style={{
                      height: "58px",
                      borderRadius: "10px",
                    }}
                  >
                    <option>Free Plan</option>
                    <option>Basic Plan</option>
                    <option>Premium Plan</option>
                  </select>
                </div>


                {/* Register Button */}
                <button
                  className="btn btn-success w-100 py-3 fs-5"
                  style={{
                    borderRadius: "7px",
                  }}
                >
                  Register Now
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= PROJECT POWER SECTION ================= */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Unlock Your Project Power
            </h2>

            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsam, doloremque!
            </p>

          </div>


          {/* Cards */}
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                  className="card-img-top"
                  alt="Smart Planning"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    Smart Planning
                  </h5>

                  <p className="text-secondary mb-0">
                    Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </div>

            </div>


            {/* Card 2 */}
            <div className="col-lg-3 col-md-6">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600"
                  className="card-img-top"
                  alt="Creative Boreads"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    Creative Boreads
                  </h5>

                  <p className="text-secondary mb-0">
                    Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </div>

            </div>


            {/* Card 3 */}
            <div className="col-lg-3 col-md-6">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
                  className="card-img-top"
                  alt="Collaboration"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    Collaboration
                  </h5>

                  <p className="text-secondary mb-0">
                    Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </div>

            </div>


            {/* Card 4 */}
            <div className="col-lg-3 col-md-6">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600"
                  className="card-img-top"
                  alt="AI Support"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    AI Support
                  </h5>

                  <p className="text-secondary mb-0">
                    Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Register;