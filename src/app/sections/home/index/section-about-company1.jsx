import ItodoImage from "../../../elements/itodo-img";
import imageone from "../../../../assets/images/sectionaboutcompany.jpg";
function SectionAboutCompany1() {
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
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={imageone} alt="aboutcompanyimage" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Welcome to LOOP DECODE</h2>
                    <span className="sx-title-2">
                      Driving Digital Transformation with Cutting-Edge Solutions
                    </span>
                    <p>
                      At LOOP DECODE, we are committed to redefining businesses
                      through innovative technology solutions. Our team of
                      skilled professionals, including developers, designers,
                      and strategists, collaborates to craft cutting-edge
                      solutions that drive efficiency, scalability, and growth.
                    </p>
                    <p>
                      We specialize in harnessing the latest advancements in AI,
                      blockchain, cloud computing, and software development to
                      empower businesses across industries. Our customer-centric
                      approach ensures that every solution is tailored to meet
                      specific needs, transforming challenges into opportunities
                      for success.
                    </p>
                    <p>
                      With a focus on quality, innovation, and integrity, we
                      help organizations stay ahead in the fast-evolving digital
                      landscape. Partner with us to unlock new possibilities and
                      drive your business towards a smarter, more connected
                      future.
                    </p>
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

export default SectionAboutCompany1;
