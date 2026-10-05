import React from "react";

const Services = () => {
    return (
        <div>

            {/* Services Header */}
            <section
                className="py-5"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "420px",
                }}
            >

                <div className="container text-center text-white">

                    <h1 className="fw-bold pt-5 mt-5">
                        OUR SERVICES
                    </h1>

                </div>

            </section>


            {/* Service Cards */}
            <section
                className="pb-5"
                style={{
                    marginTop: "-145px",
                }}
            >

                <div className="container">

                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-lg-3 col-md-6">

                            <div
                                className="card border-0 shadow text-center h-100"
                                style={{
                                    borderRadius: "15px",
                                    minHeight: "290px",
                                }}
                            >

                                <div className="card-body p-4">

                                    <i
                                        className="bi bi-bicycle"
                                        style={{
                                            fontSize: "45px",
                                            color: "#198754",
                                        }}
                                    ></i>

                                    <h4 className="fw-bold mt-4">
                                        WorkOuts
                                    </h4>

                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam, ea?
                                    </p>

                                    <a
                                        href="#"
                                        className="fw-bold"
                                        style={{
                                            color: "#198754",
                                        }}
                                    >
                                        MORE
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="col-lg-3 col-md-6">

                            <div
                                className="card border-0 shadow text-center h-100"
                                style={{
                                    borderRadius: "15px",
                                    minHeight: "290px",
                                }}
                            >

                                <div className="card-body p-4">

                                    <i
                                        className="bi bi-people"
                                        style={{
                                            fontSize: "45px",
                                            color: "#198754",
                                        }}
                                    ></i>

                                    <h4 className="fw-bold mt-4">
                                        Community
                                    </h4>

                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam, ea?
                                    </p>

                                    <a
                                        href="#"
                                        className="fw-bold"
                                        style={{
                                            color: "#198754",
                                        }}
                                    >
                                        MORE
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* Card 3 */}
                        <div className="col-lg-3 col-md-6">

                            <div
                                className="card border-0 shadow text-center h-100"
                                style={{
                                    borderRadius: "15px",
                                    minHeight: "290px",
                                }}
                            >

                                <div className="card-body p-4">

                                    <i
                                        className="bi bi-award"
                                        style={{
                                            fontSize: "45px",
                                            color: "#198754",
                                        }}
                                    ></i>

                                    <h4 className="fw-bold mt-4">
                                        Membership
                                    </h4>

                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam, ea?
                                    </p>

                                    <a
                                        href="#"
                                        className="fw-bold"
                                        style={{
                                            color: "#198754",
                                        }}
                                    >
                                        MORE
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* Card 4 */}
                        <div className="col-lg-3 col-md-6">

                            <div
                                className="card border-0 shadow text-center h-100"
                                style={{
                                    borderRadius: "15px",
                                    minHeight: "290px",
                                }}
                            >

                                <div className="card-body p-4">

                                    <i
                                        className="bi bi-calendar-event"
                                        style={{
                                            fontSize: "45px",
                                            color: "#198754",
                                        }}
                                    ></i>

                                    <h4 className="fw-bold mt-4">
                                        Events
                                    </h4>

                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam, ea?
                                    </p>

                                    <a
                                        href="#"
                                        className="fw-bold"
                                        style={{
                                            color: "#198754",
                                        }}
                                    >
                                        MORE
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Services;