import SectionHeading from "../SectionHeading";

const TimelineSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.subtitle}
          SectionTitle={data.title}
          variant={"text-center"}
        />
        <div className="cs_height_50 cs_height_lg_50" />
        <div className="cs_timeline_wrapper">
          <div className="cs_days_row">
            <div className="cs_day_col">Time</div>
            {data?.scheduleData?.days.map((day, index) => (
              <div key={index} className="cs_day_col">
                {day}
              </div>
            ))}
          </div>
          {data?.scheduleData?.times.map((timeData, index) => (
            <div key={index} className="cs_content_row">
              <div className="cs_content_col cs_time">{timeData.time}</div>
              {timeData.schedules.map((schedule, index) => (
                <div key={index} className="cs_content_col">
                  {schedule && (
                    <div className="cs_schedule_wrapper">
                      <h3 className="cs_schedule_title cs_semibold">
                        {schedule.title}
                      </h3>
                      <p className="cs_schedule_time">{schedule.timeRange}</p>
                      <p className="cs_doctor_title">{schedule.doctor}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineSection;
