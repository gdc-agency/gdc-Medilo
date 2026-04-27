import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const MedicalSolution2 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_solution_content_wrapper">
              <SectionHeading
                SectionTitle={data.title}
                SectionSubtitle={data.subtitle}
                SectionDescription={data.description}
                variant={"s_style_1"}
              />

              <ul className="cs_solution_links cs_style_1 cs_mp0">
                {data.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>
                      <span className="cs_tab_link_icon_left cs_center">
                        <img src={link.iconSrc} alt={link.iconAlt} />
                      </span>
                      <span>{link.text}</span>
                      <span className="cs_tab_link_icon_right cs_center">
                        <i>
                          <FaAngleRight />
                        </i>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_solution_thumbnail">
              <img src={data.thumbnailSrc} alt="Tab Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalSolution2;
