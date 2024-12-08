const Footer = () => {
    return (
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left Section */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-blue-600">MORENT</h2>
              <p className="text-gray-500 mt-2">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
  
            {/* Center Section */}
            <div className="flex flex-col md:flex-row gap-12">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">About</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">How it works</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Featured</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Partnership</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Business Relation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Community</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Events</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Blog</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Podcast</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Invite a friend</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Socials</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Discord</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Instagram</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Twitter</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-blue-600">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-300 font-semibold mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-800 text-sm">©2022 MORENT. All rights reserved</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-800 hover:text-blue-600 text-sm">Privacy & Policy</a>
              <a href="#" className="text-gray-800 hover:text-blue-600 text-sm">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;