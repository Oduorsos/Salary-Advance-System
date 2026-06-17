import {
    Target,
    Eye,
    ShieldCheck,
    Smartphone,
    Users,
    Building2,
    HeartHandshake,
    ArrowRight,
    } from "lucide-react";

    export default function AboutUs() {
    const values = [
        {
        icon: <ShieldCheck size={28} />,
        title: "Trust",
        description:
            "We build confidence through transparency, accountability, and secure financial processes.",
        },

        {
        icon: <HeartHandshake size={28} />,
        title: "Responsibility",
        description:
            "We encourage responsible borrowing through employer verification and salary-based limits.",
        },

        {
        icon: <Smartphone size={28} />,
        title: "Innovation",
        description:
            "Using technology and USSD services to make financial access simple and inclusive.",
        },

        {
        icon: <Users size={28} />,
        title: "Partnership",
        description:
            "We work closely with employers, HR teams, and financial institutions.",
        },
    ];

    return (
        <div className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1845B5] via-[#102A7A] to-[#1845B5] py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm">
                About Salary Advance
            </span>

            <h1 className="text-white text-3xl md:text-4xl font-bold mt-8">
                Financial Support
                <br />
                When It Matters Most
            </h1>

            <p className="text-blue-100 text-lg leading-8 max-w-4xl mx-auto mt-8">
                We are transforming how employees access short-term financial
                support by providing responsible salary advances backed by
                employer verification and payroll-backed repayment systems.
            </p>
            </div>
        </section>

        {/* OUR STORY */}
        <section className="py-18">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div>
                <span className="text-blue-600 font-semibold uppercase tracking-wider">
                    Our Story
                </span>

                <h2 className="text-3xl font-bold text-[#1845B5] mt-4">
                    Why We Started
                </h2>

                <p className="mt-8 text-gray-600 leading-8">
                    Unexpected expenses don't wait for payday. Employees often
                    face urgent financial needs such as medical bills, school
                    fees, transport costs, rent obligations, and family
                    responsibilities before receiving their salaries.
                </p>

                <p className="mt-6 text-gray-600 leading-8">
                    Traditional borrowing options can be expensive, slow, or
                    inaccessible. Salary Advance was created to bridge this
                    gap by allowing employees to access part of their earned
                    salary responsibly and securely.
                </p>
                </div>

                <div className="bg-slate-50 rounded-[40px] p-10">
                <div className="space-y-8">

                    <div>
                    <h3 className="font-bold text-xl text-[#1845B5]">
                        Problem
                    </h3>

                    <p className="text-gray-600 mt-2">
                        Financial emergencies before payday.
                    </p>
                    </div>

                    <div>
                    <h3 className="font-bold text-xl text-[#1845B5]">
                        Solution
                    </h3>

                    <p className="text-gray-600 mt-2">
                        Get a fraction of your pay before payday through our USSD, sort your emergencies and settle it on payday.
                    </p>
                    </div>

                    <div>
                    <h3 className="font-bold text-xl text-[#1845B5]">
                        Impact
                    </h3>

                    <p className="text-gray-600 mt-2">
                        Reduced financial stress and improved employee wellbeing.
                    </p>
                    </div>

                </div>
                </div>

            </div>
            </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-14 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="grid md:grid-cols-2 gap-10">

                <div className="bg-white p-10 rounded-3xl shadow-sm">
                <Target className="text-blue-600 mb-5" size={42} />

                <h3 className="text-2xl font-bold text-[#1845B5]">
                    Our Mission
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                    To provide employees with convenient, affordable, and
                    responsible access to earned income while helping
                    employers improve employee wellbeing and productivity.
                </p>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-sm">
                <Eye className="text-blue-600 mb-5" size={42} />

                <h3 className="text-2xl font-bold text-[#1845B5]">
                    Our Vision
                </h3>

                <p className="mt-5 text-gray-600 leading-8">
                    To become Africa's most trusted payroll-backed financial
                    access platform, empowering employees with financial
                    flexibility and security.
                </p>
                </div>

            </div>
            </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-18">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-20">

                <span className="text-blue-600 font-semibold uppercase tracking-widest">
                Why Choose Us
                </span>

                <h2 className="text-3xl font-bold text-[#1845B5] mt-4">
                What Makes Us Different
                </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                <ShieldCheck className="text-blue-600" size={38} />
                <h3 className="font-bold text-blue-600 text-xl mt-5">Employer Verified</h3>
                <p className="mt-3 text-gray-600">
                    Secure employee verification through employer partnerships.
                </p>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                <Building2 className="text-blue-600" size={38} />
                <h3 className="font-bold text-blue-600 text-xl mt-5">
                    Payroll Recovery
                </h3>
                <p className="mt-3 text-gray-600">
                    Automated repayments through payroll processing.
                </p>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                <Smartphone className="text-blue-600" size={38} />
                <h3 className="font-bold text-blue-600 text-xl mt-5">
                    USSD Access
                </h3>
                <p className="mt-3 text-gray-600">
                    Accessible from any mobile phone without internet.
                </p>
                </div>

            </div>

            </div>
        </section>

        {/* VALUES */}
        <section className="py-18 bg-slate-50">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-20">

                <span className="text-blue-600 font-semibold uppercase tracking-widest">
                Core Values
                </span>

                <h2 className="text-3xl font-bold text-[#1845B5] mt-4">
                The Principles That Guide Us
                </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {values.map((value, index) => (
                <div
                    key={index}
                    className="bg-white rounded-3xl p-8 text-center shadow-sm"
                >
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto text-blue-600">
                    {value.icon}
                    </div>

                    <h3 className="font-bold text-xl text-[#1845B5] mt-5">
                    {value.title}
                    </h3>

                    <p className="text-gray-600 mt-4">
                    {value.description}
                    </p>
                </div>
                ))}

            </div>

            </div>
        </section>

        {/* CTA */}
        <section className="py-14">
            <div className="max-w-6xl mx-auto px-6">

            <div className="bg-gradient-to-r from-[#1845B5] to-[#1640D6] rounded-[40px] p-14 text-center">

                <h2 className="text-white text-3xl font-bold">
                Join the Salary Advance Network
                </h2>

                <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
                Whether you're an employee seeking financial flexibility,
                an employer supporting your workforce, or an organization
                looking to partner with us, we're ready to help.
                </p>

                <button className="mt-8 bg-white text-[#1845B5] px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 transition">
                Become a Partner
                <ArrowRight size={18} />
                </button>

            </div>

            </div>
        </section>

        </div>
    );
}