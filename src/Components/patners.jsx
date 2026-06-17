import {
    Building2,
    Landmark,
    Briefcase,
    Users,
    ShieldCheck,
    Handshake,
    } from "lucide-react";

    export default function PartnersSection() {
    const partners = [
        {
        icon: <Building2 size={32} />,
        title: "Employers",
        description:
            "Organizations that empower employees through responsible salary advances.",
        },
        {
        icon: <Users size={32} />,
        title: "HR Teams",
        description:
            "Human Resource departments managing employee records and verification.",
        },
        {
        icon: <Briefcase size={32} />,
        title: "Payroll Providers",
        description:
            "Integrated payroll systems enabling secure salary deductions and repayments.",
        },
        {
        icon: <Landmark size={32} />,
        title: "Financial Institutions",
        description:
            "Banks, SACCOs and lending partners supporting financial inclusion.",
        },
    ];

    return (
        <section className="py-18 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Header */}
            <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Strategic Partnerships
            </span>

            <h2 className="text-4xl font-bold text-[#1845B5] mt-4">
                Growing Through
                <span className="text-blue-500"> Trusted Partners</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
                Our platform succeeds through collaboration with employers,
                HR teams, payroll providers, financial institutions and
                organizations committed to employee financial wellbeing.
            </p>
            </div>

            {/* Partner Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {partners.map((partner, index) => (
                <div
                key={index}
                className="
                    bg-white
                    rounded-[30px]
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    border border-gray-100
                "
                >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    {partner.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1845B5]">
                    {partner.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                    {partner.description}
                </p>
                </div>
            ))}
            </div>

            {/* Partnership Banner */}
            <div className="mt-20 bg-gradient-to-r from-[#1845B5] to-[#1640D6] rounded-[40px] p-12 lg:p-16">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                <div>
                <div className="flex items-center gap-3 text-blue-200 mb-4">
                    <Handshake size={24} />
                    <span>Partnership Opportunities</span>
                </div>

                <h3 className="text-3xl font-bold text-white">
                    Become a Salary Advance Partner
                </h3>

                <p className="text-blue-100 mt-4 max-w-2xl leading-8">
                    Join our ecosystem and help employees gain responsible
                    access to financial support while maintaining secure,
                    payroll-backed repayment structures.
                </p>
                </div>

                <button className="bg-white text-[#1845B5] px-8 py-4 rounded-full font-semibold hover:scale-105 transition whitespace-nowrap">
                Partner With Us
                </button>

            </div>

            </div>

            {/* Trust Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-8 text-center">
                <Building2 className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="text-xl font-bold text-[#1845B5]">
                Employers
                </h3>
                <p className="text-gray-600 mt-2">
                Supporting workforce financial wellness
                </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
                <ShieldCheck className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="text-xl font-bold text-[#1845B5]">
                Secure
                </h3>
                <p className="text-gray-600 mt-2">
                Verified employee onboarding
                </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
                <Handshake className="mx-auto text-blue-600 mb-4" size={35} />
                <h3 className="text-xl font-bold text-[#1845B5]">
                Partnerships
                </h3>
                <p className="text-gray-600 mt-2">
                Building a stronger financial ecosystem
                </p>
            </div>

            </div>

        </div>
        </section>
    );
}