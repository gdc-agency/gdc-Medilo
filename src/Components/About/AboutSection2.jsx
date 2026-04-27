import { useState } from 'react';
import VideoModal from '../VideoSection/Modal';
import { Link } from 'react-router-dom';

const AboutSection2 = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState('about:blank');

  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_about_thumb">
              <img src={data.aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_accent_color">
                  <span className="cs_shape_left" />
                  {data.subtitle}
                </p>
                <h2 className="cs_section_title">{data.title}</h2>
              </div>
              <p className="cs_about_text">{data.description}</p>
              <div className="cs_about_info">
                <div
                  className="cs_experience_box cs_center cs_bg_filed "
                  data-aos="zoom-in"
                  style={{ backgroundImage: `url(${data.experienceBg})` }}
                >
                  <div className="cs_experience_box_in">
                    <p className="cs_experience_box_number">
                      {data.experienceNumber}
                    </p>
                    <p className="cs_experience_box_title">
                      {data.experienceTitle}
                    </p>
                  </div>
                </div>
                <ul className="cs_iconbox_1_list cs_mp_0">
                  {data.iconBoxes.map((iconBox, index) => (
                    <li key={index}>
                      <div className="cs_iconbox cs_style_1">
                        <div className="cs_iconbox_head">
                          <div className="cs_iconbox_icon cs_center">
                            <img src={iconBox.iconSrc} alt={iconBox.iconAlt} />
                          </div>
                          <h3 className="cs_iconbox_title m-0">
                            {iconBox.title}
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs_progress_head">
                <span>{data.progressLabel}</span>
                <span>{data.progressValue}%</span>
              </div>
              <div className="cs_progress">
                <div
                  className="cs_progress_in"
                  style={{ width: `${data.progressValue}%` }}
                />
              </div>
              <div className="cs_about_btns">
                <Link className="cs_video_open" onClick={handelClick}>
                  <span className="cs_player_btn cs_center">
                    <span />
                  </span>
                  <span className="cs_play_btn_text">{data.videoText}</span>
                </Link>
                <img src={data.signImage} alt="Sign" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_img">
        <img src={data.sectionImage} alt="" />
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default AboutSection2;
