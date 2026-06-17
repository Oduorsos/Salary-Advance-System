import {
    UserPlus,
    Building2,
    FileCheck,
    BadgeCheck,
    Wallet,
    CreditCard,
    ArrowLeft,
    ArrowRight,
    } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

    export default function HowItWorks() {
    const [isFreeMode, setIsFreeMode] = useState(true);

        useEffect(() => {
        const timer = setTimeout(() => {
            setIsFreeMode(false);
        }, 4500); // video phase duration

        return () => clearTimeout(timer);
        }, []);

    const steps = [
        {
        icon: <UserPlus size={40} />,
        title: "Employee Registration",
        description:
            "Employees register through the platform and provide their personal details, employment information, and employer details for verification.",
        color: "from-blue-600 to-blue-700",
        },

        {
        icon: <Building2 size={40} />,
        title: "Employer Verification",
        description:
            "The employer is contacted to confirm employment status. Existing partner employers are onboarded instantly, while new employers may join the platform through a partnership process.",
        color: "from-cyan-500 to-cyan-600",
        },

        {
        icon: <FileCheck size={40} />,
        title: "Document Submission",
        description:
            "The employer accesses the dashboard and uploads required employee documents such as employment contracts, identification records, payroll details, and supporting verification information.",
        color: "from-green-500 to-green-600",
        },

        {
        icon: <BadgeCheck size={40} />,
        title: "Eligibility Assessment",
        description:
            "Submitted information is reviewed and verified. Employees who meet the platform requirements are approved and assigned a borrowing limit.",
        color: "from-purple-500 to-purple-600",
        },

        {
        icon: <Wallet size={40} />,
        title: "Salary Advance Disbursement",
        description:
            "Approved employees can request a salary advance. To promote responsible borrowing, the maximum advance available is up to two-thirds (2/3) of the employee's monthly basic salary.",
        color: "from-pink-500 to-pink-600",
        },

        {
        icon: <CreditCard size={40} />,
        title: "Repayment & Recovery",
        description:
            "A small service charge or interest is applied. Repayments are automatically recovered through payroll deductions, ensuring a simple, secure, and predictable repayment process.",
        color: "from-[#1845B5] to-[#162c7a]",
        },
        
    ];


    return (
        <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
                Process
            </span>

            <h2 className="text-4xl font-bold text-[#2849CA] mt-4">
                How It Works
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
                Our salary advance platform follows a structured verification
                process that protects employees, employers, and lending partners
                while ensuring responsible access to earned income.
            </p>
            </div>

            <div className="flex justify-between items-center gap-10">
            <div className="flex justify-between items-center mb-8">
                <button className="process-prev w-12 h-12 rounded-full border border-blue-200 bg-[#1845B5] text-white flex items-center justify-center hover:bg-[#1845B5] hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowLeft />
                </button>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: ".process-prev",
                    nextEl: ".process-next",
                }}
                loop={true}
                speed={isFreeMode ? 1000 : 800} // slow glide vs normal slide
                autoplay={{
                    delay: isFreeMode ? 0 : 1000,
                    disableOnInteraction: false,
                }}
                freeMode={isFreeMode}
                freeModeMomentum={false}
                spaceBetween={30}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                >
                {steps.map((step, index) => (
                    <SwiperSlide key={index}>
                    <div
                        className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-sm
                        hover:shadow-2xl
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        border
                        border-gray-100
                        h-full
                        "
                    >
                        <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color}
                        text-white flex items-center justify-center mb-6`}
                        >
                        {step.icon}
                        </div>

                        <span className="text-sm font-bold text-blue-600">
                        STEP {index + 1}
                        </span>

                        <h3 className="text-2xl font-bold text-[#1845B5] mt-3">
                        {step.title}
                        </h3>

                        <p className="text-gray-600 mt-3 leading-8">
                        {step.description}
                        </p>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <div>
                <button className="process-next w-12 h-12 rounded-full border border-blue-200 bg-[#1845B5] text-white flex items-center justify-center hover:bg-[#1845B5] hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight />
                </button>
            </div>
            </div>

            {/* Policy Notice */}

            <div className="mt-20 bg-[#1845B5] rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-4">
                Responsible Borrowing Policy
            </h3>

            <p className="text-blue-100 leading-8">
                To safeguard employees from excessive debt obligations, the platform
                limits salary advances to a maximum of <strong>two-thirds (2/3)</strong>
                of the employee's monthly basic salary. This ensures employees retain
                sufficient income for living expenses, existing commitments, and
                financial stability while benefiting from short-term financial support.
            </p>
            </div>

        </div>
        </section>
    );

}