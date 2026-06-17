"use client";

import {
    Users,
    Building2,
    Briefcase,
    Landmark,
    ArrowLeft,
    ArrowRight,
    } from "lucide-react";

    import { Swiper, SwiperSlide } from "swiper/react";
    import { Navigation, Autoplay } from "swiper/modules";

    import "swiper/css";
    import "swiper/css/autoplay"
    import "swiper/css/navigation";

    export default function WhoWeServe() {
    const audiences = [
        {
        icon: <Users size={30} />,
        title: "Employees",
        description:
            "Access part of your earned salary before payday for emergencies, school fees, medical expenses, transport, and other urgent needs.",
        benefits: [
            "Quick salary advances",
            "USSD access",
            "Transparent charges",
            "Fast approvals",
        ],
        color: "from-blue-500 to-blue-700",
        },

        {
        icon: <Building2 size={30} />,
        title: "Employers",
        description:
            "Improve employee wellbeing and productivity by providing a trusted financial support solution without disrupting payroll processes.",
        benefits: [
            "Employee retention",
            "Reduced financial stress",
            "Payroll integration",
            "Easy administration",
        ],
        color: "from-cyan-500 to-cyan-600",
        },

        {
        icon: <Briefcase size={30} />,
        title: "HR Teams",
        description:
            "Manage employee records, verifications, onboarding, approvals, and reporting from a centralized employer dashboard.",
        benefits: [
            "Digital records",
            "Employee verification",
            "Approval workflows",
            "Real-time reports",
        ],
        color: "from-blue-600 to-indigo-700",
        },

        {
        icon: <Landmark size={30} />,
        title: "Financial Partners",
        description:
            "Banks, SACCOs, microfinance institutions, and lenders can safely extend salary-backed advances through verified employer relationships.",
        benefits: [
            "Reduced lending risk",
            "Verified borrowers",
            "Payroll-backed recovery",
            "Scalable growth",
        ],
        color: "from-blue-500 to-sky-600",
        },
    ];

    return (
        <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
                Who We Serve
            </span>

            <h2 className="text-4xl font-bold text-[#1845B5] mt-4">
                Built For Everyone
                <span className="text-blue-500">
                {" "}In The Ecosystem
                </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
                Our platform connects employees, employers, HR departments,
                and financial institutions to create a responsible and
                sustainable salary advance ecosystem.
            </p>
            </div>

            {/* Slider */}
            <div className="flex justify-between items-center gap-10">
            <div className="flex justify-between items-center mb-8">
                <button className="who-prev w-12 h-12 rounded-full border border-blue-200 bg-[#1845B5] text-white flex items-center justify-center hover:bg-[#1845B5] hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowLeft />
                </button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: ".who-prev",
                    nextEl: ".who-next",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop
                spaceBetween={30}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    1024: {
                    slidesPerView: 2,
                    },
                }}
                >

            {audiences.map((item, index) => (
                <SwiperSlide key={index}>
                <div
                    className="
                    group
                    bg-white
                    rounded-3xl
                    p-8
                    border
                    border-blue-100
                    shadow-sm
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    h-full
                "
                >
                    <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color}
                    flex items-center justify-center text-white mb-6`}
                    >
                    {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#1845B5]">
                    {item.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-8">
                    {item.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                    {item.benefits.map((benefit, i) => (
                        <div
                        key={i}
                        className="
                            bg-blue-50
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-gray-700
                        "
                        >
                        ✓ {benefit}
                        </div>
                    ))}
                    </div>

                    <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                    Learn More
                    </button>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div>
                <button className="who-next w-12 h-12 rounded-full border border-blue-200 bg-[#1845B5] text-white flex items-center justify-center hover:bg-[#1845B5] hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight />
                </button>
            </div>
            </div>
        </div>
        </section>
    );
}