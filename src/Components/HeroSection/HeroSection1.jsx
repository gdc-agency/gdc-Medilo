import { BsFillCheckCircleFill } from "react-icons/bs";
import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import VideoModal from "../VideoSection/Modal";

const HeroSection1 = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = () => {
    setIframeSrc(`${data.videoHref}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  return (
    <>
      <section>
        <div
          className="cs_hero cs_style_2 cs_center cs_bg_filed"
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
        >
          <div className="container">
            <div className="cs_hero_text">
              <div className="cs_hero_text_in" data-aos="fade">
                <h1
                  className="cs_hero_title cs_white_color "
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
                <p
                  className="cs_hero_subtitle cs_white_color"
                  dangerouslySetInnerHTML={{ __html: data.subtitle }}
                />
                <ul className="cs_list cs_style_2 cs_mp_0 cs_white_color">
                  {data.features.map((feature, index) => (
                    <li key={index}>
                      <i>
                        <BsFillCheckCircleFill />
                      </i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="cs_hero_btns">
                  <Button
                    btnText={data.btnText}
                    btnIcons={<FaAnglesRight />}
                    btnUrl={data.btnHref}
                    variant={"cs_btn cs_style_1 cs_color_1"}
                  />

                  <Link className="cs_video_open" onClick={handelClick}>
                    <span className="cs_player_btn cs_center">
                      <span />
                    </span>
                    <span className="cs_play_btn_text">{data.BtnText1}</span>
                  </Link>
                </div>
              </div>
              <div className="cs_hero_shape">
                <img src={data.heroShape} alt="" />
              </div>
              <div className="cs_hero_card cs_center" data-aos="zoom-in">
                <h4>
                  {data.supportText.number}
                  <span>{data.supportText.unit}</span>
                </h4>
                <p>{data.supportText.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_iconbox_4_wrap">
          <div className="container">
            <div className="row cs_gap_y_30">
              {data.iconBoxes.map((iconBox, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="cs_iconbox cs_style_4">
                    <div className="cs_iconbox_icon cs_center">
                      <img src={iconBox.icon} alt="" />
                    </div>
                    <div className="cs_iconbox_right">
                      <h3 className="cs_iconbox_title">{iconBox.title}</h3>
                      <p className="cs_iconbox_subtitle">{iconBox.subtitle}</p>
                      <Button
                        btnText={iconBox.buttonText}
                        variant={"cs_btn cs_style_1 cs_color_1"}
                        btnUrl={iconBox.buttonHref}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default HeroSection1;
