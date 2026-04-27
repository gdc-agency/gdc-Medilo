import { Link } from "react-router-dom";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";

const CtaSection2 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-6">
            <div className="cs_cta_in">
              <div className="cs_cta_info">
                <h2 className="cs_cta_title cs_white_color">{data.title}</h2>
                <p className="cs_cta_subtitle cs_white_color mb-0">
                  {data.subtitle}
                </p>
              </div>
              <Button
                variant={"cs_btn cs_style_1 cs_color_3"}
                btnText={data.buttonText}
                btnIcons={<FaAnglesRight />}
                btnUrl={data.buttonLink}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaSection2;
