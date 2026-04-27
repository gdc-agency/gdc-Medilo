import SectionHeading from "../SectionHeading";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectsSection2 = ({ data }) => {
  const { heading, projects } = data;

  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={heading.subtitle}
          SectionTitle={heading.title}
          SectionDescription={heading.description}
          variant={heading.variant}
        />

        <div className="cs_height_50 cs_height_lg_50" />
      </div>
      <div className="container">
        <div className="cs_project_grid cs_style_2">
          {projects.map((project, index) => (
            <div className="cs_project_item" key={index}>
              <div className="cs_card cs_style_7">
                <div
                  className="cs_card_overlay cs_bg_filed"
                  style={{ backgroundImage: `url(${project.overlayImage})` }}
                />
                <div className="cs_card_thumbnail_wrapper">
                  <div className="cs_card_thumbnail cs_center">
                    <img src={project.thumbnailImage} alt={project.title} />
                  </div>
                  {project.thumbnailShape && (
                    <div className="cs_thumbnail_shape">
                      <img src={project.thumbnailShape} alt="Shape" />
                    </div>
                  )}
                </div>
                <div className="cs_card_info_wrapper">
                  <div className="cs_card_index cs_center cs_radius_5">
                    {project.index}
                  </div>
                  <div className="cs_card_text">
                    <h3 className="cs_card_title">
                      <Link to={project.link}>{project.title}</Link>
                    </h3>
                    <p className="cs_card_subtitle">{project.subtitle}</p>
                  </div>
                  <Link to={project.link} className="cs_card_btn cs_center">
                    <i>
                      <FaCircleChevronRight />
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

export default ProjectsSection2;
