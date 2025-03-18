import { NavLink } from "react-router-dom";
import iconone from "../../../../assets/images/png/iconone.png";
import icontwo from "../../../../assets/images/png/icontwo.png";
import iconthree from "../../../../assets/images/png/iconthree.png";
function SectionServices1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light"
        // style={{ background: "red" }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Who We Are?</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Transforming Businesses with Cutting-Edge Technology
              </h2>
            </div>
            <p>
              At LOOP DECODE, we are dedicated to helping businesses embrace
              digital transformation through cutting-edge technology solutions.
              Our mission is to empower organizations with scalable, secure, and
              future-ready solutions that drive efficiency, enhance customer
              experiences, and foster growth. We believe in building long-term
              partnerships, providing solutions that evolve with your business
              needs, ensuring sustained success in an ever-changing digital
              landscape.
            </p>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-our-services-bx">
              <div className="row">
                {/* Block one */}
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <img src={iconone} alt="logo" width={110} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">
                          Innovative & Experienced Team
                        </h4>
                        <p>
                          Our team of technology experts, including developers,
                          designers, and strategists, brings a wealth of
                          experience across various industries. With a passion
                          for innovation, we work collaboratively to craft
                          solutions tailored to your business objectives,
                          ensuring efficiency, scalability, and impact.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/about-us"
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Two */}
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <img src={icontwo} alt="logo" width={110} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Technology-Driven Growth</h4>
                        <p>
                          We specialize in leveraging emerging technologies such
                          as AI, blockchain, cloud computing, and automation to
                          enhance business operations. Our approach integrates
                          advanced digital solutions to optimize workflows,
                          boost productivity, and unlock new growth
                          opportunities.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/about-us"
                            className="site-button-circle "
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Three */}
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <img src={iconthree} alt="logo" width={110} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Commitment to Excellence</h4>
                        <p>
                          Quality and security are at the core of our solutions.
                          We adhere to industry best practices, ensuring that
                          every project meets the highest standards of
                          functionality, scalability, and security. Our
                          commitment to excellence ensures that our clients
                          receive solutions that drive measurable results and
                          long-term success.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/about-us"
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionServices1;
