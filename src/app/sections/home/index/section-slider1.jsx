// import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import bannerone from "../../../../assets/images/homepage-banner1.jpg";
import bannertwo from "../../../../assets/images/homepage-banner2.jpg";
register();

function SectionSlider1() {
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{ backgroundImage: `url(${bannertwo})` }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title text-shadow"
                  data-swiper-parallax="-300"
                >
                  Empowering Businesses
                </span>
                <h2 className="sx-bnr-1-large-title text-shadow">
                  Driving Innovation Through Technology.
                </h2>
                <div className="sx-bnr-1-info text-shadow">
                  We specialize in delivering cutting-edge technology solutions
                  that streamline operations, enhance productivity, and drive
                  sustainable growth. Our expertise ensures seamless innovation
                  tailored to your business needs.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="animate-charcter">Technology Solutions</h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${bannerone})`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title text-shadow"
                  data-swiper-parallax="-300"
                >
                  Transforming Digital Experiences
                </span>
                <h2 className="sx-bnr-1-large-title text-shadow">
                  Innovative IT Solutions for a Smarter Future.
                </h2>
                <div className="sx-bnr-1-info text-shadow">
                  We provide next-generation IT solutions designed to optimize
                  performance, enhance security, and scale businesses
                  effectively. Our tailored approach ensures success in an
                  ever-evolving digital landscape.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="sx-title">Digital Excellence</h1>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>

        {/* !swiper slides */}
        {/* Add Arrows */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </>
  );
}

export default SectionSlider1;
