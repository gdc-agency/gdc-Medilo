import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import VideoModal from "../VideoSection/Modal";

const MedicalSolutionSection = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoLink}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_solution_content">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />

              <p className="cs_solution_text">{data.solutionText}</p>
              <div className="cs_solution_list_wrapper">
                <div className="row cs_gap_y_30">
                  <div className="col-md-6">
                    <ul className="cs_list cs_style_2 cs_mp0">
                      {data.listItems.map((item, index) => (
                        <li key={index}>
                          <i>
                            <FaCheckCircle />
                          </i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_solution_thumbnail_2">
                      <img
                        src={data.images.solutionImage}
                        alt="Solution Image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                btnText={data.aboutLink.text}
                variant={"cs_btn cs_style_1 cs_color_1"}
                btnIcons={<FaAnglesRight />}
                btnUrl={data.aboutLink.href}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="cs_solution_thumbnail cs_bg_filed"
              style={{
                backgroundImage: `url(${data?.images?.videoImageUrl})`,
              }}
            >
              <div className="cs_player_btn_2">
                <div className="cs_player_btn_column">
                  <div />
                </div>
                <div className="cs_player_btn_wrapper cs_center">
                  <Link className="cs_video_open" onClick={handelClick}>
                    <span className="cs_player_btn cs_center">
                      <span />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_solution_shape position-absolute">
        <img src={data.shapeImageUrl} alt="Shape" />
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default MedicalSolutionSection;
