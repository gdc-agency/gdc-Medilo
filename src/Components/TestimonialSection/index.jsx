import { useState } from "react";
import Slider from "react-slick";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const TestimonialSection = ({ data }) => {
  const [rating, setRating] = useState();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
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
        <div className="row cs_gap_y_50 align-items-center">
          <div className="col-lg-5" data-aos="fade-left">
            <div className="cs_testimonial_thumbnail">
              <img src={data.thumbnail} alt="Testimonial Image" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_testimonial_content">
              <div className="cs_slider cs_style_1 cs_slider_gap_24 position-relative">
                <div className="cs_slider_container">
                  <div className="cs_slider_wrapper">
                    <Slider {...settings}>
                      {data.testimonials.map((testimonial, index) => (
                        <div key={index} className="cs_slide">
                          <div className="cs_testimonial cs_style_1">
                            <div className="cs_testimonial_info">
                              <div className="cs_rating_container">
                                <Rating
                                  style={{ maxWidth: 150 }}
                                  value={testimonial.rating}
                                  onChange={() => setRating(testimonial.rating)}
                                  isRequired
                                />
                              </div>
                              <p className="cs_testimonial_subtitle">
                                {testimonial.subtitle}
                              </p>
                            </div>
                            <div className="cs_avatar cs_style_1">
                              <div className="cs_avatar_thumbnail cs_center">
                                <img src={testimonial.avatar} alt="Avatar" />
                              </div>
                              <div className="cs_avatar_info">
                                <h3 className="cs_avatar_title">
                                  {testimonial.name}
                                </h3>
                                <p className="cs_avatar_subtitle mb-0">
                                  {testimonial.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
