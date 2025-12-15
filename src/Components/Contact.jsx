export default function Contact() {
  return (
    <section className="container my-5 ">
      <h2 className="text-center text-uppercase fw-bolder">
        Contact Section
      </h2>

      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="line me-3 bg-black"></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3 bg-black"></div>
      </div>

      <form className="w-50 mx-auto">
        <input className="form-control border-0 border-bottom py-3 mb-3" placeholder="User Name" />
        <input className="form-control border-0 border-bottom py-3 mb-3" placeholder="User Age" />
        <input className="form-control border-0 border-bottom py-3 mb-3" placeholder="User Email" />
        <input className="form-control border-0 border-bottom py-3 mb-3" placeholder="User Password" />

        <button className="btn text-white" style={{ backgroundColor: "#1abc9c" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}
