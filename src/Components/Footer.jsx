export default function Footer() {
  return (
    <>
      <footer className="footer text-white pt-5">
        <div className="container">
          <div className="row text-center">

            {/* Location */}
            <div className="col-md-4 mb-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            {/* Social */}
            <div className="col-md-4 mb-4">
              <h3>AROUND THE WEB</h3>
              <div className="icons mt-3">
                <i className="fa-brands fa-facebook mx-2 icon"></i>
                <i className="fa-brands fa-twitter mx-2 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-2 icon"></i>
                <i className="fa-solid fa-globe mx-2 icon"></i>
              </div>
            </div>

            {/* About */}
            <div className="col-md-4 mb-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>

          </div>
        </div>
      </footer>

      <div className="footer-bottom text-center text-white py-3">
        <p className="mb-0">Copyright © Your Website 2025</p>
      </div>
    </>
  );
}
