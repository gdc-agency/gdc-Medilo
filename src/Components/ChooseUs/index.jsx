import SectionHeading from "../SectionHeading";

const ChooseUs = ({ data }) => {
  const { subtitle, title, services } = data || {};

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <SectionHeading SectionSubtitle={subtitle} SectionTitle={title} />
            <div className="cs_height_50 cs_height_lg_50" />
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-7 col-xl-8 col-lg-9">
            <div className="cs_service_wrapper">
              <div className="cs_service_list">
                {services.map((service, index) => (
                  <div key={index} className="cs_iconbox cs_style_3">
                    <div className="cs_iconbox_icon cs_center cs_radius_5">
                      <img src={service.iconUrl} alt="Icon" />
                    </div>
                    <div className="cs_iconbox_text">
                      <h3 className="cs_iconbox_title">{service.title}</h3>
                      <p className="cs_iconbox_subtitle">{service.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
