import { useState } from "react";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import VideoModal from "./Modal";
import { Link } from "react-router-dom";

const VideoSection = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <div className="cs_video_wrapper">
          <Link className="cs_video_open cs_style_2" onClick={handelClick}>
            <span className="cs_player_btn cs_center">
              <span />
            </span>
          </Link>
          <h2 className="cs_video_title">
            {data.title}
            <span className="cs_accent_color">{data.highlightedText}</span>
            <span dangerouslySetInnerHTML={{ __html: data.title2 }}></span>
          </h2>
          <p className="cs_video_subtitle">{data.subtitle}</p>
          <div className="cs_hero_btns">
            <Button
              btnIcons={<FaAnglesRight />}
              btnText={data.btnText}
              variant={"cs_btn cs_style_1 cs_color_1"}
              btnUrl={data.btnLink}
            />
            <Button
              btnIcons={<FaAnglesRight />}
              btnText={data.btnText1}
              variant={"cs_btn cs_style_1 cs_color_2"}
              btnUrl={data.btnLink1}
            />
          </div>
          <div className="cs_height_120 cs_height_lg_80" />
        </div>
        <div className="cs_cta_shape position-absolute">
          <img
            src={data.shapeImage}
            alt="Medical Brand"
            className="cs_spinner_img"
          />
        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default VideoSection;
