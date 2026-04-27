import { BsTwitter } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const data = {
  backgroundImage: 'assets/img/footer_bg.jpg',
  logo: '/assets/img/footer_logo.svg',
  contact: [
    {
      icon: 'fa-regular fa-clock',
      text: 'Open Hours of Government: <br /> Mon - Fri: 8.00 am. - 6.00 pm.',
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: '13/A, Miranda Halim City.',
    },
    {
      icon: 'fa-solid fa-phone',
      text: '099 695 695 35',
    },
  ],
  socialLinks: [
    { href: '#', icon: 'fa-brands fa-facebook-f' },
    { href: '#', icon: 'fa-brands fa-pinterest-p' },
    { href: '#', icon: 'fa-brands fa-twitter' },
    { href: '#', icon: 'fa-brands fa-instagram' },
  ],
  widgets: [
    {
      title: 'Service',
      links: [
        { href: '#', text: 'Why choose us' },
        { href: '#', text: 'Our solutions' },
        { href: '#', text: 'Partners' },
        { href: '#', text: 'Core values' },
        { href: '#', text: 'Our projects' },
      ],
    },
    {
      title: 'Quick Link',
      links: [
        { href: '#', text: 'Residents' },
        { href: '#', text: 'Business' },
        { href: '#', text: 'Online Service' },
        { href: '#', text: 'Visiting' },
        { href: '#', text: 'Employment' },
      ],
    },
  ],
  recentPosts: [
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_1.png',
      date: '23 jun 2024',
      title: 'We round Solution york Blog',
    },
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_2.png',
      date: '20 jun 2024',
      title: 'The Medical Of This Working Health',
    },
  ],
  copyrightText: (
    <>
      Copyright © 2025{' '}
      <a
        href="https://www.globaldigitalcare.pk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Global Digital Care
      </a>
      , All Rights Reserved.
    </>
  ),
  footerMenu: [
    { href: 'about.html', text: 'About Us' },
    { href: '#', text: 'Events' },
    { href: 'blog.html', text: 'News' },
    { href: 'service.html', text: 'Service' },
  ],
};

const Footer = () => {
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: '/assets/img/footer_logo.svg',
    contactText:
      'Open Hours of Government: <br /> Mon - Fri: 8.00 am. - 6.00 pm.',
    contactText2: '13/A, Miranda Halim City.',
    contactText3: '099 695 695 35',
    facebookHref: '/',
    pinterestHref: '/',
    twitterHref: '/',
    instagramHref: '/',
    widgets: [
      {
        title: 'Service',
        links: [
          { href: '/service/service-details', text: 'Plastic Surgery' },
          { href: '/service/service-details', text: 'Pharmacology' },
          { href: '/service/service-details', text: 'Dental Care' },
          { href: '/service/service-details', text: 'Dental Care' },
          { href: '/service/service-details', text: 'Orthopedic' },
        ],
      },
      {
        title: 'Quick Link',
        links: [
          { href: '/', text: 'Home' },
          { href: '/about', text: 'About Us' },
          { href: '/service', text: 'Our Services' },
          { href: '/portfolio', text: 'Our Portfolio' },
          { href: '/contact', text: 'Contact' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_1.png',
        date: '23 jun 2024',
        title: 'We round Solution york Blog',
      },
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_2.png',
        date: '20 jun 2024',
        title: 'The Medical Of This Working Health',
      },
    ],
    copyrightText: (
      <>
        Copyright © 2025{' '}
        <a
          href="https://www.globaldigitalcare.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Global Digital Care
        </a>
        , All Rights Reserved.
      </>
    ),
    footerMenu: [
      { href: '/about', text: 'About Us' },
      { href: '/', text: 'Events' },
      { href: '/blog', text: 'News' },
      { href: '/service', text: 'Service' },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
                <img src={data.logo} alt="Logo" />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link to={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link to={data.pinterestHref} className="cs_center">
                  <i>
                    <FaPinterestP />
                  </i>
                </Link>
                <Link to={data.twitterHref} className="cs_center">
                  <i>
                    <BsTwitter />
                  </i>
                </Link>
                <Link to={data.instagramHref} className="cs_center">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Recent Posts</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link to={post.href} className="cs_recent_post_thumb">
                        <img src={post.image} alt="" />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link to={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
