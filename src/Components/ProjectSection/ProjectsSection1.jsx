import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsSection1 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p
              className="cs_section_subtitle cs_accent_color"
              data-aos="fade-left"
            >
              <span className="cs_shape_left" />
              {data.sectionSubtitle}
            </p>
            <h2 className="cs_section_title">{data.sectionTitle}</h2>
          </div>
          <div className="cs_section_heading_right">
            {data.sectionDescription}
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_50" />
      </div>
      <div className="container-fluide">
        <div className="cs_project_grid cs_style_1">
          {data.projects.map((project) => (
            <div className="cs_project_item" key={project.id}>
              <div className="cs_card cs_style_5">
                <div className="cs_card_thumbnail">
                  <img src={project.imageSrc} alt={project.title} />
                </div>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_index cs_white_color">
                    {String(project.id).padStart(2, "0")}
                  </div>
                  <div className="cs_card_text">
                    <h3 className="cs_card_title cs_white_color mb-0">
                      <Link to={project.link}>{project.title}</Link>
                    </h3>
                    <p className="cs_card_subtitle cs_white_color mb-0">
                      {project.subtitle}
                    </p>
                  </div>
                  <Link to={project.link} className="cs_iconbox_btn cs_center">
                    <i>
                      <FaChevronCircleRight />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection1;
