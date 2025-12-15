import React from "react";

export default function Home() {
  return (
    <section
      className="home d-flex justify-content-center align-items-center text-white"
      style={{ marginTop: "86px", minHeight: "calc(100vh - 106px)" }}
    >
      <div className="text-center">
        <img
          src="../assets/images/avataaars."
          alt="avatar"
          className="mb-3"
          width={250}
        />

        {/* STAR + TITLE */}
        <div className="text-center pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            start framework
          </h2>

          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
