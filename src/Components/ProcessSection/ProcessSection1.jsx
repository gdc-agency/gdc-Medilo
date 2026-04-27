import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";

const ProcessSection1 = ({ data }) => {
  const { heading, processes, button, backgroundImage } = data || {};

  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={heading.subtitle}
          SectionTitle={heading.title}
          variant={heading.variant}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_iconbox_9_wrapper">
          <div className="row">
            {processes.map((process, index) => (
              <div className="col-lg-4" key={index}>
                <div
                  className={`cs_iconbox cs_style_9 ${
                    process.active ? "active" : ""
                  }`}
                >
                  <div className="cs_index">{process.index}</div>
                  <div className="cs_iconbox_icon cs_center">
                    <img src={process.icon} alt="Icon" />
                  </div>
                  <div className="cs_iconbox_content">
                    <h3 className="cs_iconbox_title">{process.title}</h3>
                    <p className="cs_iconbox_subtitle mb-0">
                      {process.subtitle}
                    </p>
                  </div>
                  {process.shape && (
                    <div
                      className={`cs_iconbox_shape ${process.shapePosition}`}
                    >
                      <img src={process.shape} alt="Shape" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant={button.variant}
          btnText={button.text}
          btnIcons={<FaAnglesRight />}
          btnUrl={button.url}
        />
      </div>
      <div
        className="cs_process_bg cs_bg_filed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </>
  );
};

export default ProcessSection1;
