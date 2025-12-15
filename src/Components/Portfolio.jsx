import React from "react";

export default function Portfolio() {
  const images = [
    "/src/assets/images/poert1.png",
    "/src/assets/images/port2.png",
    "/src/assets/images/port3.png",
    "/src/assets/images/poert1.png",
    "/src/assets/images/port2.png",
    "/src/assets/images/port3.png",
  ];

  return (
    <section className="portfolio py-5 mt-5">
      {/* TITLE */}
      <div className="text-center mb-4">
        <h2 className="text-uppercase fs-1 fw-bolder text-dark">
          portfolio component
        </h2>

        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 bg-dark"></div>
          <i className="fa-solid fa-star text-dark"></i>
          <div className="line ms-3 bg-dark"></div>
        </div>
      </div>

      {/* GRID */}
      <div className="container">
        <div className="row g-4">
          {images.map((img, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="portfolio-item position-relative rounded-3 overflow-hidden">
                <img src={img} alt="portfolio" className="w-100 rounded-3" />

                <div className="portfolio-layer d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
