import Button from "../Buttons";

const ErrorSection = ({ data }) => {
  return (
    <div className="container">
      <div className="cs_error_content">
        <div className="cs_error_thumbnail">
          <img src={data.imageUrl} alt="Error Image" />
        </div>
        <h2 className="cs_error_heading">{data.heading}</h2>
        <p className="cs_error_subtitle">{data.subtitle}</p>
        <Button
          btnText={data.buttonText}
          variant={"cs_btn cs_style_1 cs_color_2"}
          btnUrl={data.buttonLink}
        />
      </div>
    </div>
  );
};

export default ErrorSection;
