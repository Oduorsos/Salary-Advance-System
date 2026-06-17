import {
    Users,
    Building2,
    Briefcase,
    Landmark,
    ShieldCheck,
    HeartHandshake,
    } from "lucide-react";

    export default function WhoWeServe() {
    const audiences = [
        {
        icon: <Users size={35} />,
        title: "Employees",
        description:
            "Employees facing financial emergencies before payday can access responsible salary advances without traditional loan processes.",
        },
        {
        icon: <Building2 size={35} />,
        title: "Employers",
        description:
            "Employers can improve employee wellbeing, productivity, and retention by offering a secure salary advance solution.",
        },
        {
        icon: <Briefcase size={35} />,
        title: "HR Departments",
        description:
            "HR teams benefit from streamlined employee management, document verification, and payroll-backed repayment processes.",
        },
        {
        icon: <Landmark size={35} />,
        title: "Organizations & Institutions",
        description:
            "Corporates, SMEs, NGOs, schools, hospitals, and other institutions can partner with us to support their workforce.",
        },
        {
        icon: <ShieldCheck size={35} />,
        title: "Finance & Payroll Teams",
        description:
            "Payroll-backed recovery reduces repayment risks while maintaining accurate and transparent records.",
        },
        {
        icon: <HeartHandshake size={35} />,
        title: "Strategic Partners",
        description:
            "Financial institutions, SACCOs, payroll providers, and HR technology partners can integrate with our ecosystem.",
        },
    ];

    return (
        <div className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1845B5] via-[#102A7A] to-[#1845B5] py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm">
                Who We Serve
            </span>

            <h1 className="text-white text-3xl md:text-4xl font-bold mt-8">
                Built For People,
                <br />
                Trusted By Organizations
            </h1>

            <p className="text-blue-100 text-lg leading-8 max-w-4xl mx-auto mt-6">
                Our Salary Advance platform connects employees, employers,
                HR teams, and institutions through a secure ecosystem that
                promotes financial wellbeing and responsible access to earned income.
            </p>

            </div>
        </section>

        {/* AUDIENCES */}
        <section className="py-18">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-[#1845B5]">
                Designed For Every Stakeholder
                </h2>

                <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Every participant in the salary advance ecosystem gains value,
                from employees seeking financial flexibility to employers
                looking to support their workforce.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {audiences.map((item, index) => (
                <div
                    key={index}
                    className="
                    bg-white
                    border border-gray-100
                    rounded-[30px]
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    "
                >
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#1845B5]">
                    {item.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-8">
                    {item.description}
                    </p>
                </div>
                ))}

            </div>

            </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-slate-50 py-14">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#1845B5]">
                Why Organizations Choose Us
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#1845B5]">
                    Employee Satisfaction
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                    Help employees manage unexpected expenses without waiting
                    for payday.
                </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#1845B5]">
                    Reduced Financial Stress
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                    Financially secure employees are often more focused,
                    productive, and engaged at work.
                </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#1845B5]">
                    Secure Repayment Model
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                    Payroll-backed deductions create a predictable and
                    transparent repayment process.
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
                Ready To Empower Your Workforce?
                </h2>

                <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
                Join organizations that are helping employees access
                responsible financial support when they need it most.
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