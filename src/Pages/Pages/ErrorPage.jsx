import React from "react";
import PageHeading from "../../Components/PageHeading";
import ErrorSection from "../../Components/ErrorSection";
import Section from "../../Components/Section";

const headingData = {
  title: "Error Page",
};

const errorData = {
  imageUrl: "assets/img/error_thumbnail.png",
  heading: "Page can’t be found",
  subtitle:
    "Sorry, this page cannot be found. Take a look at our most popular pages.",
  buttonText: "GO TO HOME",
  buttonLink: "/",
};

const ErrorPage = () => {
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
        <ErrorSection data={errorData} />
      </Section>
    </>
  );
};

export default ErrorPage;
