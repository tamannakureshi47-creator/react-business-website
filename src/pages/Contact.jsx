import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
      }}
    >
      {/* Contact Section */}
      <section className="py-5">
        <div className="container">

          {/* Heading */}
          <div className="text-center pt-5 mb-4">
            <h1 className="fw-bold">Contact Us</h1>
          </div>

          {/* Contact Form */}
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <div
                className="d-flex align-items-center bg-white p-2"
                style={{
                  borderRadius: "50px",
                }}
              >
                {/* Name */}
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Enter Your Name"
                  style={{
                    borderRadius: "50px",
                    fontSize: "16px",
                  }}
                />

                {/* Email */}
                <input
                  type="email"
                  className="form-control border-0 shadow-none"
                  placeholder="Enter Your Email Address"
                  style={{
                    borderRadius: "50px",
                    fontSize: "16px",
                  }}
                />

                {/* Submit */}
                <button
                  className="btn btn-success px-4 fw-bold"
                  style={{
                    borderRadius: "50px",
                    whiteSpace: "nowrap",
                  }}
                >
                  SUBMIT
                </button>
              </div>

            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="row justify-content-center g-4 mt-4">

            {/* Call Us */}
            <div className="col-lg-3 col-md-6">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#008f5a",
                  borderRadius: "15px",
                  minHeight: "190px",
                }}
              >
                <h4 className="fw-bold">
                  Call US 📞
                </h4>

                <p className="mb-2 mt-4">
                  1 (234) 567-891
                </p>

                <p className="mb-0">
                  1 (234) 987-654
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="col-lg-3 col-md-6">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#008f5a",
                  borderRadius: "15px",
                  minHeight: "190px",
                }}
              >
                <h4 className="fw-bold">
                  📍 LOCATION
                </h4>

                <p className="mb-0 mt-4">
                  121 Rock Street, 21 Avenues.
                  <br />
                  New York, NY 2103-90000
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="col-lg-3 col-md-6">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#008f5a",
                  borderRadius: "15px",
                  minHeight: "190px",
                }}
              >
                <h4 className="fw-bold">
                  ⏰ HOURS
                </h4>

                <p className="mb-2 mt-4">
                  MON - Fri: 11am - 8pm
                </p>

                <p className="mb-0">
                  Sat - Sun: 6am - 8pm
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;