import mobaxluxImg from '../assets/3.png';
import catGalleryImg from '../assets/1.png';
import favoursImg from '../assets/2.png';

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
    id: 'mobaxlux',
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
    id: 'mini-cat-gallery',
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
    id: 'favours-portfolio',
    title: 'Favours Portfolio',
    category: 'Full-Stack',
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
];
