import { Link } from "react-router-dom";
import Slider from "react-slick";
import Button from "../Buttons";
import { FaAngleRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";

const BlogSection = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "cs_pagination cs_style_2",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.sectionTitle}
          SectionTitle={data.sectionSubtitle}
          variant={"text-center"}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_slider cs_style_1 cs_slider_gap_24">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              <Slider {...settings}>
                {data.postsData.map((post, index) => (
                  <div key={index} className="cs_slide">
                    <article className="cs_post cs_style_1">
                      <Link
                        to={post.postLink}
                        className="cs_post_thumbnail position-relative"
                      >
                        <img src={post.thumbnail} alt="post Thumbnail" />
                        <div className="cs_post_category position-absolute">
                          {post.category}
                        </div>
                      </Link>
                      <div className="cs_post_content position-relative">
                        <div className="cs_post_meta_wrapper">
                          <div className="cs_posted_by cs_center position-absolute">
                            {post.date}
                          </div>
                          <div className="cs_post_meta_item">
                            <img src={post.authorIcon} alt="Icon" />
                            <span>By: {post.author}</span>
                          </div>
                          <div className="cs_post_meta_item">
                            <img src={post.commentIcon} alt="Icon" />
                            <span>Comment</span>
                          </div>
                        </div>
                        <h3 className="cs_post_title">
                          <Link to={post.postLink}>{post.title}</Link>
                        </h3>
                        <p className="cs_post_subtitle">{post.subtitle}</p>

                        <Button
                          variant={"cs_post_btn"}
                          btnIcons={<FaAngleRight />}
                          btnUrl={post.postLink}
                          btnText={post.btnText}
                        />

                        <div className="cs_post_shape position-absolute" />
                      </div>
                    </article>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
