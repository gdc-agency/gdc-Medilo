import PageHeading from "../../Components/PageHeading";
import SectionHeading from "../../Components/SectionHeading";
import Section from "../../Components/Section";

const Appointments = () => {
  const headingData = {
    title: "Appointments",
  };

  const data = {
    sectionSubtitle: "MAKE APPOINTMENTS",
    sectionTitle: "Booking Now Appointments",
    formFields: [
      { type: "text", name: "name", placeholder: "Name" },
      { type: "email", name: "email", placeholder: "Email" },
      { type: "text", name: "Number", placeholder: "Phone Number" },
    ],
    services: [
      { value: "choose-service", label: "Choose Service" },
      { value: "crutches", label: "Crutches" },
      { value: "x-Ray", label: "X-Ray" },
      { value: "pulmonary", label: "Pulmonary" },
      { value: "cardiology", label: "Cardiology" },
      { value: "dental-care", label: "Dental Care" },
      { value: "neurology", label: "Neurology" },
    ],
    appointmentDate: {
      type: "text",
      name: "date",
      placeholder: "Message",
    },
    buttonText: "Make an appointment",
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      <>
        {/* Start Appointment Section */}
        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className="cs_appointment"
        >
          <div className="container">
            <div className="cs_appointment_form_wrapper">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
                variant={"text-center"}
              />
              <div className="cs_height_40 cs_height_lg_35" />
              <form className="cs_appointment_form row cs_gap_y_30">
                {data.formFields.map((field, index) => (
                  <div className="col-md-12" key={index}>
                    <input
                      type={field.type}
                      name={field.name}
                      className="cs_form_field"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="col-md-12">
                  <select name="service" className="cs_form_field">
                    {data.services.map((service, index) => (
                      <option value={service.value} key={index}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12">
                  <input
                    type={data.appointmentDate.type}
                    name={data.appointmentDate.name}
                    className="cs_form_field"
                    placeholder={data.appointmentDate.placeholder}
                  />
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_white_color"
                  >
                    {data.buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Section>

        {/* End Appointment Section */}
      </>
    </>
  );
};

export default Appointments;
