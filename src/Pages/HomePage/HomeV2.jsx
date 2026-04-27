import AboutSection1 from '../../Components/About/AboutSection1';
import BlogSection from '../../Components/BlogsSection';
import BrandsSlider from '../../Components/BrandsSection';
import CtaSection2 from '../../Components/CtaSection.jsx/CtaSection2';
import CounterSection2 from '../../Components/FunSection/CounterSection2';
import HeroSection1 from '../../Components/HeroSection/HeroSection1';
import MedicalSolution from '../../Components/MedicalSolutionSection/MedicalSolution1';
import ProcessSection from '../../Components/ProcessSection';
import ProjectsSection1 from '../../Components/ProjectSection/ProjectsSection1';
import Section from '../../Components/Section';
import ServiceSection2 from '../../Components/Service/ServiceSection2';
import TeamSection from '../../Components/TeamSection';
import TestimonialSection from '../../Components/TestimonialSection';
import VideoSection from '../../Components/VideoSection';
const HeroData = {
  backgroundImage: 'assets/img/hero_slider_4.jpg',
  title: 'Doctors Need Help Patient Service.',
  subtitle:
    'Medical ers piciatis unde omnis iste natus this mountains, far from the countries for medical.',
  features: [
    'This man for it Medical Doctor.',
    'We provide a revolutionary medical service.',
  ],

  btnText: 'Contact Now',
  btnHref: '/contact',

  BtnText1: 'How We Work',
  videoHref: 'https://www.youtube.com/embed/rRid6GCJtgc',

  heroShape: 'assets/img/icons/hero_shape_1.png',
  supportText: {
    number: '24',
    unit: 'Hours',
    description: 'Support',
  },
  iconBoxes: [
    {
      icon: 'assets/img/icons/call_icon_1.png',
      title: 'Emergency Call',
      subtitle: '24/7 – Support and easy',
      buttonHref: '/appointments',
      buttonText: 'Appointment Now',
    },
    {
      icon: 'assets/img/icons/message_icon_1.png',
      title: 'Your Message',
      subtitle: 'medixo25822@gmail.com',
      buttonHref: '/appointments',
      buttonText: 'Appointment Now',
    },
  ],
};

const aboutData = {
  sectionSubtitle: 'OUR ABOUT US',
  sectionTitle: 'More Than 26+ Years About Provide Medical.',
  aboutText:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
  experienceYears: '26+',
  experienceTitle: 'Experience',

  iconUrl: '/assets/img/icons/about_icon_1.png',
  title: 'Client Support',
  imgUrl: '/assets/img/about_img_4.jpg',

  iconUrl2: '/assets/img/icons/about_icon_2.png',
  title2: 'Doctor Support',
  imgUrl2: 'assets/img/about_img_5.jpg',

  aboutIconboxSubtitle:
    'There are many variations of pass available this medical service the team',
  readMoreText: 'READ MORE +',
  readMoreLink: '/',
  videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoText: 'How We Work',
  aboutMoreLink: '/about',
  aboutMoreText: 'About More',
  sectionImageUrl: '/assets/img/about_section_img_2.png',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 567,
    suffix: '+',
    title: 'Active Clients',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 23,
    suffix: 'K+',
    title: 'Team Support',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 241,
    suffix: '+',
    title: 'Projects Completed',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 16,
    suffix: 'K+',
    title: 'Award winner',
  },
];

const serviceData = {
  subtitle: 'OUR BEST SERVICE',
  title: 'High-Quality Services This Doctor',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
  services: [
    {
      iconSrc: 'assets/img/icons/service_icon_15.png',
      title: 'Pharmacology',
      subtitle:
        'Medical competitor research doctor healthy service<br> startup to financial',
      link: '/service/service-details',
      imageSrc: 'assets/img/service_1.png',
    },
    {
      iconSrc: 'assets/img/icons/service_icon_16.png',
      title: 'Orthopedic',
      subtitle:
        'Medical competitor research doctor healthy service<br> startup to financial',
      link: '/service/service-details',
      imageSrc: 'assets/img/service_1.png',
    },
    {
      iconSrc: 'assets/img/icons/service_icon_17.png',
      title: 'Hematology',
      subtitle:
        'Medical competitor research doctor healthy service<br> startup to financial',
      link: '/service/service-details',
      imageSrc: 'assets/img/service_1.png',
    },
    {
      iconSrc: 'assets/img/icons/service_icon_18.png',
      title: 'Plastic Surgery',
      subtitle:
        'Medical competitor research doctor healthy service<br> startup to financial',
      link: '/service/service-details',
      imageSrc: 'assets/img/service_1.png',
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

const videoSectionData = {
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  title: 'We Provide Medical This Services ',
  title2: '<br /> Who Generally Alone',
  highlightedText: 'Health',
  subtitle:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software',
  btnText: 'Contact Now',
  btnLink: '/contact',
  btnText1: 'Discover More',
  btnLink1: '/about',

  shapeImage: 'assets/img/medical_brand.png',
};

const medicalSolutionData = {
  sectionSubtitle: 'OUR CHOOSE US',
  sectionTitle: 'More Than Working Now<br> Solution Medical.',
  sectionDescription:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  cards: [
    {
      icon: '/assets/img/icons/service_icon_19.png',
      index: '01',
      title: 'Medical Service',
      description:
        "Lorem Ipsum is simply dummy text of the printing and Lorem been the industry's.",
    },
    {
      icon: '/assets/img/icons/service_icon_10.png',
      index: '02',
      title: 'Blood & Check',
      description:
        "Lorem Ipsum is simply dummy text of the printing and Lorem been the industry's.",
    },
    {
      icon: '/assets/img/icons/service_icon_11.png',
      index: '03',
      title: 'Heart-Beat',
      description:
        "Lorem Ipsum is simply dummy text of the printing and Lorem been the industry's.",
    },
  ],
  mainImage: '/assets/img/medical_solution_3.png',
};

const ctaSectionData = {
  title: 'Meet The Team Support',
  subtitle: 'For us, there are because a quality',
  buttonText: 'Contact Now',
  buttonLink: '/contact',
};

const projectsSectionData = {
  sectionTitle: 'All The Great Work That Medical Service',
  sectionSubtitle: 'OUR PORTFOLIO',
  sectionDescription:
    'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  projects: [
    {
      id: 1,
      title: 'Medical Board',
      subtitle: 'Medical / Doctor',
      imageSrc: '/assets/img/project_4.jpg',
      link: '/',
    },
    {
      id: 2,
      title: 'Gynecology Project',
      subtitle: 'Medical / Doctor',
      imageSrc: '/assets/img/project_5.jpg',
      link: '/',
    },
    {
      id: 3,
      title: 'Dental Project',
      subtitle: 'Medical / Doctor',
      imageSrc: '/assets/img/project_6.jpg',
      link: '/',
    },
    {
      id: 4,
      title: 'Neurology Project',
      subtitle: 'Medical / Doctor',
      imageSrc: '/assets/img/project_7.jpg',
      link: '/',
    },
    {
      id: 5,
      title: 'Eye Care Project',
      subtitle: 'Medical / Doctor',
      imageSrc: '/assets/img/project_8.jpg',
      link: '/',
    },
    {
      id: 6,
      title: 'Surgery Project',
      subtitle: 'Medical / Doctor',
      imageSrc: '/assets/img/project_9.jpg',
      link: '/',
    },
  ],
};

const teamData = {
  subtitle: 'OUR TEAM MEMBER',
  title: ' Meet Our Specialist This <br />Doctor Meeting',
  sliderData: [
    {
      name: 'Dr. Norma Pedric',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_1.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. James Lewis',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_3.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Sophia Anderson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_4.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Michael Thompson',
      profession: 'Neurologist',
      imageUrl: 'assets/img/team_5.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. David Wilson',
      profession: 'Neurologist',
      imageUrl: '/assets/img/team_6.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
  ],
};

const testimonialData = {
  thumbnail: '/assets/img/testimonial_1.png',
  testimonials: [
    {
      rating: 2,
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands , feel safe and comfortable in establishing.',
      avatar: 'assets/img/avatar_1.png',
      name: 'Dr. Mehara Bara',
      position: 'Dental Manager',
    },
    {
      rating: 4,
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands , feel safe and comfortable in establishing.',
      avatar: 'assets/img/avatar_2.png',
      name: 'John Doe',
      position: 'Healthcare Professional',
    },
    {
      rating: 3,
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands , feel safe and comfortable in establishing.',
      avatar: 'assets/img/avatar_2.png',
      name: 'John Doe',
      position: 'Healthcare Professional',
    },
  ],
};

const processData = {
  sectionSubtitle: 'OUR WORKING PROCESS',
  sectionTitle: 'This Doctor Supporting<br> This Patient Work',
  sectionDescription:
    'We are privileged to work with hundreds of future-thinking medial,including many of the world’s top hardware, software, and brands,feel safe and comfortable in establishing.',
  processSlides: [
    {
      id: 1,
      imageUrl: '/assets/img/process_1.png',
      title: 'Make Appointment',
      subtitle: 'Medical dolor reprehender velit dolore fugiat',
      bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
      link: '/service/service-details',
    },
    {
      id: 2,
      imageUrl: '/assets/img/process_2.png',
      title: 'Get Consultant',
      subtitle: 'Medical dolor reprehender velit dolore fugiat',
      bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
      link: '/service/service-details',
    },
    {
      id: 3,
      imageUrl: '/assets/img/process_3.png',
      title: 'Take Treatment',
      subtitle: 'Medical dolor reprehender velit dolore fugiat',
      bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
      link: '/service/service-details',
    },
    {
      id: 4,
      imageUrl: '/assets/img/process_4.png',
      title: 'Get Relief',
      subtitle: 'Medical dolor reprehender velit dolore fugiat',
      bgImageUrl: '/assets/img/overlay_bg_1.jpeg',
      link: '/service/service-details',
    },
  ],
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
const HomeV2 = () => {
  return (
    <>
      {/* Start Hero Section */}
      <HeroSection1 data={HeroData} />
      {/* End Hero Section */}
      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 cs_type_1 position-relative"
      >
        <AboutSection1 data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>

      {/* End Counter Section */}
      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="assets/img/service_bg_3.jpg"
      >
        <ServiceSection2 data={serviceData} />
      </Section>

      {/* End Service Section */}
      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider hr={true} data={brandData} />
      </Section>

      {/* End Brand Section */}
      {/* Start Video Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_video_area position-relative"
      >
        <VideoSection data={videoSectionData} />
      </Section>

      {/* End Video Section */}
      {/* Start Medical Solution Section */}

      <Section
        className="cs_blue_bg position-relative"
        backgroundImage="/assets/img/medical_solution_bg_1.jpg"
      >
        <MedicalSolution data={medicalSolutionData} />
      </Section>

      {/* End Medical Solution Section */}
      {/* Start CTA Section */}
      <Section className="cs_cta cs_style_3 cs_accent_bg">
        <CtaSection2 data={ctaSectionData} />
      </Section>

      {/* End CTA Section */}
      {/* Start Projects Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <ProjectsSection1 data={projectsSectionData} />
      </Section>

      {/* End Projects Section */}
      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className="cs_team_section position-relative"
      >
        <TeamSection
          variant={'cs_pagination cs_style_2 cs_accent_color'}
          bgColor={true}
          data={teamData}
        />
      </Section>

      {/* End Team Section */}
      {/* Start Testimonial Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_testimonial_area"
        backgroundImage="/assets/img/testomonial_bg_1.png"
      >
        <TestimonialSection data={testimonialData} />
      </Section>

      {/* End Testimonial Section */}
      {/* Start Process Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg_2"
      >
        <ProcessSection data={processData} />
      </Section>

      {/* End Process Section */}
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

export default HomeV2;
