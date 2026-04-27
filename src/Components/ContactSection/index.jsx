import SectionHeading from "../SectionHeading";

const ContactSection = ({ data, reverseOrder }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_30">
          {reverseOrder ? (
            <>
              <div className="col-lg-6">
                <div className="cs_contact_thumbnail cs_pl-40">
                  <div className="cs_teeth_shape">
                    <img
                      src={data.teethShapeImg}
                      alt="Teeth Shape"
                      className="cs_spinner_img"
                    />
                  </div>
                  <div className="cs_contact_img">
                    <img src={data.contactImg} alt="Contact" />
                  </div>
                  <div className="cs_contact_bg_shape">
                    <div className="cs_white_bg_shape" />
                    <div className={`cs_iconbox ${data.iconBox.style}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <img src={data.iconBox.icon} alt="Icon" />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">
                          {data.iconBox.title}
                        </h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          {data.iconBox.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />

                <div className="cs_height_25 cs_height_lg_25" />
                <form className="cs_contact_form row cs_gap_y_30">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="cs_form_field"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Your phone"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      rows={5}
                      className="cs_form_field"
                      placeholder="Your comments"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Type the below word"
                    />
                    <input
                      type="button"
                      className="cs_form_field cs_code_input"
                      defaultValue="5RLOpW"
                    />
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_color_1"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />

                <div className="cs_height_25 cs_height_lg_25" />
                <form className="cs_contact_form row cs_gap_y_30">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="cs_form_field"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Your Subject"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Your phone"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      rows={5}
                      className="cs_form_field"
                      placeholder="Your comments"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="cs_form_field"
                      placeholder="Type the below word"
                    />
                    <input
                      type="button"
                      className="cs_form_field cs_code_input"
                      defaultValue="5RLOpW"
                    />
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_color_1"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="cs_contact_thumbnail cs_pl-40">
                  <div className="cs_teeth_shape">
                    <img
                      src={data.teethShapeImg}
                      alt="Teeth Shape"
                      className="cs_spinner_img"
                    />
                  </div>
                  <div className="cs_contact_img">
                    <img src={data.contactImg} alt="Contact" />
                  </div>
                  <div className="cs_contact_bg_shape">
                    <div className="cs_white_bg_shape" />
                    <div className={`cs_iconbox ${data.iconBox.style}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <img src={data.iconBox.icon} alt="Icon" />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">
                          {data.iconBox.title}
                        </h3>
                        <p className="cs_iconbox_subtitle mb-0">
                          {data.iconBox.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
