import React from "react";
import PageHeading from "../../Components/PageHeading";
import ServiceSection4 from "../../Components/Service/ServiceSection4";
import CounterSection2 from "../../Components/FunSection/CounterSection2";
import Section from "../../Components/Section";

const headingData = {
  title: "Our Service",
};

const serviceData = {
  serviceHeading: "All Service:",
  services: [
    { title: "Medical lab service", url: "/" },
    { title: "Dental best service", url: "/" },
    { title: "Dedicate doctor best", url: "/" },
    { title: "Team can help achieve", url: "/" },
    { title: "Medical goals lab", url: "/" },
  ],
  mainImage: "/assets/img/service_details_1.jpg",
  serviceDetails: [
    "It is a long established fact that a reader will be distracted restore inexpensive e-markets vis to is a long established fact that a reader will be distracted restore inexpensive e-markets vis to corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalabl etrategic.by the meadable content of a page when looking at its layout. The point to this singis that normal distribution of Medical",
    "We is a long established fact that a reader will be distracted restore inexpensive e-markets vis tontellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking.",
  ],
  footerText:
    "We is a long established fact that a reader will be distractedrestore inexpensive e-markets vis tontellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking.",
  additionalImages: "/assets/img/service_details_2.jpg",
  iconBoxes: [
    {
      index: "01",
      title: "Service & Check",
      subtitle: "Medical competitor research startup to financial",
      icon: "/assets/img/icons/service_icon_1.png",
      bgImage: "/assets/img/service_bg.jpg",
      link: "/",
    },
    {
      index: "02",
      title: "Medical Care",
      subtitle: "Medical competitor research startup to financial",
      icon: "/assets/img/icons/service_icon_2.png",
      bgImage: "/assets/img/service_bg.jpg",
      link: "/",
    },
  ],

  subtitle:
    "There are many variations of pass available this medical service the team",
  readMoreUrl: "/",
  readMoreText: "READ MORE +",
};

const counterData = [
  {
    iconSrc: "/assets/img/icons/counter_icon_1.png",
    countTo: 567,
    suffix: "+",
    title: "Active Clients",
  },
  {
    iconSrc: "/assets/img/icons/counter_icon_2.png",
    countTo: 23,
    suffix: "K+",
    title: "Team Support",
  },
  {
    iconSrc: "/assets/img/icons/counter_icon_3.png",
    countTo: 241,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    iconSrc: "/assets/img/icons/counter_icon_4.png",
    countTo: 16,
    suffix: "K+",
    title: "Award winner",
  },
];

const ServiceDetails = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Service Details Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <ServiceSection4 data={serviceData} />
      </Section>

      {/* End Service Details Section */}
      {/* Start Counter Section */}
      <Section bottomSpaceLg="70" bottomSpaceMd="120">
        <CounterSection2 data={counterData} />
      </Section>

      {/* End Counter Section */}
    </>
  );
};

export default ServiceDetails;
