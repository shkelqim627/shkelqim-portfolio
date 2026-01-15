const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400 font-inter">
          &copy; {new Date().getFullYear()} Shkelqim Osmani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
