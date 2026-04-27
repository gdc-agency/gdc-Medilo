import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";

const HeroSection2 = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    dotsClass: "cs_pagination cs_style_3",
  };

  return (
    <>
      {/* Start Hero Section */}
      <div className="cs_slider cs_style_1">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Slider {...settings}>
              {data.slides.map((slide, index) => (
                <div className="cs_slide" key={index}>
                  <div
                    className="cs_hero cs_style_3 cs_center cs_bg_filed"
                    style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                  >
                    <div className="container">
                      <div className="cs_hero_text">
                        <div className="cs_hero_text_in">
                          <h1 className="cs_hero_title">
                            {slide.title} <span>{slide.highlight}</span>.
                          </h1>
                          <p
                            className="cs_hero_subtitle"
                            dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                          />
                          <ul className="cs_list cs_style_2 cs_mp_0">
                            {slide.features.map((feature, idx) => (
                              <li key={idx}>
                                <i>
                                  <BsFillCheckCircleFill />
                                </i>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="cs_hero_btns">
                            <Button
                              btnIcons={<FaAnglesRight />}
                              btnText={slide.btnText}
                              variant={"cs_btn cs_style_1 cs_color_1"}
                              btnUrl={slide.btnLink}
                            />
                            <Button
                              btnIcons={<FaAnglesRight />}
                              btnText={slide.btnText2}
                              variant={"cs_btn cs_style_1 cs_color_2"}
                              btnUrl={slide.btnLink2}
                            />
                          </div>
                        </div>
                        <div className="cs_hero_shape">
                          <img src={slide.shapeImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="cs_iconbox cs_style_8" data-aos="fade-right">
          <div className="cs_iconbox_icon cs_center">
            <img src={data.emergency.icon} alt="" />
          </div>
          <div className="cs_iconbox_right">
            <h3 className="cs_iconbox_title">{data.emergency.title}</h3>
            <p className="cs_iconbox_subtitle">
              {data.emergency.phone1} <br />
              {data.emergency.phone2}
            </p>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
    </>
  );
};

export default HeroSection2;
