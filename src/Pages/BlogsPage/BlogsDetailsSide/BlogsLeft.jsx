import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogsLeft = ({ data }) => {
  const [rating, setRating] = useState();
  return (
    <>
      <div className="col-lg-8">
        <div className="cs_post_details cs_style_1">
          <div className="cs_post_thumb_thumbnail">
            <img src={data.imageSrc} alt={data.imageAlt} />
          </div>
          <ul className="cs_post_meta cs_mp0">
            <li>
              <i>
                <FaUser />
              </i>
              {data.text}
            </li>
            <li>
              <i>
                <FaCalendarAlt />
              </i>
              {data.secText}
            </li>
          </ul>
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="cs_height_27 cs_height_lg_10" />
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-md-7">
              <div className="cs_testimonial cs_style_1 cs_type_1">
                <div className="cs_testimonial_info">
                  <div className="cs_rating_container">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={data.testimonial.rating}
                      onChange={() => setRating(data.testimonial.rating)}
                      isRequired
                    />
                  </div>
                  <p className="cs_testimonial_subtitle">
                    {data.testimonial.subtitle}
                  </p>
                </div>
                <div className="cs_avatar cs_style_1">
                  <div className="cs_avatar_thumbnail cs_center">
                    <img
                      src={data.testimonial.avatarSrc}
                      alt={data.testimonial.avatarAlt}
                    />
                  </div>
                  <div className="cs_avatar_info">
                    <h3 className="cs_avatar_title">
                      {data.testimonial.avatarName}
                    </h3>
                    <p className="cs_avatar_subtitle mb-0">
                      {data.testimonial.avatarTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="cs_card cs_style_8">
                <h3 className="cs_card_title">{data.card.title}</h3>
                <p className="cs_card_subtitle">{data.card.subtitle}</p>
                <div className="cs_progress_bar_wrapper">
                  {data.card.progress.map((item, index) => (
                    <div className="cs_progress_item" key={index}>
                      <div className="cs_progress_head">
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="cs_progress">
                        <div
                          className="cs_progress_in"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_47 cs_height_lg_30" />
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="cs_height_70 cs_height_lg_40" />
          <h2 className="cs_reply_title mb-0">{data.commentTitle}</h2>
          <ul className="cs_comment_list cs_mp0">
            {data.comments.map((comment, index) => (
              <li className="cs_comment_body" key={index}>
                <div className="cs_comment_thumbnail">
                  <img
                    src={comment.avatarSrc}
                    alt={comment.avatarAlt}
                    className="cs_radius_5"
                  />
                </div>
                <div className="cs_comment_info">
                  <h3>{comment.name}</h3>
                  <p>{comment.text}</p>
                  <div className="cs_comment_meta_wrapper">
                    <div className="cs_comment_date">
                      <span>{comment.date}</span>
                      <span>{comment.time}</span>
                    </div>
                    <Link
                      to={comment.link}
                      className="cs_reply_btn cs_accent_color"
                    >
                      {comment.replay}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cs_height_90 cs_height_lg_60" />
          <h2 className="cs_reply_heading">{data.thirdSecTitle}</h2>
          <form
            className="cs_reply_form row cs_row_gap_30 cs_gap_y_30"
            id="comment"
          >
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <select className="cs_form_field" name="service">
                {data?.serviceOption.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="address"
                placeholder="Office Address"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input type="date" name="date" className="cs_form_field" />
            </div>
            <div className="col-md-12">
              <button type="submit" className="cs_btn cs_style_1 cs_color_1">
                Make an Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogsLeft;
