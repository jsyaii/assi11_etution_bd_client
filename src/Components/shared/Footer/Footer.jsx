import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../../Logo/Logo";



const Footer = () => {
  return (
    <footer className="bg-base-200 text-neutral font-semibold pt-14 pb-6 mt-20">

      {/* TOP AREA */}
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ABOUT PLATFORM */}
        <div>
            <span><Logo/></span>
          <h2 className="text-xl font-bold text-secondary mb-4">About eTuitionBD</h2>
          <p className="text-sm leading-relaxed">
            eTuitionBD is a trusted tuition management platform connecting students 
            with verified tutors. We ensure a smooth, safe, and reliable learning 
            experience for everyone.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary duration-200">Home</Link></li>
            <li><Link to="/tuitions" className="hover:text-primary duration-200">Tuitions</Link></li>
            <li><Link to="/tutors" className="hover:text-primary duration-200">Tutors</Link></li>
            <li><Link to="/about" className="hover:text-primary duration-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">Contact Information</h2>
          <p className="text-sm">📍 Khulna, Bangladesh</p>
          <p className="text-sm">📞 +880 1234-567890</p>
          <p className="text-sm">✉ support@etuitionbd.com</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-5 text-xl">
            <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-neutral mt-10 opacity-20"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-neutral mt-4">
        © {new Date().getFullYear()} <span className="font-semibold">eTuitionBD</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
