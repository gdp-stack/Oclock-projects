import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">
              <img
                src="/assets/icons/pokeball.svg"
                className="no-filter"
                alt="Pokeball Logo"
              />
            </h2>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-white mb-2">Me suivre</h3>
            <div className="flex space-x-4">
              <a
                href="http://www.linkedin.com/in/g-de-place/"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.788-1.75-1.757 0-.967.784-1.755 1.75-1.755s1.75.788 1.75 1.755c0 .969-.784 1.757-1.75 1.757zm13.5 11.268h-3v-5.539c0-1.321-.026-3.021-1.84-3.021-1.841 0-2.123 1.439-2.123 2.928v5.632h-3v-10h2.881v1.367h.04c.402-.761 1.381-1.563 2.843-1.563 3.041 0 3.604 2.004 3.604 4.609v5.587z" />
                </svg>
              </a>

              <a
                href="https://github.com/gdp-stack"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2C6.5 2.2 2 6.7 2 12.2c0 4.4 3 8.2 7 9.5.5.1.7-.2.7-.5v-1.8c-2.9.7-3.6-1.3-3.6-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.7 1 1.7 1 1 .1 1.8-.2 2.2-.6.1-.7.4-1.2.7-1.5-2.3-.2-4.6-1.1-4.6-4.7 0-1 .4-1.8 1-2.4-.1-.2-.5-1.1.1-2.3 0 0 .8-.3 2.6 1a8.7 8.7 0 015 0c1.8-1.3 2.6-1 2.6-1 .6 1.2.2 2.1.1 2.3.7.6 1 1.4 1 2.4 0 3.6-2.3 4.5-4.6 4.7.4.4.7 1 .7 2v2.8c0 .3.2.6.7.5 4-.7 7-4.4 7-9.5 0-5.5-4.5-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-center">
          <p>&copy; 2024 @gdp-stack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
