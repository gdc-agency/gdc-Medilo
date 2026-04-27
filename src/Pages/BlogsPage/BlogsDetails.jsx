import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import BlogsLeft from './BlogsDetailsSide/BlogsLeft';
import BlogsRight from './BlogsDetailsSide/BlogsRight';

const headingData = {
  title: 'Blog Details',
};

const leftSideData = {
  imageSrc: '/assets/img/post_details_1.jpeg',
  imageAlt: 'Post Image',
  text: 'Medilo',
  secText: 'June,10,2024',
  thirdSecTitle: 'Make an Appointment',

  content: [
    'It is a long established fact that a reader will be distracted by the readable content of a page is when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ique maiestatis sum quod sum ut alienum nec et to summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale essent electramei sum sums rodesset in pro, quo scripta feugait vidisse. Lorem ipsum dolor sit amet, eu duo ferri labor dicat Mea ex modo reque senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix ne his quod mundi consequat sum. There are not many of passages of lorem',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
  ],
  testimonial: {
    rating: 4,
    subtitle:
      'We are privileged to work hundreds of ncluding many of the world’s top hardware, dental, and brands , feel safe and comfortable',
    avatarSrc: '/assets/img/avatar_1.png',
    avatarAlt: 'Avatar',
    avatarName: 'Dr. Mehara Bara',
    avatarTitle: 'Dental Manager',
  },
  card: {
    title: 'Medical Lab:',
    subtitle: 'We businesss standard chunk of ness reproduced we bet it',
    progress: [
      { label: 'Dental', percentage: 85 },
      { label: 'Medical', percentage: 65 },
      { label: 'Solution', percentage: 78 },
    ],
  },

  commentTitle: 'Comments (3)',
  comments: [
    {
      avatarSrc: '/assets/img/avatar_2.png',
      avatarAlt: 'Image',
      name: 'Dr. Barat Mara',
      text: 'Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.',
      date: 'June 14, 2023',
      time: '12:00 AM',
      replay: 'Reply',
      link: '/',
    },
    {
      avatarSrc: '/assets/img/avatar_3.png',
      avatarAlt: 'Image',
      name: 'Dr. Morat Kara',
      text: 'Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.',
      date: 'June 14, 2023',
      time: '12:00 AM',
      replay: 'Reply',
      link: '/',
    },
  ],

  serviceOption: [
    { value: 'choose-service', label: 'Choose Service' },
    { value: 'crutches', label: 'Crutches' },
    { value: 'x-Ray', label: 'X-Ray' },
    { value: 'pulmonary', label: 'Pulmonary' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'dental-care', label: 'Dental Care' },
    { value: 'neurology', label: 'Neurology' },
  ],
};

const rightSideData = {
  searchPlaceholder: 'Search....',
  secTitle: 'Categories',
  service: {
    backgroundImage: '/assets/img/suegery_overlay.jpg',
    icon: '/assets/img/icons/service_icon_19.png',
    title: 'Heart Surgery',
    subtitle: 'Medical competitor research startup to financial',
    link: '/service/service-details',
  },
  recentPosts: [
    {
      imgSrc: '/assets/img/latest_post_1.jpeg',
      date: 'June,10,2024',
      title: 'We play chimney pot Chip bonne.',
      link: '/blog/blog-details',
    },
    {
      imgSrc: '/assets/img/latest_post_2.jpeg',
      date: 'June,10,2024',
      title: 'We play chimney pot Chip bonne.',
      link: '/blog/blog-details',
    },
    {
      imgSrc: '/assets/img/latest_post_3.jpeg',
      date: 'June,10,2024',
      title: 'We play chimney pot Chip bonne.',
      link: '/blog/blog-details',
    },
  ],
  categories: [
    { name: 'Dental 08', link: '#' },
    { name: 'Medical Lab 14', link: '#' },
    { name: 'Professional 12', link: '#' },
    { name: 'Technology 23', link: '#' },
    { name: 'Single-Business 17', link: '#' },
    { name: 'Pharmacy 22', link: '#' },
  ],
  secTitle2: 'Tags',
  tags: [
    { tagTitle: 'Doctor', tagUrl: '/' },
    { tagTitle: 'Glasses', tagUrl: '/' },
    { tagTitle: 'Surgery', tagUrl: '/' },
    { tagTitle: 'Optician', tagUrl: '/' },
    { tagTitle: 'Health', tagUrl: '/' },
    { tagTitle: 'Help', tagUrl: '/' },
  ],
};

const BlogsDetails = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <>
        {/* Start Blog Details Section */}

        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <div className="container">
            <div className="row">
              <BlogsLeft data={leftSideData} />

              <BlogsRight data={rightSideData} />
            </div>
          </div>
        </Section>

        {/* End Blog Details Section */}
      </>
    </>
  );
};

export default BlogsDetails;
