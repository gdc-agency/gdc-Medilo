import AboutSection2 from '../../Components/About/AboutSection2';
import BlogSection from '../../Components/BlogsSection';
import BrandsSlider from '../../Components/BrandsSection';
import ContactSection from '../../Components/ContactSection';
import CtaSection3 from '../../Components/CtaSection.jsx/CtaSection3';
import DentalSolution from '../../Components/DentalSolution';
import HeroSection2 from '../../Components/HeroSection/HeroSection2';
import LocationMap from '../../Components/LocationMap/Index';
import MedicalSolution2 from '../../Components/MedicalSolutionSection/MedicalSolution2';
import ProcessSection1 from '../../Components/ProcessSection/ProcessSection1';
import ProjectsSection2 from '../../Components/ProjectSection/ProjectsSection2';
import Section from '../../Components/Section';
import ServiceSection3 from '../../Components/Service/ServiceSection3';
import TimelineSection from '../../Components/TimelineSection';
const heroData = {
  slides: [
    {
      backgroundImage: '/assets/img/hero_slider_5.jpg',
      title: 'Doctors Need Help Patient',
      highlight: 'Service',
      subtitle:
        'Medical ers piciatis unde omnis iste natus this mountains, far from the countries for medical.',
      features: [
        'This man for it Medical Doctor.',
        'We provide a revolutionary',
      ],

      btnText: 'Contact Now',
      btnLink: '/contact',
      btnText2: 'Discover More',
      btnLink2: '/about',

      shapeImage: 'assets/img/icons/hero_shape_2.png',
    },
    {
      backgroundImage: '/assets/img/hero_slider_6.jpg',
      title: 'Doctors Need Help Patient',
      highlight: 'Service',
      subtitle:
        'Medical ers piciatis unde omnis iste natus this mountains, far from the countries for medical.',
      features: [
        'This man for it Medical Doctor.',
        'We provide a revolutionary',
      ],
      btnText: 'Contact Now',
      btnLink: '/contact',
      btnText2: 'Discover More',
      btnLink2: '/about',
      shapeImage: '/assets/img/icons/hero_shape_2.png',
    },
    {
      backgroundImage: '/assets/img/hero_slider_7.jpg',
      title: 'Doctors Need Help Patient',
      highlight: 'Service',
      subtitle:
        'Medical ers piciatis unde omnis iste natus this mountains, far from the countries for medical.',
      features: [
        'This man for it Medical Doctor.',
        'We provide a revolutionary',
      ],
      btnText: 'Contact Now',
      btnLink: '/contact',
      btnText2: 'Discover More',
      btnLink2: '/about',
      shapeImage: '/assets/img/icons/hero_shape_2.png',
    },
  ],
  emergency: {
    icon: '/assets/img/icons/call_icon_1.png',
    title: 'Emergency Call',
    phone1: '+8965 55000 222',
    phone2: '+5699 5333 322',
  },
};

const ctaData = {
  imageUrl: '/assets/img/cta_img_2.png',
  imageAlt: 'Team Support',
  title: 'Meet The Team Support Medical Service.',
  subtitle: 'For us, there are no minor aspects, because a quality',
  buttonText: 'Booking Now',
  buttonLink: '/appointments',
};

const aboutData = {
  aboutImage: '/assets/img/about_img_6.png',
  subtitle: 'OUR ABOUT US',
  title: 'More Than 26+ Years About Provide Medical.',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
  experienceBg: '/assets/img/experience_bg.jpg',
  experienceNumber: '26+',
  experienceTitle: 'Experience',
  iconBoxes: [
    {
      iconSrc: '/assets/img/icons/about_icon_1.png',
      iconAlt: 'Client Support',
      title: 'Client Support',
    },
    {
      iconSrc: '/assets/img/icons/about_icon_2.png',
      iconAlt: 'Doctor Support',
      title: 'Doctor Support',
    },
  ],
  progressLabel: 'Dental Service Medical',
  progressValue: '40',
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoText: 'How We Work',
  signImage: 'assets/img/sign.png',
  sectionImage: 'assets/img/about_section_img_3.png',
};

const serviceSectionData = {
  sectionTitle: 'High-Quality Services This Doctor',
  sectionSubtitle: 'OUR BEST SERVICE',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  slides: [
    {
      imageUrl: '/assets/img/service_2.jpg',
      icon: '/assets/img/icons/service_icon_20.png',
      title: 'Dental Of Service',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      detailsLink: '/service/service-details',
      detailsText: 'Read More',
      bgImagUrl: '/assets/img/service_bg_4.jpg',
    },
    {
      imageUrl: '/assets/img/service_3.jpg',
      icon: '/assets/img/icons/service_icon_1.png',
      title: 'Individual Approach',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      detailsLink: '/service/service-details',
      detailsText: 'Read More',
      bgImagUrl: '/assets/img/service_bg_4.jpg',
    },
    {
      imageUrl: '/assets/img/service_4.jpg',
      icon: '/assets/img/icons/service_icon_21.png',
      title: 'Check Treatment',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      detailsLink: '/service/service-details',
      detailsText: 'Read More',
      bgImagUrl: '/assets/img/service_bg_4.jpg',
    },
    // Add more slides as needed
  ],
};

const medicalSolutionData = {
  subtitle: 'OUR SOLUTION DENTAL',
  title: 'Your Dental Solution This Provide Service.',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
  links: [
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/tab_link_icon_5.png',
      iconAlt: 'Teblet This Medical Dental Care',
      text: 'Teblet This Medical Dental Care',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_1.png',
      iconAlt: 'Expert This Medical Dental Care',
      text: 'Expert This Medical Dental Care',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_4.png',
      iconAlt: 'Infection Prevention Medical Dental',
      text: 'Infection Prevention Medical Dental',
    },
    {
      href: '/service/service-details',
      iconSrc: '/assets/img/icons/service_icon_6.png',
      iconAlt: 'Preventive Care Medical Dental',
      text: 'Preventive Care Medical Dental',
    },
  ],
  thumbnailSrc: '/assets/img/medical_solution_4.png',
};

const dentalSolutionData = {
  backgroundClass: 'cs_blue_bg',

  wrapperClass: 'cs_blue_bg',
  subtitle: 'OUR SOLUTION DENTAL',
  title: 'Your Dental Solution This Provide Service.',
  slides: [
    {
      heading: 'Reviews',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands, feel safe and comfortable in establishing.',
      avatarImage: '/assets/img/avatar_1.png',
      avatarAlt: 'Avatar',
      avatarName: 'Dr. Mehara Bara',
      avatarTitle: 'Dental Manager',
      rating: 4,
    },
    {
      heading: 'Reviews',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands, feel safe and comfortable in establishing.',
      avatarImage: '/assets/img/avatar_1.png',
      avatarAlt: 'Avatar',
      avatarName: 'Dr. Mehara Bara',
      avatarTitle: 'Dental Manager',
      rating: 2,
    },
    {
      heading: 'Reviews',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands, feel safe and comfortable in establishing.',
      avatarImage: '/assets/img/avatar_1.png',
      avatarAlt: 'Avatar',
      avatarName: 'Dr. Mehara Bara',
      avatarTitle: 'Dental Manager',
      rating: 3,
    },
  ],
  shapeImage: '/assets/img/msg_quote_1.png',
};

const timeLineData = {
  subtitle: 'OUR TIMETABLE',
  title: 'Events Calendar Specialist This <br />Timetabel Meet',

  scheduleData: {
    days: [
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    times: [
      {
        time: '10.00',
        schedules: [
          {
            title: 'Pulmonary',
            timeRange: '10.00-11.00',
            doctor: 'Laparoscopy',
          },
          null,
          {
            title: 'Cardiology',
            timeRange: '10.00-11.00',
            doctor: 'Laparoscopy',
          },
          null,
          { title: 'Pulmonary', timeRange: '10.00-11.00', doctor: 'Routine' },
          null,
          { title: 'Cardiology', timeRange: '10.00-11.00', doctor: 'Runada' },
        ],
      },
      {
        time: '11.00',
        schedules: [
          { title: 'Dental', timeRange: '11.00-12.00', doctor: 'Dr.Porta' },
          {
            title: 'Cardiology',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
          null,
          {
            title: 'Pulmonary',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
          null,
          {
            title: 'Cardiology',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
          {
            title: 'Cardiology',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
        ],
      },
      {
        time: '11.00',
        schedules: [
          { title: 'Dental', timeRange: '11.00-12.00', doctor: 'Dr.Porta' },
          null,
          {
            title: 'Cardiology',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
          {
            title: 'Pulmonary',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
          null,
          {
            title: 'Cardiology',
            timeRange: '11.00-12.00',
            doctor: 'Randy Nelson',
          },
          null,
        ],
      },
      // Add more time slots as needed
    ],
  },
};

const projectSectionData = {
  heading: {
    subtitle: 'OUR PORTFOLIO',
    title: 'All The Great Work That Medical Service',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
    variant: 'cs_type_1',
  },
  projects: [
    {
      index: '01',
      title: 'Preventive Care',
      subtitle: 'Medical competitor research startup to financial',
      overlayImage: 'assets/img/project_10.jpg',
      thumbnailImage: 'assets/img/project_11.png',
      thumbnailShape: null,
      link: '/',
    },
    {
      index: '02',
      title: 'Heart Surgery',
      subtitle: 'Medical competitor research startup to financial',
      overlayImage: '/assets/img/project_10.jpg',
      thumbnailImage: '/assets/img/project_12.png',
      thumbnailShape: null,
      link: '/',
    },
    {
      index: '03',
      title: 'Cardio-Oncology',
      subtitle: 'Medical competitor research startup to financial',
      overlayImage: '/assets/img/project_10.jpg',
      thumbnailImage: '/assets/img/project_13.png',
      thumbnailShape: null,
      link: '/',
    },
    {
      index: '04',
      title: 'Service & Check',
      subtitle: 'Medical competitor research startup to financial',
      overlayImage: 'assets/img/project_10.jpg',
      thumbnailImage: '/assets/img/project_11.png',
      thumbnailShape: '/assets/img/project_thumb_shape.png',
      link: '/',
    },
    {
      index: '05',
      title: 'Therapeutic Check',
      subtitle: 'Medical competitor research startup to financial',
      overlayImage: '/assets/img/project_10.jpg',
      thumbnailImage: '/assets/img/project_14.png',
      thumbnailShape: '/assets/img/project_thumb_shape.png',
      link: '/',
    },
  ],
};

const brandData = [
  { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
];

const sectionData = {
  heading: {
    subtitle: 'OUR WORKING PROCESS',
    title: 'Meet Our Specialist This <br /> Doctor Meeting',
    variant: 'text-center',
  },
  processes: [
    {
      index: '01',
      title: 'Service & Check',
      subtitle: 'Medical competitor research dental startup to financial',
      icon: 'assets/img/icons/process_icon_1.png',
      shape: 'assets/img/iconbox_shape.png',
      shapePosition: 'cs_right',
      active: false,
    },
    {
      index: '02',
      title: 'Infection Prevention',
      subtitle: 'Medical competitor research dental startup to financial',
      icon: 'assets/img/icons/process_icon_2.png',
      shape: null,
      shapePosition: '',
      active: true,
    },
    {
      index: '03',
      title: 'Complete Check',
      subtitle: 'Medical competitor research dental startup to financial',
      icon: 'assets/img/icons/process_icon_3.png',
      shape: 'assets/img/iconbox_shape.png',
      shapePosition: 'cs_left',
      active: false,
    },
  ],
  button: {
    variant: 'cs_btn cs_style_1 cs_color_1',
    text: 'View All Work',
    url: '/',
  },
  backgroundImage: 'assets/img/process_bg_1.jpg',
};

const contactData = {
  sectionSubtitle: 'CONTACT US',
  SectionTitle: 'Meet Our Specialist This <br />Doctor Meet',
  teethShapeImg: 'assets/img/icons/hero_shape_3.png',
  contactImg: 'assets/img/contact.png',
  iconBox: {
    style: 'cs_style_4',
    icon: 'assets/img/icons/call_icon_1.png',
    title: 'Emergency Call',
    subtitle: '24/7 – Support and easy',
  },
};

const mapData = {
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851960224!2d-0.2664050245106056!3d51.52852620113951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z4Kay4Kao4KeN4Kah4KaoLCDgpq_gp4HgppXgp43gpqTgprDgpr7gppzgp43gpq8!5e0!3m2!1sbn!2sbd!4v1723284219451!5m2!1sbn!2sbd',
};

const blogsData = {
  sectionTitle: 'OUR LARGEST BLOG',
  sectionSubtitle: 'Latest Posts &amp; Articles',
  postsData: [
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'There Is Only One Thing That Is Hospital.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_2.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'This Working World and Infection Prevention.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_3.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
  ],
};
const HomeV3 = () => {
  return (
    <>
      {/* Start Hero Section */}
      <HeroSection2 data={heroData} />
      {/* End Hero Section */}

      {/* Start CTA Section */}

      <Section className="cs_cta cs_style_1 cs_type_1 position-relative overflow-hidden">
        <CtaSection3 data={ctaData} />
      </Section>

      {/* End CTA Section */}
      {/* Start About Section */}

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 cs_type_2 position-relative"
      >
        <AboutSection2 data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg"
      >
        <ServiceSection3 data={serviceSectionData} />
      </Section>

      {/* End Service Section */}
      {/* Start Medical Solution Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <MedicalSolution2 data={medicalSolutionData} />
      </Section>

      {/* End Medical Solution Section */}
      {/* Start Dental Solution Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="76"
        bottomSpaceLg="70"
        bottomSpaceMd="76"
        className={'cs_bg_filed'}
        backgroundImage="/assets/img/medical_solution_bg_2.jpg"
      >
        <DentalSolution data={dentalSolutionData} />
      </Section>

      {/* End Dental Solution Section */}
      {/* Start Timeline Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <TimelineSection data={timeLineData} />
      </Section>

      {/* End Timeline Section */}
      {/* Start Projects Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <ProjectsSection2 data={projectSectionData} />
      </Section>

      {/* End Projects Section */}
      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="110" className={'cs_blue_bg'}>
        <BrandsSlider hr bgColor={'cs_blue_bg'} data={brandData} />
      </Section>

      {/* End Brand Section */}
      {/* Start Process Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="110"
        className={'cs_process cs_style_1 position-relative'}
      >
        <ProcessSection1 data={sectionData} />
      </Section>

      {/* End Process Section */}
      {/* Start Contact Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_contact'}
      >
        <ContactSection data={contactData} />
      </Section>

      {/* End Contact Section */}
      {/* Start Location Map */}

      <LocationMap mapSrc={mapData.mapSrc} />

      {/* End Location Map */}
      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>

      {/* End Blog Section */}
    </>
  );
};

export default HomeV3;
