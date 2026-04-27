import Slider from "react-slick";
import Spacing from "../Spacing";

const BrandsSlider = ({ data = [], hr }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <>
      <div className="container">
        <div className="cs_slider cs_style_1 cs_slider_gap_24" data-aos="fade">
          <div className="cs_slider_wrapper">
            <Slider {...settings}>
              {data.map((brand, index) => (
                <div key={index} className="cs_slide">
                  <div className="cs_brand cs_style_1 text-center">
                    <img src={brand.image} alt={brand.altText} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Spacing lg={90} md={100} />
      {hr && <hr />}
    </>
  );
};

export default BrandsSlider;
