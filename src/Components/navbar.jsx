import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logos/SA logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
        { name: "Who We Serve", path: "/who-we-serve" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "AboutUs", path: "/about-us" },
        { name: "Contact", path: "/contact-us" },
    ];

    // The USSD code with # encoded as %23
    const ussdDialProtocol = "tel:*250*79%23";

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#1845B5] border-b border-white/10 shadow-lg">
            <div className="max-w-8xl mx-auto px-4 lg:px-10">
                <div className="h-24 flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-5">
                        <img
                            src={logo}
                            alt="Salary Advance"
                            className="w-56 h-16 rounded-xl object-cover"
                        />

                        <div>
                            <h1 className="font-bold text-lg text-white">
                                Salary Advance
                            </h1>
                            <p className="text-xs text-blue-300">
                                Powered by SwizzSoft
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `font-medium transition-all duration-300 ${
                                        isActive
                                            ? "text-blue-500"
                                            : scrolled
                                            ? "text-white hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* RIGHT SIDE */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-300 transition">
                            Login
                        </button>

                        {/* CHANGED TO ANCHOR TAG FOR DIALING */}
                        <a 
                            href={ussdDialProtocol}
                            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-blue-500/30"
                        >
                            Dial *250*79#
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                        isOpen ? "max-h-[500px] pb-6" : "max-h-0"
                    }`}
                >
                    <div className="bg-[#1845B5] rounded-2xl p-6 flex flex-col gap-5 border border-white/10">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-blue-300 transition"
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        {/* CHANGED TO ANCHOR TAG FOR MOBILE DIALING */}
                        <a 
                            href={ussdDialProtocol}
                            className="bg-blue-500 text-white py-3 rounded-full mt-2 font-semibold text-center"
                        >
                            Dial *250*79#
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}