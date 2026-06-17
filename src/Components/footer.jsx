import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../assets/logos/logo1.jpeg";

    export default function footer() {
    return (
        <footer className="bg-[#1845B5] text-white">

        {/* TOP CTA */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-[40px] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
                <h2 className="text-1xl lg:text-2xl font-bold">
                Ready to Transform Employee Financial Wellness?
                </h2>

                <p className="text-blue-100 mt-4 max-w-2xl">
                Partner with us and empower your workforce with secure,
                employer-backed salary advances accessible through USSD.
                </p>
            </div>

            <a href="/contact-us" className="bg-white bg-none text-[#1845B5] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Become a Partner
            </a>

            </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

            <div className="grid lg:grid-cols-4 gap-12">

                {/* COMPANY */}
                <div>

                    <div className="flex items-center gap-3 mb-6">
                    <img
                        src={logo}
                        alt="Salary Advance"
                        className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div>
                        <h3 className="font-bold text-2xl">
                        Salary Advance
                        </h3>

                        <p className="text-blue-300 text-sm">
                        Powered by SwizzSoft
                        </p>
                    </div>
                    </div>

                    <p className="text-slate-300 leading-8">
                    Providing responsible access to earned income through
                    employer verification, payroll-backed repayments,
                    and USSD technology.
                    </p>

                </div>

                {/* QUICK LINKS */}
                <div>

                    <h3 className="font-bold text-lg mb-6">
                    Quick Links
                    </h3>

                    <ul className="space-y-4 text-slate-300">

                    <li>
                        <Link to="/" className="hover:text-white transition">
                        Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about-us" className="hover:text-white transition">
                        About Us
                        </Link>
                    </li>

                    <li>
                        <Link to="/solutions" className="hover:text-white transition">
                        Solutions
                        </Link>
                    </li>

                    <li>
                        <Link to="/who-we-serve" className="hover:text-white transition">
                        Who We Serve
                        </Link>
                    </li>

                    <li>
                        <Link to="/how-it-works" className="hover:text-white transition">
                        How It Works
                        </Link>
                    </li>

                    </ul>

                </div>

                {/* SERVICES */}
                <div>

                    <h3 className="font-bold text-lg mb-6">
                    Services
                    </h3>

                    <ul className="space-y-4 text-slate-300">

                    <li>Salary Advances</li>

                    <li>Employer Dashboard</li>

                    <li>Payroll Integration</li>

                    <li>HR Management</li>

                    <li>Employee Verification</li>

                    </ul>

                </div>

                {/* CONTACT */}
                <div>

                    <h3 className="font-bold text-lg mb-6">
                    Contact Us
                    </h3>

                    <div className="space-y-5">

                        <div className="flex items-start gap-3">

                            <Phone
                            size={18}
                            className="text-blue-400 mt-1"
                            />

                            <span className="text-slate-300">
                            +254 756 399 354
                            </span>

                        </div>

                        <div className="flex items-start gap-3">

                            <Mail
                            size={18}
                            className="text-blue-400 mt-1"
                            />

                            <span className="text-slate-300">
                            info@salaryadvance.co.ke
                            </span>

                        </div>

                        <div className="flex items-start gap-3">

                            <MapPin
                            size={18}
                            className="text-blue-400 mt-1"
                            />

                            <span className="text-slate-300">
                            Nairobi, Kenya
                            </span>

                        </div>

                    </div>

                    {/* SOCIALS */}
                    <div className="flex gap-4 mt-8">

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                        >
                            <FaXTwitter />
                        </a>

                    </div>
                </div>

            </div>
        </div>

      {/* BOTTOM BAR */}
        <div className="border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} Salary Advance. All Rights Reserved.
                </p>

                <div className="flex items-center gap-6 text-sm">

                    <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition">
                    Privacy Policy
                    </Link>

                    <Link to="/terms-and-conditions" className="text-slate-400 hover:text-white transition">
                    Terms & Conditions
                    </Link>

                    <Link to="/contact-us" className="
                        text-blue-400
                        flex items-center gap-1
                        hover:text-white
                        transition
                    "
                    >
                    Contact
                    <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>
        </div>

    </footer>
    );
}
