import {
    ArrowRight,
    ShieldCheck,
    Wallet,
    Smartphone,
    Building2,
    CheckCircle,
    TrendingUp,
    Users,
    } from "lucide-react";

    export default function HeroSection() {
    return (
        <>
        <style>
            {`
            @keyframes float {
                0%,100% {
                transform: translateY(0px);
                }

                50% {
                transform: translateY(-12px);
                }
            }

            .float-card {
                animation: float 5s ease-in-out infinite;
            }

            .float-card-2 {
                animation: float 6s ease-in-out infinite;
            }
            `}
        </style>

        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1845B5] via-[#102A7A] to-[#0B1C57]">

            {/* Background Effects */}
            <div className="absolute inset-0">

            <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-cyan-400/10 blur-3xl rounded-full"></div>

            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 lg:pt-32 pb-20">

            {/* Badge */}
            <div className="flex justify-center px-4">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white text-xs sm:text-sm text-center">

                <CheckCircle size={14} />

                Employer Verified Salary Advance Platform

                </div>

            </div>

            {/* Main Hero */}
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-16 items-center mt-12">

                {/* LEFT CONTENT */}
                <div>

                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">

                    Financial Freedom

                    <br />

                    Between

                    <span className="text-blue-400">
                    {" "}Paydays
                    </span>

                </h1>

                <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-8 max-w-2xl">

                    Empower employees with instant access to earned wages while
                    giving employers a secure, payroll-backed solution that
                    improves financial wellness and workplace productivity.

                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-10">

                    <a href="/contact-us" className="bg-none bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 shadow-xl shadow-blue-500/30">

                    Request Demo

                    <ArrowRight size={18} />

                    </a>

                    <a href="/how-it-works" className="bg-none border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-full text-white font-semibold">

                    Learn More

                    </a>

                </div>

                {/* Trust Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">

                    <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" />
                    <span className="text-slate-300 text-sm">
                        Secure Repayment
                    </span>
                    </div>

                    <div className="flex items-center gap-3">
                    <Wallet className="text-blue-400" />
                    <span className="text-slate-300 text-sm">
                        Payroll Integrated
                    </span>
                    </div>

                    <div className="flex items-center gap-3">
                    <Smartphone className="text-blue-400" />
                    <span className="text-slate-300 text-sm">
                        Works On Any Phone
                    </span>
                    </div>

                </div>

                </div>

                {/* RIGHT CONTENT */}
                <div className="relative flex flex-col items-center lg:block">

                {/* Employee Card */}
                <div
                    className="
                    float-card
                    bg-white
                    rounded-3xl
                    p-6
                    shadow-2xl
                    w-full
                    max-w-[350px]
                    z-20
                    relative
                    "
                >

                    <div className="flex items-center justify-between">

                    <div>

                        <p className="text-gray-500 text-sm">
                        Employee Portal
                        </p>

                        <h3 className="font-bold text-lg text-[#1845B5]">
                        Jane Doe
                        </h3>

                    </div>

                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                        Eligible

                    </div>

                    </div>

                    <div className="mt-6 bg-blue-50 rounded-2xl p-5">

                    <p className="text-gray-500 text-sm">
                        Available Advance
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1845B5] mt-2">
                        KSh 18,000
                    </h2>

                    </div>

                    <div className="mt-6 space-y-3">

                    <div className="bg-gray-100 p-4 rounded-xl">
                        Request Advance
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl">
                        Check Eligibility
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl">
                        Repayment Status
                    </div>

                    </div>

                </div>

                {/* Employer Dashboard */}
                <div
                    className="
                    float-card-2
                    mt-6
                    lg:absolute
                    lg:-bottom-12
                    lg:-right-20
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    rounded-3xl
                    p-6
                    shadow-2xl
                    w-full
                    max-w-[350px]
                    "
                >

                    <div className="flex items-center gap-3">

                    <Building2 className="text-blue-300" />

                    <h4 className="text-white font-semibold">
                        Employer Dashboard
                    </h4>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-white/10 p-4 rounded-2xl">

                        <Users className="text-blue-300 mb-2" />

                        <h3 className="text-white text-2xl font-bold">
                        324
                        </h3>

                        <p className="text-slate-300 text-sm">
                        Active Employees
                        </p>

                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl">

                        <TrendingUp className="text-green-300 mb-2" />

                        <h3 className="text-white text-2xl font-bold">
                        98%
                        </h3>

                        <p className="text-slate-300 text-sm">
                        Repayment Rate
                        </p>

                    </div>

                    </div>

                    <div className="mt-5 bg-white/10 rounded-2xl p-4">

                    <p className="text-slate-300 text-sm">
                        Advances This Month
                    </p>

                    <h3 className="text-white text-3xl font-bold mt-1">
                        KSh 2.4M
                    </h3>

                    </div>

                </div>

                {/* Approval Card Desktop Only */}
                <div
                    className="
                    hidden
                    lg:block
                    absolute
                    -top-8
                    -right-8
                    bg-white
                    rounded-2xl
                    p-4
                    shadow-xl
                    "
                >

                    <p className="text-gray-500 text-xs">
                    Latest Approval
                    </p>

                    <h4 className="text-[#1845B5] font-bold mt-1">
                    KSh 15,000
                    </h4>

                    <span className="text-green-500 text-sm">
                    Approved in 58 seconds
                    </span>

                </div>

                </div>

            </div>

            </div>

        </section>
        </>
    );
    }