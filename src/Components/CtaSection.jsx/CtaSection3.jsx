import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";

const CtaSection3 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            <div className="cs_cta_thumb " data-aos="fade-left">
              <img src={data.imageUrl} alt={data.imageAlt} />
            </div>
            <div className="cs_cta_info">
              <h2 className="cs_cta_title">{data.title}</h2>
              <p className="cs_cta_subtitle">{data.subtitle}</p>
            </div>
          </div>
          <div className="cs_cta_right">
            <Button
              variant={"cs_btn cs_style_1 cs_color_3"}
              btnText={data.buttonText}
              btnIcons={<FaAnglesRight />}
              btnUrl={data.buttonLink}
            />
          </div>
        </div>
      </div>
      <div className="cs_cta_shape" />
    </>
  );
};

export default CtaSection3;
