
const CounterSection = ({ data }) => {
  return (
    <div className="container">
      <div className="cs_counter_content cs_blue_bg">
        <div className="cs_counter_shape position-absolute">
          <img src="assets/img/counter_shape.png" alt="Shape" />
        </div>
        <div className="cs_counter_1_wrap">
          {data.map((counter, index) => (
            <div className="cs_counter cs_style_1" key={index}>
              <div className="cs_counter_icon cs_center">
                <img src={counter.iconUrl} alt="Icon" />
              </div>
              <div className="cs_counter_nmber">{counter.number}</div>
              <p className="cs_counter_title mb-0">{counter.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
