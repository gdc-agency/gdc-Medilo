import { FaAnglesRight, FaRegCircleCheck } from "react-icons/fa6";
import VideoModal from "../VideoSection/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Buttons";

const AboutSection1 = ({ data }) => {
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
            <div className="cs_about_thumb">
              <img src="assets/img/about_img_3.png" alt="" />
              <div
                className="cs_experience_box cs_center "
                data-aos="fade-down"
              >
                <p className="cs_experience_box_number">
                  {data.experienceYears}
                </p>
                <p className="cs_experience_box_title">
                  {data.experienceTitle}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_content">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />

              <p className="cs_about_text">{data.aboutText}</p>
              <div className="cs_iconbox_1_wrap">
                <div className="cs_iconbox cs_style_1">
                  <div className="cs_iconbox_head">
                    <div className="cs_iconbox_icon cs_center">
                      <img src={data.iconUrl} alt="" />
                    </div>
                    <h3 className="cs_iconbox_title m-0">{data.title}</h3>
                  </div>
                  <div className="cs_iconbox_img">
                    <img src={data.imgUrl} alt="" />
                  </div>
                </div>
                <div className="cs_iconbox cs_style_1">
                  <div className="cs_iconbox_img">
                    <img src={data.imgUrl2} alt="" />
                  </div>
                  <div className="cs_iconbox_head">
                    <div className="cs_iconbox_icon cs_center">
                      <img src={data.iconUrl2} alt="" />
                    </div>
                    <h3 className="cs_iconbox_title m-0">{data.title2}</h3>
                  </div>
                </div>
              </div>

              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaRegCircleCheck />
                  </i>
                </div>
                <p className="cs_about_iconbox_subtitle">
                  {data.aboutIconboxSubtitle}{" "}
                  <Link to={data.readMoreLink}>{data.readMoreText}</Link>
                </p>
              </div>
              <div className="cs_about_btns">
                <Link className="cs_video_open" onClick={handelClick}>
                  <span className="cs_player_btn cs_center">
                    <span />
                  </span>
                  <span className="cs_play_btn_text">{data.videoText}</span>
                </Link>
                <Button
                  btnIcons={<FaAnglesRight />}
                  btnText={data.aboutMoreText}
                  variant={"cs_btn cs_style_1 cs_color_1"}
                  btnUrl={data.aboutMoreLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_img">
        <img src={data.sectionImageUrl} alt="" />
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default AboutSection1;
