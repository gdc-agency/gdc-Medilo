import { FaAnglesRight } from "react-icons/fa6";
import Button from "../Buttons";

const CtaSection = ({ data = {} }) => {
  return (
    <>
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            <div className="cs_cta_thumb" data-aos="fade-right">
              <img src={data?.imageUrl} alt="" />
            </div>
            <div className="cs_cta_info">
              <h2 className="cs_cta_title">{data.title}</h2>
              <p className="cs_cta_subtitle">{data.subtitle}</p>
            </div>
          </div>
          <div className="cs_cta_right">
            <Button
              btnText={data.buttonText}
              variant={"cs_btn cs_style_1 cs_color_3"}
              btnIcons={<FaAnglesRight />}
              btnUrl={data.buttonUrl}
            />
          </div>
        </div>
      </div>
      <div className="cs_cta_shape" />
    </>
  );
};

export default CtaSection;
