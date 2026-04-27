import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceSection4 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-xl-4 col-lg-5">
            <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1">
              <h3 className="cs_service_heading">{data.serviceHeading}</h3>
              <ul className="cs_solution_links cs_style_2 cs_mp0">
                {data.services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.url}>
                      <span className="cs_tab_link_icon_left cs_center">
                        <i>
                          <FaCheckCircle />
                        </i>
                      </span>
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="cs_service_details_thumbnail">
              <img src={data.mainImage} alt="Service Details" />
            </div>
          </div>
        </div>
        <div className="cs_height_35 cs_height_lg_30" />
        <div className="cs_service_details">
          <h3 className="cs_service_heading">Service Details:</h3>
          {data.serviceDetails.map((detail, index) => (
            <p key={index} className="cs_service_subtitle">
              {detail}
            </p>
          ))}
          <div className="cs_height_35 cs_height_lg_30" />
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_service_details_thumbnail">
                <img src={data.additionalImages} alt="Service Details" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row cs_gap_y_30">
                {data.iconBoxes.map((box, index) => (
                  <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                    <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg">
                      <div
                        className="cs_iconbox_overlay cs_bg_filed"
                        style={{ backgroundImage: `url(${box.bgImage})` }}
                      />
                      <div className="cs_iconbox_shape" />
                      <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
                        <div className="cs_iconbox_icon cs_center">
                          <img src={box.icon} alt="Service Icon" />
                        </div>
                        <h3 className="iconbox_index">{box.index}</h3>
                      </div>
                      <h3 className="cs_iconbox_title">
                        <Link to={box.link}>{box.title}</Link>
                      </h3>
                      <p className="cs_iconbox_subtitle m-0">{box.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaCheckCircle />
                  </i>
                </div>
                <p className="cs_about_iconbox_subtitle">
                  {data.subtitle}{" "}
                  <Link to={data.readMoreUrl}>{data.readMoreText}</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_30" />
          <p className="cs_service_subtitle mb-0">{data.footerText}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceSection4;
