import {
    Phone,
    Mail,
    MapPin,
    Clock3,
    Send,
    } from "lucide-react";

    export default function ContactUs() {
    return (
        <div className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1845B5] via-[#102A7A] to-[#1845B5] py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm">
                Contact Us
            </span>

            <h1 className="text-white text-4xl md:text-5xl font-bold mt-8">
                Let's Talk
            </h1>

            <p className="text-blue-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
                Whether you're an employer looking to partner with us or
                an employee seeking more information, we'd love to hear from you.
            </p>

            </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="bg-slate-50 rounded-3xl p-8 text-center">
                <Phone className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="font-bold text-blue-600">Call Us</h3>
                <p className="text-gray-600 mt-2">
                    +254 700 000 000
                </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 text-center">
                <Mail className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="font-bold text-blue-600">Email Us</h3>
                <p className="text-gray-600 mt-2">
                    info@salaryadvance.co.ke
                </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 text-center">
                <MapPin className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="font-bold text-blue-600">Visit Us</h3>
                <p className="text-gray-600 mt-2">
                    Nairobi, Kenya
                </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 text-center">
                <Clock3 className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="font-bold text-blue-600">Working Hours</h3>
                <p className="text-gray-600 mt-2">
                    Mon - Fri, 8AM - 5PM
                </p>
                </div>

            </div>
            </div>
        </section>

        {/* FORM + INFO */}
        <section className="pb-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="grid lg:grid-cols-2 gap-14">

                {/* LEFT */}
                <div>

                <span className="text-blue-600 font-semibold uppercase tracking-wider">
                    Get In Touch
                </span>

                <h2 className="text-4xl font-bold text-[#1845B5] mt-4">
                    Send Us A Message
                </h2>

                <p className="text-gray-600 mt-6 leading-8">
                    Interested in partnering with us? Need help understanding
                    our salary advance solution? Fill in the form and our
                    team will get back to you.
                </p>

                <div className="mt-10 space-y-6">

                    <div>
                    <h4 className="font-bold text-[#1845B5]">
                        Employers
                    </h4>
                    <p className="text-gray-600">
                        Learn how Salary Advance can improve employee wellbeing.
                    </p>
                    </div>

                    <div>
                    <h4 className="font-bold text-[#1845B5]">
                        Employees
                    </h4>
                    <p className="text-gray-600">
                        Understand eligibility and registration requirements.
                    </p>
                    </div>

                    <div>
                    <h4 className="font-bold text-[#1845B5]">
                        Partners
                    </h4>
                    <p className="text-gray-600">
                        Explore collaboration opportunities.
                    </p>
                    </div>

                </div>

                </div>

                {/* RIGHT FORM */}
                <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100">

                <form className="space-y-6">

                    <div>
                    <label className="block mb-2 font-medium text-blue-600">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div>
                    <label className="block mb-2 font-medium text-blue-600">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div>
                    <label className="block mb-2 font-medium text-blue-600">
                        Subject
                    </label>

                    <input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div>
                    <label className="block mb-2 font-medium text-blue-600">
                        Message
                    </label>

                    <textarea
                        rows="6"
                        placeholder="Write your message..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                    >
                    Send Message
                    <Send size={18} />
                    </button>

                </form>

                </div>

            </div>
            </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
            <div className="max-w-6xl mx-auto px-6">

            <div className="bg-gradient-to-r from-[#1845B5] to-[#102A7A] rounded-[40px] p-14 text-center">

                <h2 className="text-white text-3xl font-bold">
                Ready To Become A Partner?
                </h2>

                <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
                Join our growing network of employers empowering their
                workforce through responsible salary advances.
                </p>

                <button className="mt-8 bg-white text-[#1845B5] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Become A Partner
                </button>

            </div>

            </div>
        </section>

        </div>
    );
}