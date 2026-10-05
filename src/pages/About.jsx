import React from "react";

const About = () => {
    return (
        <div>

            {/* ================= ABOUT SECTION ================= */}
            <section className="py-5">
                <div className="container">

                    <div className="row align-items-center">

                        {/* Image */}
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700"
                                alt="Team"
                                className="img-fluid"
                                style={{
                                    width: "400px",
                                    height: "400px",
                                    objectFit: "cover",
                                    borderRadius: "45% 55% 50% 50%"
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="col-md-6">

                            <h1 className="mb-2">About Us</h1>

                            <h4 className="fw-bold">who We Are</h4>

                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Magni ex optio officia quos nemo distinctio!
                            </p>

                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Magni ex optio officia quos nemo distinctio!
                            </p>

                            <button
                                className="btn btn-outline-success"
                            >
                                READ MORE →
                            </button>

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= PROJECT SECTION ================= */}
            <section className="py-5">

                <div className="container">

                    {/* Heading */}
                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Manage Project With
                            <span className="text-success">ProManage</span>
                        </h2>

                        <p className="text-secondary">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Incidunt, quae.
                        </p>

                    </div>


                    {/* Project Cards */}
                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-md-6">

                            <div
                                className="card h-100 border-0 shadow p-4"
                                style={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    borderRadius: "15px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-start">

                                    <h3 className="fw-bold">
                                        ProManage Essentials
                                    </h3>

                                    <span className="badge bg-success">
                                        Weekend
                                    </span>

                                </div>

                                <div className="mt-5">

                                    <p>10th December,Saturday</p>

                                    <p>10:00 AM to 12:00 PM</p>

                                    <p>Online</p>

                                    <button className="btn btn-success rounded-pill px-4 mt-3">
                                        Enroll Now →
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="col-md-6">

                            <div
                                className="card h-100 border-0 shadow p-4"
                                style={{
                                    borderRadius: "15px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-start">

                                    <h3 className="fw-bold">
                                        Advanced Project Planning
                                    </h3>

                                    <span className="badge bg-success">
                                        Weekend
                                    </span>

                                </div>

                                <div className="mt-5">

                                    <p>10th December,Saturday</p>

                                    <p>10:00 AM to 12:00 PM</p>

                                    <p>Online</p>

                                    <button className="btn btn-success rounded-pill px-4 mt-3">
                                        Enroll Now →
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Card 3 */}
                        <div className="col-md-6">

                            <div
                                className="card h-100 border-0 shadow p-4"
                                style={{
                                    borderRadius: "15px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-start">

                                    <h3 className="fw-bold">
                                        Team collaboration Mastery
                                    </h3>

                                    <span className="badge bg-success">
                                        Weekend
                                    </span>

                                </div>

                                <div className="mt-5">

                                    <p>10th December,Saturday</p>

                                    <p>10:00 AM to 12:00 PM</p>

                                    <p>Online</p>

                                    <button className="btn btn-success rounded-pill px-4 mt-3">
                                        Enroll Now →
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* Card 4 */}
                        <div className="col-md-6">

                            <div
                                className="card h-100 border-0 shadow p-4"
                                style={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    borderRadius: "15px"
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-start">

                                    <h3 className="fw-bold">
                                        Risk Management & Reporting
                                    </h3>

                                    <span className="badge bg-success">
                                        Weekend
                                    </span>

                                </div>

                                <div className="mt-5">

                                    <p>10th December,Saturday</p>

                                    <p>10:00 AM to 12:00 PM</p>

                                    <p>Online</p>

                                    <button className="btn btn-success rounded-pill px-4 mt-3">
                                        Enroll Now →
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default About;