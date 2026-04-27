import React from 'react';
import PageHeading from '../../Components/PageHeading';

import BlogsSection1 from '../../Components/BlogsSection/BlogsSection1';
import Section from '../../Components/Section';

const headingData = {
  title: 'Blog Page',
};

const blogsSectionData = {
  sectionSubtitle: 'OUR LARGEST BLOG',
  sectionTitle: 'Latest Posts &amp; Articles',

  blogsData: [
    {
      id: 1,
      category: 'Technology',
      date: 'Jun 14',
      author: 'Admin',
      comments: '2 Comments',
      title: 'The Future of AI in Medicine',
      subtitle:
        'Explore the possibilities of AI in revolutionizing healthcare.',
      image: '/assets/img/post_1.jpeg',
      link: '/blog/blog-details',
      linkText: 'Read More',
    },
    {
      id: 2,
      category: 'Technology',
      date: 'Jun 14',
      author: 'Admin',
      comments: '2 Comments',
      title: 'The Future of AI in Medicine',
      subtitle:
        'Explore the possibilities of AI in revolutionizing healthcare.',
      image: '/assets/img/post_2.jpeg',
      link: '/blog/blog-details',
      linkText: 'Read More',
    },
    {
      id: 3,
      category: 'Health',
      date: 'Jul 20',
      author: 'Admin',
      comments: '5 Comments',
      title: '10 Tips for a Healthier Lifestyle',
      subtitle: 'A comprehensive guide to improving your daily habits.',
      image: '/assets/img/post_3.jpeg',
      link: '/blog/blog-details',
      linkText: 'Read More',
    },

    {
      id: 4,
      category: 'Nutrition',
      date: 'Sep 12',
      author: 'Nutritionist',
      comments: '8 Comments',
      title: 'Top 5 Superfoods for Your Diet',
      subtitle: 'Boost your health with these nutrient-rich foods.',
      image: '/assets/img/post_4.jpeg',
      link: '/blog/blog-details',
      linkText: 'Read More',
    },
    {
      id: 5,
      category: 'Nutrition',
      date: 'Sep 12',
      author: 'Nutritionist',
      comments: '8 Comments',
      title: 'Top 5 Superfoods for Your Diet',
      subtitle: 'Boost your health with these nutrient-rich foods.',
      image: '/assets/img/post_5.jpeg',
      link: '/blog/blog-details',
      linkText: 'Read More',
    },
    {
      id: 6,
      category: 'Fitness',
      date: 'Oct 21',
      author: 'Fitness Expert',
      comments: 'No Comments',
      title: 'Effective Workouts for Busy People',
      subtitle: 'Stay fit even with a hectic schedule.',
      image: '/assets/img/post_6.jpeg',
      link: '/blog/blog-details',
      linkText: 'Read More',
    },
  ],
};

const BlogsPage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogsSection1 data={blogsSectionData} />
      </Section>

      {/* End Blog Section */}
    </>
  );
};

export default BlogsPage;
