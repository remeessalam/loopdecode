import ItodoImage from "../../../elements/itodo-img";
import ourresult from "../../../../assets/images/ourresult.jpg";
function Sectionourresult() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      Driving Success Through Innovation
                    </h2>
                    <p>
                      Our technology solutions are built with a clear objective:
                      to drive real, measurable success. By focusing on
                      strategic innovation, efficiency, and scalability, we
                      ensure that our solutions not only meet but exceed your
                      business goals.
                    </p>
                    <p>
                      We prioritize outcomes that enhance operational
                      performance, streamline processes, and unlock new growth
                      opportunities. Our commitment to delivering high-impact
                      solutions is reflected in the success of our clients and
                      the value we bring to their businesses.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={ourresult} alt="our solution" />
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

export default Sectionourresult;
