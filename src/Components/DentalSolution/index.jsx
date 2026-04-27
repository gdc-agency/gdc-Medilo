import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import Slider from "react-slick";

const DentalSolution = ({ data }) => {
  const [rating, setRating] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_accent_color cs_flex_left`,
  };
  return (
    <>
      <div className="container">
        <div
          className={`cs_dental_slider_wrapper ${data.wrapperClass} position-relative`}
        >
          <div className="cs_section_heading cs_style_1">
            <p className="cs_section_subtitle cs_accent_color">
              <span className="cs_shape_left" />
              {data.subtitle}
            </p>
            <h2 className="cs_section_title cs_white_color">{data.title}</h2>
          </div>
          <div className="cs_height_15 cs_height_lg_15" />
          <div className="cs_slider cs_style_1 cs_slider_gap_24 position-relative">
            <div className="cs_slider_container">
              <div className="cs_slider_wrapper">
                <Slider {...settings}>
                  {data.slides.map((slide, index) => (
                    <div className="cs_slide" key={index}>
                      <div className="cs_testimonial cs_style_1">
                        <div className="cs_testimonial_info">
                          <p className="cs_testimonial_heading cs_white_color cs_medium">
                            {slide.heading}
                          </p>
                          <p className="cs_testimonial_subtitle cs_white_color">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="cs_avatar cs_style_1">
                          <div className="cs_avatar_thumbnail cs_center">
                            <img
                              src={slide.avatarImage}
                              alt={slide.avatarAlt}
                            />
                          </div>
                          <div className="cs_avatar_info">
                            <h3 className="cs_avatar_title cs_white_color">
                              {slide.avatarName}
                            </h3>
                            <p className="cs_avatar_subtitle cs_white_color mb-0">
                              {slide.avatarTitle}
                            </p>
                          </div>
                        </div>
                        <div className="cs_height_16 cs_height_lg_16" />
                        <div className="cs_rating_container">
                          <Rating
                            style={{ maxWidth: 150 }}
                            value={slide.rating}
                            onChange={() => setRating(slide.rating)}
                            isRequired
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="cs_pagination cs_style_2 cs_accent_color cs_flex_left" />
          </div>
          <div className="cs_slider_shape position-absolute">
            <img src={data.shapeImage} alt="Shape" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DentalSolution;
