const SectionHeading = ({
  SectionSubtitle,
  SectionTitle,
  SectionDescription,
  variant,
  textColor,
}) => {
  return (
    <div className={`cs_section_heading cs_style_1  ${variant ? variant : ''}`}>
      <div className="cs_section_heading_left">
        <p className="cs_section_subtitle cs_accent_color" data-aos="fade-up">
          <span className="cs_shape_left" />
          {SectionSubtitle}
          {variant === 'text-center' && (
            <span className="cs_shape_right"></span>
          )}
        </p>
        <h2
          className={`cs_section_title ${textColor ? textColor : ''}`}
          dangerouslySetInnerHTML={{ __html: SectionTitle }}
        />
      </div>
      {SectionDescription && (
        <div
          className={`cs_section_heading_right ${textColor ? textColor : ''}`}
          dangerouslySetInnerHTML={{ __html: SectionDescription }}
        />
      )}
    </div>
  );
};

export default SectionHeading;
