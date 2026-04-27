import { FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";

const ProcessSection = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_accent_color`,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <SectionHeading
          variant={"cs_type_1"}
          SectionSubtitle={data.sectionSubtitle}
          SectionTitle={data.sectionTitle}
          SectionDescription={data.sectionDescription}
        />

        <div className="cs_height_135 cs_height_lg_115" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24 position-relative">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper cs_remove_overflow">
              <Slider {...settings}>
                {data?.processSlides.map((slide) => (
                  <div className="cs_slide" key={slide.id}>
                    <div className="cs_card cs_style_6">
                      <div
                        className="cs_card_shape cs_bg_filed"
                        style={{
                          backgroundImage: `url(${slide.bgImageUrl})`,
                        }}
                      />
                      <div className="cs_card_thumbnail cs_center">
                        <img src={slide.imageUrl} alt={slide.title} />
                      </div>
                      <div className="cs_card_info">
                        <h3 className="cs_card_title">
                          <Link to={slide.link}>{slide.title}</Link>
                        </h3>
                        <p className="cs_card_subtitle mb-0">
                          {slide.subtitle}
                        </p>
                      </div>
                      <Link to={slide.link} className="cs_card_btn cs_center">
                        <i>
                          <FaChevronCircleRight />
                        </i>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="cs_height_20 cs_height_lg_20" />
          <div className="cs_pagination cs_style_2 cs_accent_color" />
        </div>
      </div>
    </>
  );
};

export default ProcessSection;
