import React from 'react';
import { assets, footer_data } from '../assets/assets';
import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 relative">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.mylogo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            From match previews and player spotlights to expert analysis and behind-the-scenes stories, CricBlog brings you fresh, engaging, and insightful cricket content every week. Whether you're a die-hard fan or a casual follower, we've got something for everyone. Stay updated, stay passionate, and join us in celebrating the spirit of cricket!
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © CricBlog Binada - All Rights Reserved.
      </p>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
