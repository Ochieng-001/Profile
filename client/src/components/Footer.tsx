export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">John Doe</span>
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
