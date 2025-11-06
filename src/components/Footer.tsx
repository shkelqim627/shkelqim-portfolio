interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t py-8 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          &copy; {new Date().getFullYear()} Shkelqim Osmani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
