import { FiSend } from 'react-icons/fi';

import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import bcrypt from 'bcryptjs';

export const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com ',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 95,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
  ],
  categories: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
    },
  ],
  freebies: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      tag: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
  ],
  services: [
    {
      name: 'Ecommerce',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      price: 70,
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
    {
      name: 'Ecommerce',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      price: 70,
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
    {
      name: 'Ecommerce',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      price: 70,
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
  ],
  posts: [
    {
      name: 'Ecommerce',
      slug: 'free-shir',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
    {
      name: 'Ecommerce',
      slug: 'free-shi',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
    {
      name: 'Ecommerce',
      slug: 'free-sh',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
    {
      name: 'Ecommerce',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
      downloadFile: '/images/banner1.jpg',
    },
  ],
};

export const header = {
  logo: '/img/header/logo.svg',
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-me' },
  { name: 'Shop', href: '/search' },
  { name: 'Posts', href: '/search-posts' },
  { name: 'Contact', href: '/contact' },
];

export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'What we do',
    href: 'skills',
  },
  {
    name: 'Our team',
    href: 'team',
  },
  {
    name: 'Contact us',
    href: 'contact',
  },
];

export const product = {
  title: 'The Product we work with.',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: FaPlay,
      title: 'Cross platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: FaPlay,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: FaPlay,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};

export const banner = {
  titlePart1: 'Get the best part of your day',
  titlePart2: '– you fit here.',
  subtitle:
    'We provide serious fitness but within a fun and friendly, safe space.',
  textBtn: 'Join Now',
  img: '/img/banner/banner.png',
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: '/img/model-black.png',
  btnText: 'make a reservation',
};

export const about = {
  icon: '/img/about/icons/users-icn.svg',
  title: 'Our misson',
  subtitle1:
    'This is where innovation, faith, and excellence meet.I specialize in creating high-ranking, SEO-optimized web apps, automated business solutions, and strategic marketing services that help medical professionals achieve growth and financial freedom.',
  subtitle2:
    'My mission is deeply rooted in my faith in Jesus Christ, making God the cornerstone of everything we do.',
  link: 'More about me',
};

export const workouts = {
  icon: '/img/workouts/icons/calendar.svg',
  title: 'Training programs',
  programs: [
    {
      image: '/img/workouts/resistance.png',
      name: 'Resistance',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Boxing',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Body Pump',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Yoga',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Full Body',
    },
  ],
};

export const pricing = {
  icon: '/img/pricing/icons/price.svg',
  title: 'Pricing plan',
  plans: [
    {
      name: 'Social Media',
      price: '3899',
      list: [
        { name: 'FREE Photoshoot(30MIN)' },
        { name: 'Social Media Audit' },
        { name: 'free fitness consultation' },
        { name: 'Facebook,Instagram, TikTok& X Setup' },
        { name: '30 Day Graphics & Social Media Content Strategy' },
        { name: '5 Offer Posters +5 Day Paid Facebook ADs' },
        { name: 'Market on 20 Groups around your area' },
      ],
      delay: 600,
    },
    {
      name: 'Basic',
      price: '7500',
      list: [
        { name: '5 Webpages' },
        { name: 'Google My Business' },
        { name: 'Google Analytics Setup' },
        { name: 'Automated Booking' },
        { name: 'Technical SEO' },
        { name: 'Keywords SEO Plan' },
        { name: 'Blog System + 1 Free Article' },
        { name: 'Google Analytics Setup' },
      ],
      delay: 800,
    },
    {
      name: 'Basic+Marketing',
      price: '9800',
      list: [
        { name: '10 Webpages' },
        { name: 'Google My Business' },
        { name: 'Google Analytics Setup' },
        { name: 'Automated Booking' },
        { name: 'Technical SEO' },
        { name: 'Keywords SEO Plan' },
        { name: 'Blog System + 1 Free Article' },
        { name: '30 Day Social Media Content' },
      ],
      delay: 1000,
    },
    {
      name: 'Online Business',
      price: 'Quote',
      list: [
        { name: '20 Webpages' },
        { name: 'Google My Business' },
        { name: 'Google Analytics Setup' },
        { name: 'Automated Booking' },
        { name: 'Technical SEO' },
        { name: 'Keywords SEO Plan' },
        { name: 'Blog System + 1 Free Article' },
        { name: '24/7 Online Store' },
        { name: 'Free Photoshoot' },
        { name: '30 Day Social Media Content' },
      ],
      delay: 1000,
    },
  ],
};

export const faq = {
  icon: '/img/faq/icons/question-mark.svg',
  title: 'FAQ',
  accordions: [
    {
      question: 'How long does it take to develop my web app?',
      answer:
        'Typical development takes 4-6 weeks, depending on your business needs..',
    },
    {
      question: 'What’s included in the automation process?',
      answer:
        'Automated booking, patient onboarding, and email follow-ups are standard.',
    },
    {
      question: 'Do you offer support after project completion?',
      answer:
        'Yes, we provide ongoing updates and analytics to ensure continued success.',
    },
  ],
};

export const join = {
  image: '/img/offer.jpg',
  title: 'Premium Website + Marketing Package',
  subtitle:
    'SEO-optimized web app with seamless booking features. Automated customer funnel to onboard and retain patients. 90-day social media strategy to grow your audience. Free headshot photoshoot or practice showcase video.',
  btnText: ' Book Your Free Call Now',
};

export const footer = {
  logo: '/img/header/logo.svg',
  copyrightText: 'All rights reserved. Gymme 2022.',
};

export const accomodations = [
  {
    image: '/img/workouts/resistance.png',
    title: 'Resortive Yoga Training & Immersion',
    institution: 'University of Mpumpmalanga',
    price: 4500.0,
    slug: 'riverside',
    nearerPlaces: 'Riverside mall. NST Botenical Garden',
    exerpt:
      'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '100',
  },
  {
    image: '/img/workouts/resistance.png',
    title: 'Resortive Yoga Training & Immersion',
    institution: 'University of Johannesburg',
    price: 7500.0,
    slug: 'riverside',
    nearerPlaces: 'Riverside mall. NST Botenical Garden',
    exerpt:
      'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '80',
  },
  {
    image: '/img/workouts/resistance.png',
    title: 'Resortive Yoga Training & Immersion',
    institution: 'University of Bloemfontein',
    price: 9500.0,
    slug: 'riverside',
    nearerPlaces: 'Riverside mall. NST Botenical Garden',
    exerpt:
      'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '90',
  },
];

export const workoutsPosts = {
  icon: '/img/workouts/icons/calendar.svg',
  title: 'Training programs',
  programs: [
    {
      image: '/img/kmcport.PNG',
      name: 'KaNyamazane Medical Centre',
      category: 'health',
      postedAt: '14:87',
    },
    {
      image: '/img/mmwaport.PNG',
      name: 'Mzansimedical',
      category: 'health',
      postedAt: '14:87',
    },
    {
      image: '/img/thandotsxstore.PNG',
      name: 'ShoppingCart',
      category: 'Online Store',
      postedAt: '14:87',
    },
    {
      image: '/img/thoughthub.PNG',
      name: 'Studentgroove',
      category: 'Blog With Store',
      postedAt: '14:87',
    },
    {
      image: '/img/headless.PNG',
      name: 'ThoughtsHubs',
      category: 'Blog',
      postedAt: '14:87',
    },
    {
      image: '/img/escapehub.PNG',
      name: 'Escapehub',
      category: 'Travel Listing',
      postedAt: '14:87',
    },
  ],
};

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Mbombela Home office',
      subtitle:
        'I hold a Uni Diploma in ICT in App Development and I have 4 years experience in MERN & Next.js web development. I am a GodSon.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '429 Moya, KaNyamazane',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+27 71 281 113',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'thandomavweb@gmail.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'EThe consultation went beyond expectations, providing actionable steps to enhance my online presence.',
      image: '/img/testimonial/avatar1.png',
      name: 'Lindo Andy',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'The consultation went beyond expectations, providing actionable steps to enhance my online presence.',
      image: '/img/testimonial/avatar1.png',
      name: 'Yrudy Kganane',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'The consultation went beyond expectations, providing actionable steps to enhance my online presence.',
      image: '/img/testimonial/avatar1.png',
      name: 'Dr. Joel Mavuso',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: '/img/testimonial/avatar1.png',
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: '/img/testimonial/avatar1.png',
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const footerData = {
  about: {
    title: 'About Thando Mav Web',
    subtitle:
      'I hold a Uni Diploma in ICT in App Development and I have 4 years experience in MERN & Next.js web development. I am a GodSon.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '429 Moya, KaNyamazane',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+27 71 128 113',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'thandomavweb@gmail.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/about-me', name: 'About me' },
      { href: '/search', name: 'Shop' },
      { href: '/search-posts', name: 'Posts' },
      { href: '/about-me', name: 'My services' },
      { href: '/contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 4:00pm' },
      { name: 'Sat / 10:00 - 12:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Stay ahead with strategies on grow your business online',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
