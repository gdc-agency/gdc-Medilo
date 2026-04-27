import React from "react";
import PageHeading from "../../Components/PageHeading";
import TimelineSection from "../../Components/TimelineSection";
import Section from "../../Components/Section";

const headingData = {
  title: "Our Timetable",
};

const timeLineData = {
  subtitle: "OUR TIMETABLE",
  title: "Events Calendar Specialist This <br />Timetabel Meet",

  scheduleData: {
    days: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    times: [
      {
        time: "10.00",
        schedules: [
          { title: "Dental", timeRange: "11.00-12.00", doctor: "Dr.Porta" },
          { title: "Dental", timeRange: "11.00-12.00", doctor: "Dr.Porta" },
          { title: "Pulmonary", timeRange: "10.00-11.00", doctor: "Routine" },
          null,
          {
            title: "Pulmonary",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          null,
          {
            title: "Pulmonary",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
        ],
      },
      {
        time: "11.00",
        schedules: [
          null,
          null,
          null,
          {
            title: "Pulmonary",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
          null,
          null,
        ],
      },
      {
        time: "12.00",
        schedules: [
          null,
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          { title: "Dental", timeRange: "11.00-12.00", doctor: "Dr.Porta" },
          { title: "Pulmonary", timeRange: "10.00-11.00", doctor: "Routine" },
          null,
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
        ],
      },
      {
        time: "13.00",
        schedules: [
          null,
          null,
          null,
          {
            title: "Cardiology",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          {
            title: "Cardiology",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          { title: "Pulmonary", timeRange: "10.00-11.00", doctor: "Routine" },
        ],
      },
      {
        time: "14.00",
        schedules: [
          { title: "Pulmonary", timeRange: "10.00-11.00", doctor: "Routine" },
          { title: "Cardiology", timeRange: "10.00-11.00", doctor: "Runada" },
          null,
          {
            title: "Pulmonary",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
          null,
          { title: "Pulmonary", timeRange: "10.00-11.00", doctor: "Routine" },
        ],
      },
      {
        time: "15.00",
        schedules: [null, null, null, null, null, null, null],
      },
      {
        time: "16.00",
        schedules: [
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
          {
            title: "Cardiology",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          null,
          {
            title: "Cardiology",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          null,
          null,
        ],
      },
      {
        time: "17.00",
        schedules: [
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
          { title: "Dental", timeRange: "11.00-12.00", doctor: "Dr.Porta" },
          null,
          { title: "Dental", timeRange: "11.00-12.00", doctor: "Dr.Porta" },
          null,
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
        ],
      },
    ],
  },
};
const TimeTablePage = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <TimelineSection data={timeLineData} />
      </Section>
    </>
  );
};

export default TimeTablePage;
