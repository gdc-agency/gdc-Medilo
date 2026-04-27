import SectionHeading from "../SectionHeading";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const BlogsSection1 = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.sectionSubtitle}
          SectionTitle={data.sectionTitle}
          variant={"text-center"}
        />
        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_posts_grid cs_style_1">
          {data.blogsData.map((blog) => (
            <article key={blog.id} className="cs_post cs_style_1">
              <Link
                to={blog.link}
                className="cs_post_thumbnail position-relative"
              >
                <img src={blog.image} alt="Post Thumbnail" />
                <div className="cs_post_category position-absolute">
                  {blog.category}
                </div>
              </Link>
              <div className="cs_post_content position-relative">
                <div className="cs_post_meta_wrapper">
                  <div className="cs_posted_by cs_center position-absolute">
                    {blog.date}
                  </div>
                  <div className="cs_post_meta_item">
                    <img src="assets/img/icons/post_user_icon.png" alt="Icon" />
                    <span>By: {blog.author}</span>
                  </div>
                  <div className="cs_post_meta_item">
                    <img
                      src="assets/img/icons/post_comment_icon.png"
                      alt="Icon"
                    />
                    <span>{blog.comments}</span>
                  </div>
                </div>
                <h3 className="cs_post_title">
                  <Link to={blog.link}>{blog.title}</Link>
                </h3>
                <p className="cs_post_subtitle">{blog.subtitle}</p>
                <Link to={blog.link} className="cs_post_btn">
                  <span>{blog.linkText}</span>
                  <span>
                    <i>
                      <FaAngleRight />
                    </i>
                  </span>
                </Link>
                <div className="cs_post_shape position-absolute" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsSection1;
