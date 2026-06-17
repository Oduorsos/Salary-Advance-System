import {
    ShieldCheck,
    Wallet,
    Clock3,
    Building2,
    Users,
    BadgeCheck,
    } from "lucide-react";

    export default function WhyChooseUs() {
    const reasons = [
        {
        icon: <Wallet size={20} />,
        title: "Responsible Salary Access",
        description:
            "Employees can access a portion of their earned salary without resorting to expensive informal borrowing.",
        },

        {
        icon: <Building2 size={20} />,
        title: "Employer Verified",
        description:
            "Every application is backed by employer verification, creating a trusted and secure ecosystem.",
        },

        {
        icon: <Clock3 size={20} />,
        title: "Fast Processing",
        description:
            "Applications are reviewed quickly once employee records and employer details have been verified.",
        },

        {
        icon: <ShieldCheck size={20} />,
        title: "Secure Repayment",
        description:
            "Repayments are linked to payroll processes, reducing risk for both employees and employers.",
        },

        {
        icon: <Users size={20} />,
        title: "HR-Friendly Platform",
        description:
            "Built with HR teams in mind, making employee management and verification seamless.",
        },

        {
        icon: <BadgeCheck size={20} />,
        title: "Financial Wellness",
        description:
            "Designed to help employees overcome emergencies while encouraging responsible borrowing habits.",
        },
    ];

    return (
        <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Header */}
            <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Why Choose Us
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#1845B5] mt-4">
                Built Around Trust, Speed & Security
            </h2>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
                We combine employer verification, payroll-backed repayments,
                and modern technology to create a salary advance platform
                that benefits both employees and employers.
            </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reasons.map((item, index) => (
                <div
                key={index}
                className="
                    group
                    bg-white
                    border
                    border-gray-100
                    rounded-[30px]
                    p-8
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                "
                >
                <div
                    className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-50
                    text-[#1845B5]
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-[#1845B5]
                    group-hover:text-white
                    transition-all
                    duration-500
                    "
                >
                    {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1845B5] mb-4">
                    {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                    {item.description}
                </p>
                </div>
            ))}

            </div>

            {/* Bottom Banner */}
            <div className="mt-20 bg-gradient-to-r from-[#1845B5] to-blue-600 rounded-[40px] p-10 lg:p-14 text-white">

            <div className="grid lg:grid-cols-3 gap-8">

                <div>
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="mt-2 text-blue-100">
                    Platform Availability
                </p>
                </div>

                <div>
                <h3 className="text-4xl font-bold">2/3</h3>
                <p className="mt-2 text-blue-100">
                    Maximum Salary Advance Limit
                </p>
                </div>

                <div>
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="mt-2 text-blue-100">
                    Employer Verification Required
                </p>
                </div>

            </div>

            </div>

        </div>
        </section>
    );
}