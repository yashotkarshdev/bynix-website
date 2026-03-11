import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Top Gradient Section */}
            {/* <div className="bg-[linear-gradient(180deg,_#FFFFFF_3.23%,_#FDE8D9_100%)] py-16 border-t border-gray-300"> */}
            <div className="bg-black py-16 border-t border-gray-300">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                        {/* Logo Column */}
                        <div className="col-span-1">
                            <img src="/logo.png" alt="Bynix Technology Logo" className="h-16 md:h-20 w-auto" />
                            <address className='text-white my-2'>C161, Kanha Vihar, Gulab Vihar B, Lalarpura, Jaipur, Rajasthan 302021</address>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex justify-between lg:justify-around w-full">
                            <div className="flex flex-col gap-4 font-medium text-white">
                                <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
                                <Link to="/services" className="hover:text-orange-600 transition-colors">Services</Link>
                                <Link to="/about" className="hover:text-orange-600 transition-colors">About us</Link>
                                <Link to="/contact" className="hover:text-orange-600 transition-colors">Contact us</Link>
                            </div>

                            <div className="flex flex-col gap-4 font-medium text-white">
                                <Link to="/blogs" className="hover:text-orange-600 transition-colors">Blogs</Link>
                                <Link to="/career" className="hover:text-orange-600 transition-colors">Career</Link>
                                <Link to="/privacy" className="hover:text-orange-600 transition-colors">Privacy Ploicy</Link>
                                <Link to="/terms" className="hover:text-orange-600 transition-colors">Terms & Conditions</Link>
                            </div>
                        </div>

                        {/* Contact Column */}
                        <div className="flex flex-col gap-6 lg:items-end text-white">
                            <h3 className="font-bold text-lg tracking-wider">CONNECT WITH US</h3>
                            <div className="flex gap-6 text-2xl">
                                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 text-[#F27115] transition-colors">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a target='_blank' href="https://www.instagram.com/bynixtechnology/" aria-label="Instagram" className="hover:text-pink-600 text-[#F27115] transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/people/Bynix-Technology/61579185867191/" aria-label="Facebook" className="hover:text-blue-600 text-[#F27115] transition-colors">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                            <div className="space-y-3 md:text-right">
                                <p className="flex items-center lg:justify-end gap-2 font-medium">
                                    <i className="fas fa-phone-alt text-sm"></i> +91 6376925384
                                </p>
                                <p className="flex items-center lg:justify-end gap-2 font-medium">
                                    <i className="fas fa-envelope text-sm"></i> info@bynixtechnology.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW: Black Copyright Bar */}
            <div className="bg-black text-white py-4 border-t-white border-t">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm md:text-base font-light tracking-wide">
                        © 2026 All rights reserved. Designed by 
                        <span className="font-semibold border-b border-white ml-1">
                            Bynix Technology
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}