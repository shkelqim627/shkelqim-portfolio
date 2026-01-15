import mobaxluxImg from '../assets/3.png';
import catGalleryImg from '../assets/1.png';
import favoursImg from '../assets/2.png';
import proArmingImg from '../assets/4.png';

export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  fullDescription: string;
  impact?: string;
  features?: string[];
  gradient: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'MobaxLux',
    title: 'MobaxLux',
    category: 'E-Commerce',
    technologies: ['WordPress', 'Elementor', 'PHP', 'SEO'],
    description: 'Comprehensive e-commerce platform with mobile-first design. Boosted organic traffic by 35% in first month through SEO optimization.',
    fullDescription: 'Designed, developed, and launched a comprehensive e-commerce platform using WordPress and the Elementor page builder for fast deployment. The platform focuses heavily on mobile responsiveness and core SEO optimization.',
    impact: 'Successfully boosted organic site traffic by 35% in the first month post-launch through strategic SEO implementation and mobile optimization.',
    features: [
      'Mobile-responsive design optimized for all devices',
      'Advanced SEO configuration for improved search rankings',
      'Complete e-commerce functionality with product catalog',
      'Shopping cart and checkout integration',
      'Custom theme using Elementor page builder',
      'Performance optimization for fast loading speeds'
    ],
    gradient: 'from-yellow-400 to-orange-500',
    image: mobaxluxImg,
    liveUrl: 'https://mobaxlux.com/',
  },
  {
    id: 'Mini-cat-gallery',
    title: 'Mini Cat Gallery',
    category: 'Vue.js Gallery',
    technologies: ['Vue.js', 'RESTful API', 'State Management', 'CSS'],
    description: 'Dynamic gallery fetching random cat photos from The Cat API. Features centralized state management and responsive grid layout with modal viewing.',
    fullDescription: 'A front-end application built with Vue.js that dynamically fetches and displays a gallery of random cat photos from The Cat API. Demonstrates mastery of centralized state management and abstraction of all API logic into a dedicated service.',
    features: [
      'Centralized state management using Vue.js best practices',
      'Abstracted API logic in dedicated CatService.js',
      'Fully responsive grid layout',
      'Clean full-screen modal for viewing larger images',
      'Dynamic data fetching from The Cat API',
      'Smooth animations and transitions'
    ],
    gradient: 'from-purple-400 to-pink-500',
    image: catGalleryImg,
    liveUrl: 'https://cat-gallery-phi.vercel.app/',
    githubUrl: '#',
  },
  {
    id: 'Favours-portfolio',
   title: 'Favour\'s Portfolio',
    category: '',
    technologies: ['React', 'Node.js', 'EmailJS', 'Tailwind CSS'],
    description: 'Modern portfolio website with contact form integration. Built with React frontend and Node.js backend, featuring EmailJS for seamless communication.',
    fullDescription: 'Custom-developed portfolio built with React and Node.js to showcase modern web development skills. The site features a fully functional contact form powered by EmailJS for direct client communication.',
    impact: 'Successfully deployed a professional portfolio with integrated email functionality, demonstrating full-stack development capabilities.',
    features: [
      'React-based frontend with modern UI/UX',
      'Node.js backend for server-side logic',
      'EmailJS integration for contact form functionality',
      'Responsive design with Tailwind CSS',
      'Fast loading speeds with optimized performance',
      'Clean and professional design'
    ],
    gradient: 'from-blue-400 to-cyan-500',
    image: favoursImg,
    liveUrl: 'https://favour-personal-site.vercel.app/',
    githubUrl: '#',
  },
 // {
   // id: 'Pro-Arming',
   // title: 'Pro Arming',
  // category: 'Construction Services',
    // technologies: ['React', 'Vite', 'Tailwind CSS', 'Cloudinary', 'EmailJS', 'Framer Motion', 'React-i18next'],
    // description: 'Multi-language construction services website with advanced animations, contact forms, and professional portfolio showcase for Pro Arming company.',
    // fullDescription: 'A comprehensive, multi-language website for Pro Arming, a leading construction company specializing in arming services for residential and commercial projects in Tetovo and surrounding regions. The website features advanced animations, interactive galleries, and a fully functional contact system with EmailJS integration.',
    // impact: 'Successfully launched a professional web presence that effectively showcases the company\'s expertise with over 2 years of experience and 50+ completed projects, resulting in increased client inquiries and engagement.',
   // features: [
    //  'Multi-language support (Albanian/English/Macedonian) with React-i18next',
   //   'Advanced animations and transitions using Framer Motion',
    //  'Fully functional contact form with EmailJS integration',
    //  'Interactive project gallery with lightbox functionality',
    //  'Mobile-first responsive design optimized for all devices',
    //  'Fast loading with Vite build optimization and lazy loading',
    //  'SEO-optimized with meta tags and structured data',
    //  'Professional service presentation with animated counters',
    //  'Client testimonials carousel with smooth transitions',
    //  'Modern UI with glassmorphism effects and gradients'
    //],
   // gradient: 'from-orange-400 to-red-500',
   // image: proArmingImg,
  //  liveUrl: 'https://pro-arming.vercel.app/',
   // githubUrl: '#',
 // },
];
