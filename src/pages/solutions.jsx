import {
    Wallet,
    Smartphone,
    Building2,
    ShieldCheck,
    CreditCard,
    Users,
    } from "lucide-react";

    export default function Solutions() {
    const solutions = [
        {
        icon: <Wallet size={35} />,
        title: "Salary Advance Access",
        description:
            "Employees can access a portion of their earned salary before payday, helping them manage emergencies and unexpected expenses.",
        },
        {
        icon: <Smartphone size={35} />,
        title: "USSD-Based Requests",
        description:
            "No smartphone or internet connection required. Employees can request advances through a simple USSD code from any mobile phone.",
        },
        {
        icon: <Building2 size={35} />,
        title: "Employer Dashboard",
        description:
            "Employers manage employee verification, contracts, approvals, and payroll information through a centralized dashboard.",
        },
        {
        icon: <Users size={35} />,
        title: "HR Management",
        description:
            "Store employee records, contracts, onboarding documents, and employment details securely in one platform.",
        },
        {
        icon: <CreditCard size={35} />,
        title: "Payroll Integration",
        description:
            "Repayments are automatically deducted through payroll, creating a simple and reliable recovery process.",
        },
        {
        icon: <ShieldCheck size={35} />,
        title: "Risk Management",
        description:
            "Employer verification, document validation, and salary limits help reduce default risks while promoting responsible borrowing.",
        },
    ];

    return (
        <div className="bg-white">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1845B5] via-[#102A7A] to-[#1845B5] py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm">
                Our Solutions
            </span>

            <h1 className="text-white text-3xl md:text-4xl font-bold mt-8">
                Innovative Financial Solutions
            </h1>

            <p className="text-blue-100 text-lg leading-8 max-w-4xl mx-auto mt-6">
                We bridge the gap between payday and financial emergencies
                through secure salary advances, employer partnerships,
                and payroll-backed repayment systems.
            </p>

            </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="py-18">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-[#1845B5]">
                Everything You Need In One Platform
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto mt-6">
                Our platform combines employee financial support,
                employer controls, HR management, and automated repayments.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {solutions.map((solution, index) => (
                <div
                    key={index}
                    className="
                    bg-white
                    border border-gray-100
                    rounded-[30px]
                    p-8
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    "
                >
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    {solution.icon}
                    </div>

                    <h3 className="text-xl font-bold text-[#1845B5]">
                    {solution.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-8">
                    {solution.description}
                    </p>
                </div>
                ))}

            </div>

            </div>
        </section>

        {/* PROCESS BENEFITS */}
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#1845B5]">
                Why Our Solution Works
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-[#1845B5]">
                    Fast Access
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                    Employees receive timely financial support when they need it most.
                </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-[#1845B5]">
                    Secure Recovery
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                    Payroll deductions simplify repayment and reduce lending risk.
                </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-[#1845B5]">
                    Employer Confidence
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                    Verification and document management ensure transparency.
                </p>
                </div>

            </div>

            </div>

        </section>

        {/* CTA */}
        <section className="py-14">

            <div className="max-w-6xl mx-auto px-6">

            <div className="bg-gradient-to-r from-[#1845B5] to-[#1640D6] rounded-[40px] p-14 text-center">

                <h2 className="text-white text-2xl font-bold">
                Ready To Experience Salary Advance?
                </h2>

                <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
                Empower employees, simplify payroll recovery,
                and improve workplace financial wellness.
                </p>

                <button className="mt-8 bg-white text-[#1845B5] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Dial *250*79#
                </button>

            </div>

            </div>

        </section>

        </div>
    );
}