import SectionHeading from "../SectionHeading";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../Buttons";
import { Link } from "react-router-dom";

const ServiceSection3 = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_white_color`,
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
    <div className="container">
      <SectionHeading
        variant={"cs_type_1"}
        SectionSubtitle={data.sectionSubtitle}
        SectionTitle={data.sectionTitle}
        SectionDescription={data.description}
      />

      <div className="cs_height_50 cs_height_lg_50" />
      <div className="cs_slider cs_style_1 cs_slider_gap_24">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Slider {...settings}>
              {data.slides.map((slide, index) => (
                <div className="cs_slide" key={index}>
                  <div className="cs_iconbox cs_style_7">
                    <Link
                      to={slide.detailsLink}
                      className="cs_iconbox_thumbnail"
                    >
                      <img src={slide.imageUrl} alt="Image" />
                    </Link>
                    <div className="cs_iconbox_content">
                      <div
                        className="cs_iconbox_overlay cs_bg_filed"
                        style={{
                          backgroundImage: `url(${slide.bgImagUrl})`,
                        }}
                      />
                      <div className="cs_iconbox_icon cs_center">
                        <img src={slide.icon} alt="Icon" />
                      </div>
                      <h3 className="cs_iconbox_title">
                        <Link to={slide.detailsLink}>{slide.title}</Link>
                      </h3>
                      <p className="cs_iconbox_subtitle">{slide.subtitle}</p>

                      <Button
                        btnIcons={<FaAngleRight />}
                        btnText={slide.detailsText}
                        btnUrl={slide.detailsLink}
                        variant={"cs_iconbox_btn"}
                      />

                      <div className="cs_iconbox_shape_1 position-absolute" />
                      <div className="cs_iconbox_shape_2 position-absolute" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection3;
