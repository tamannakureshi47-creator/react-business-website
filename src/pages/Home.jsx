import React from "react";

const Home = () => {
  return (
    <div>
      {/* Section 1 - Hero */}
      <header
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8MHx8MHx8fDA%3D')",
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></div>

        {/* Hero Content */}
        <div
          className="container position-relative"
          style={{ zIndex: 2, color: "white" }}
        >
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1>Manage Project with Ease - ProManage</h1>

              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi doloremque nostrum cumque. Provident, id hic nisi
                placeat eum corporis voluptatibus?
              </p>

              <a href="#" className="btn btn-success me-2">
                Get Started
              </a>

              <a href="#" className="btn btn-outline-light">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2 - Why Choose Us */}
      <section className="py-5">
        <h2 className="mb-4 text-center">Why Choose Us?</h2>

        <div className="row mx-0">
          {/* Card 1 */}
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Quality</h5>

                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, aspernatur?
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">reliability</h5>

                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, aspernatur?
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Support</h5>

                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, aspernatur?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Get Started */}
      <section className="bg-success text-white text-center py-5 mx-3 rounded">
        <h2>get Started Today!</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Velit, natus.
        </p>

        <button className="btn btn-light">Register Now</button>
      </section>
    </div>
  );
};

export default Home;