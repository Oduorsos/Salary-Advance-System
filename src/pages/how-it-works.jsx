import {
    UserPlus,
    Building2,
    FileCheck,
    Wallet,
    CreditCard,
    ShieldCheck,
    ArrowRight,
    } from "lucide-react";

    export default function HowItWorks() {
    const steps = [
        {
        icon: <UserPlus size={32} />,
        title: "Employee Registration",
        description:
            "The employee registers through our USSD platform and provides employer information for verification.",
        },
        {
        icon: <Building2 size={32} />,
        title: "Employer Verification",
        description:
            "We contact the employer and onboard them as a partner. Employers gain access to a secure dashboard for employee management.",
        },
        {
        icon: <FileCheck size={32} />,
        title: "Document Submission",
        description:
            "Employers upload employee contracts, identification documents, employment details, and other required records for verification.",
        },
        {
        icon: <ShieldCheck size={32} />,
        title: "Approval & Validation",
        description:
            "Our team verifies the submitted information to confirm employment status and eligibility.",
        },
        {
        icon: <Wallet size={32} />,
        title: "Salary Advance Request",
        description:
            "Once approved, employees can request a salary advance through USSD. The maximum amount is capped at two-thirds of the employee's basic salary.",
        },
        {
        icon: <CreditCard size={32} />,
        title: "Payroll Repayment",
        description:
            "At the end of the month, the employer deducts the approved amount plus applicable charges from payroll and remits it to us before paying the remaining salary to the employee.",
        },
    ];

    return (
        <div className="bg-white">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1845B5] via-[#102A7A] to-[#1845B5] py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm">
                How It Works
            </span>

            <h1 className="text-white text-3xl md:text-4xl font-bold mt-8">
                A Simple, Secure Process
            </h1>

            <p className="text-blue-100 text-lg leading-8 max-w-4xl mx-auto mt-6">
                Our Salary Advance solution connects employees, employers,
                and payroll systems to provide responsible access to earned
                income while protecting all parties involved.
            </p>

            </div>
        </section>

        {/* PROCESS */}
        <section className="py-18">
            <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-[#1845B5]">
                The Complete Journey
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto mt-6">
                From registration to repayment, every step is designed
                to ensure convenience, transparency, and responsible lending.
                </p>
            </div>

            <div className="space-y-10">

                {steps.map((step, index) => (
                <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-8 items-start bg-white border border-gray-100 rounded-[30px] p-8 shadow-sm hover:shadow-xl transition"
                >
                    <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    {step.icon}
                    </div>

                    <div className="flex-1">
                    <span className="text-blue-600 font-semibold">
                        Step {index + 1}
                    </span>

                    <h3 className="text-2xl font-bold text-[#1845B5] mt-2">
                        {step.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-8">
                        {step.description}
                    </p>
                    </div>

                    <ArrowRight
                    size={28}
                    className="text-blue-400 hidden lg:block"
                    />
                </div>
                ))}

            </div>
            </div>
        </section>

        {/* IMPORTANT RULES */}
        <section className="bg-slate-50 py-14">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#1845B5]">
                Responsible Lending Principles
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1845B5]">
                    Salary Protection
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                    Employees can access up to two-thirds of their basic salary,
                    ensuring they retain income for personal obligations and
                    month-end expenses.
                </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1845B5]">
                    Employer Backing
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                    Repayment is facilitated through payroll deductions,
                    creating a secure and predictable repayment process.
                </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1845B5]">
                    Verified Access
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                    Every employee undergoes verification through employer
                    records and supporting documentation before approval.
                </p>
                </div>

            </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-14">
            <div className="max-w-6xl mx-auto px-6">

            <div className="bg-gradient-to-r from-[#1845B5] to-[#1640D6] rounded-[40px] p-14 text-center">

                <h2 className="text-white text-3xl font-bold">
                Ready To Get Started?
                </h2>

                <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
                Register through our USSD platform and begin your journey
                toward responsible, employer-backed salary advances.
                </p>

                <button onClick={() => (window.location.href = "tel:*250*79#")}
                    className="mt-8 bg-white text-[#1845B5] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Dial *250*79#
                </button>

            </div>

            </div>
        </section>
        </div>
    );
}
