import PageHeading from '../../Components/PageHeading';
import Service from '../../Components/Service';
import Section from '../../Components/Section';

const headingData = {
  title: 'Service',
};

const serviceData = {
  subtitle: 'OUR BEST SERVICE',
  title: 'High-Quality Services This Doctor',
  description:
    'We are privileged to work with hundreds of future-thinking medial,<br> including many of the world’s top hardware, software, and<br> brands, feel safe and comfortable in establishing.',
  services: [
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_1.png',
      index: '01',
      title: 'Pharmacology',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_2.png',
      index: '02',
      title: 'Orthopedic',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_3.png',
      index: '03',
      title: 'Hematology',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_4.png',
      index: '04',
      title: 'Plastic Surgery',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_5.png',
      index: '05',
      title: 'Neurology',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_6.png',
      index: '06',
      title: 'Ophthalmology',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_7.png',
      index: '07',
      title: 'Dental Care',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_8.png',
      index: '08',
      title: 'Cardiology',
      subtitle: 'Medical competitor research startup to financial',
      link: '/service/service-details',
    },
  ],
  footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  footerText:
    'Delivering tomorrow’s health care for your family.<br>medical this View',
  footerLink: '/',
  footerLinkText: 'SEE MORE',
};
const ServicePage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      <>
        {/* Start Service Section */}

        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <Service data={serviceData} />
        </Section>

        {/* End Service Section */}
      </>
    </>
  );
};

export default ServicePage;
