import React from 'react';
import PageHeading from '../../Components/PageHeading';
import DoctorDetailsSection from '../../Components/DoctorDetailsSection';
import {
  FaCertificate,
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
  FaSuitcase,
} from 'react-icons/fa6';
import TeamSection from '../../Components/TeamSection';
import Section from '../../Components/Section';

const headingData = {
  title: 'Doctor Details',
};

const doctorDetails = {
  name: 'Dr. Lataro Bara',
  subtitle: 'Manager',
  description: [
    'We irtual desktop offers a fast and reliable best from anywhere. A truly powerful tool where your data and applications are secured in a private location in the prestigious Telehouse data centre in London.',
    "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...",
    "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...",
  ],
  image: '/assets/img/doctor_details_1.jpeg',
  info: [
    {
      icon: <FaLocationDot />,
      title: 'Location',
      subtitle: 'Dhaka, Dhaka 31',
      secIcon: <FaEnvelope />,
      secTitle: 'E-mail:',
      secSubtitle: 'ranst@g-mail.com',
    },
    {
      icon: <FaCertificate />,
      title: 'Qualification',
      subtitle: 'M.S.S',
      secIcon: <FaGlobe />,
      secTitle: 'Website',
      secSubtitle: 'demo.com',
    },
    {
      icon: <FaSuitcase />,
      title: 'Experience',
      subtitle: '2 - 4 Years',
    },
  ],
  progressBars: [
    { label: 'Medical', percentage: 44 },
    { label: 'Solution', percentage: 78 },
    { label: 'Dental', percentage: 65 },
    { label: 'Medical Lab', percentage: 85 },
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
      imageUrl: '/assets/img/team_6.jpg',
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
const DoctorsDetailsPage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="80" topSpaceMd="120">
        <DoctorDetailsSection data={doctorDetails} />
      </Section>

      {/* Start Team Section */}
      <Section topSpaceLg="80" topSpaceMd="110">
        <TeamSection variant={'cs_pagination cs_style_2'} data={teamData} />
      </Section>

      {/* End Team Section */}
    </>
  );
};

export default DoctorsDetailsPage;
