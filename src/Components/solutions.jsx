"use client";

import { useState } from "react";
import {
    Wallet,
    Building2,
    CreditCard,
    Users,
    ShieldCheck,
    } from "lucide-react";

    import { Swiper, SwiperSlide } from "swiper/react";
    import { Autoplay, Pagination } from "swiper/modules";

    import "swiper/css";
    import "swiper/css/pagination";

    export default function ProblemSolution() {
    const [active, setActive] = useState(0);

    const solutions = [
        {
        title: "Salary Advance",
        color: "#1845B5",
        icon: <Wallet size={20} />,
        heading: "Need Cash Before Payday?",
        description:
            "Employees can instantly access part of their earned salary through USSD without waiting until month-end.",
        feature: "Dial *250*79#",
        },

        {
        title: "Employer Dashboard",
        color: "#1640D6",
        icon: <Building2 size={20} />,
        heading: "Full Employer Control",
        description:
            "Manage employee records, contracts, approvals, and salary advance requests from a centralized dashboard.",
        feature: "Secure Verification",
        },

        {
        title: "Payroll Integration",
        color: "#6D28D9",
        icon: <CreditCard size={20} />,
        heading: "Automated Repayment",
        description:
            "Approved advances are recovered automatically during payroll processing, reducing administrative work.",
        feature: "Automatic Deductions",
        },

        {
        title: "HR Management",
        color: "#DB2777",
        icon: <Users size={20} />,
        heading: "Built for HR Teams",
        description:
            "Employee contracts, onboarding details and employment verification help minimize risk.",
        feature: "Employee Records",
        },

        {
        title: "Risk Protection",
        color: "#1E293B",
        icon: <ShieldCheck size={20} />,
        heading: "Protected Lending",
        description:
            "Employer-backed repayments and employee verification create a secure lending ecosystem.",
        feature: "Lower Default Risk",
        },
    ];

    return (
        <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Header */}
            <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Problem & Solution
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1845B5] mt-4">
                Financial Relief,
                <span className="text-blue-500"> Simplified</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-4 text-gray-500 text-lg">
                Many employees face financial emergencies before payday. Our Salary
                Advance platform bridges the gap through USSD access, employer
                partnerships, payroll integration, and secure repayment mechanisms.
            </p>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="lg:hidden relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.05}
                    centeredSlides={true}
                    spaceBetween={18}
                    speed={900}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => setActive(swiper.realIndex)}
                    className="pb-6"
                >
                    {solutions.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                        style={{ backgroundColor: item.color }}
                        className="
                            rounded-[30px]
                            p-8
                            text-white
                            shadow-xl
                            min-h-[340px]
                            flex
                            flex-col
                            justify-between
                        "
                        >
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-bold leading-tight">
                            {item.heading}
                            </h3>

                            <p className="mt-4 text-white/80 leading-relaxed">
                            {item.description}
                            </p>
                        </div>

                        {/* Feature */}
                        <div className="mt-8">
                            <span className="inline-flex bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                            {item.feature}
                            </span>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* ================= CUSTOM DOTS (OUTSIDE SWIPER) ================= */}
                <div className="flex justify-center gap-2 mt-6">
                    {solutions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`
                        transition-all duration-300
                        h-2
                        rounded-full
                        ${
                            active === index
                            ? "w-6 bg-[#1845B5]"
                            : "w-2 bg-gray-300"
                        }
                        `}
                    />
                    ))}
                </div>
            </div>

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:flex gap-4 h-[500px]">
            {solutions.map((item, index) => (
                <div
                key={index}
                onMouseEnter={() => setActive(index)}
                style={{
                    backgroundColor: item.color,
                    flex: active === index ? 5 : 1,
                }}
                className="
                    rounded-[32px]
                    overflow-hidden
                    transition-all
                    duration-700
                    ease-in-out
                    cursor-pointer
                    relative
                    shadow-xl
                "
                >
                {active === index ? (
                    <div className="h-full p-12 flex justify-between text-white">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                            {item.icon}
                        </div>

                        <span className="text-xl font-semibold">
                            {item.title}
                        </span>
                        </div>

                        <h3 className="text-4xl font-bold max-w-lg leading-tight">
                        {item.heading}
                        </h3>

                        <p className="mt-5 text-white/80 max-w-md leading-relaxed">
                        {item.description}
                        </p>

                        <div className="mt-8 inline-flex bg-white/10 px-5 py-3 rounded-full">
                        {item.feature}
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="hidden lg:block">
                        <div className="w-66 h-[400px] bg-white rounded-[30px] shadow-2xl p-3 ml-4">
                            <div className="bg-gray-100 rounded-[24px] h-full p-4">
                                
                                {/* Header */} 
                                <div className="flex justify-between items-center mb-4"> 
                                    <div className="w-14 h-2 bg-gray-300 rounded-full"></div> 
                                    <div className="w-7 h-7 bg-blue-500 rounded-full"></div> 
                                </div> 
                                
                                {/* Card */} 
                                <div className="bg-white rounded-2xl p-4 shadow-lg">

                                    <h4 className="font-bold text-[#1845B5] text-sm"> 
                                        Salary Advance 
                                    </h4> 

                                    <div className="mt-3"> 
                                        <p className="text-gray-500 text-xs"> 
                                            Available Limit 
                                        </p>

                                        <h2 className="text-lg font-bold text-[#1845B5] mt-1">
                                            KSh 15,000
                                        </h2> 
                                    </div> 
                                        
                                    <div className="mt-3 bg-green-100 text-green-600 py-2 rounded-lg text-center text-sm font-semibold">
                                        Approved
                                    </div>
                                    
                                    <div className="mt-3 space-y-2 text-[#1845B5]"> 
                                        <div className="bg-gray-100 p-2 rounded-lg text-sm">
                                            1. Request Advance
                                        </div> 
                                        
                                        <div className="bg-gray-100 p-2 rounded-lg text-sm">
                                            2. Check Limit
                                        </div>
                                        
                                        <div className="bg-gray-100 p-2 rounded-lg text-sm">
                                            3. Repayment Status
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="mb-20">{item.icon}</div>
                    <div className="h-48 flex items-center justify-center">
                        <h3 className="text-3xl font-bold rotate-[-90deg] whitespace-nowrap">
                        {item.title}
                        </h3>
                    </div>
                    </div>
                )}
                </div>
            ))}
            </div>

            {/* ================= STATS ================= */}
            <div className="hidden lg:grid grid-cols-4 gap-8 mt-20">
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold text-[#1845B5]">USSD</h3>
                <p className="text-gray-600 mt-2">
                Works on any mobile phone
                </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold text-[#1845B5]">Instant</h3>
                <p className="text-gray-600 mt-2">
                Fast salary access
                </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold text-[#1845B5]">Secure</h3>
                <p className="text-gray-600 mt-2">
                Payroll-backed recovery
                </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold text-[#1845B5]">HR Ready</h3>
                <p className="text-gray-600 mt-2">
                Employer dashboard included
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}
