import { useState } from "react";
import { Plus, Minus} from "lucide-react";

export default function FAQs() {
    const [active, setActive] = useState(0);

    const faqs = [
        {
        question: "What is Salary Advance?",
        answer:
            "Salary Advance is a payroll-backed financial service that allows employees to access a portion of their earned salary before payday through our USSD platform and employer partnership network.",
        },

        {
        question: "Who qualifies for a salary advance?",
        answer:
            "Employees whose employers are registered or approved partners can apply. Eligibility depends on employment verification, submitted documentation, and employer approval requirements.",
        },

        {
        question: "How much can I borrow?",
        answer:
            "Employees can access up to two-thirds (2/3) of their monthly basic salary. This limit helps ensure responsible borrowing while leaving sufficient income available during payroll processing.",
        },

        {
        question: "How do repayments work?",
        answer:
            "Repayment is automatically deducted through payroll at the end of the month. The employer remits the deducted amount, including applicable charges, before the employee receives the remaining salary balance.",
        },

        {
        question: "Does my employer need to be registered?",
        answer:
            "Yes. Your employer must either be an existing partner or complete our employer onboarding process. This enables employee verification and secure payroll-backed repayments.",
        },

        {
        question: "How does employer verification work?",
        answer:
            "After registration, the employer receives access to the employer dashboard where they verify employment status and upload required employee documentation before advances can be approved.",
        },

        {
        question: "How do I access the service?",
        answer:
            "Employees can access the platform using the USSD code *250*79# on any mobile phone. No smartphone or internet connection is required.",
        },

        {
        question: "Are there any hidden charges?",
        answer:
            "No. All fees, charges, and repayment amounts are displayed before an advance request is confirmed. We maintain full transparency throughout the borrowing process.",
        },

        {
        question: "Is my information secure?",
        answer:
            "Yes. Employee records, employer data, contracts, and verification documents are stored securely and accessed only by authorized parties within the platform.",
        },

        {
        question: "What happens if I leave employment?",
        answer:
            "Employment status forms part of our risk management process. Specific terms regarding outstanding advances are outlined in the employee agreement and employer partnership contract.",
        },
    ];

    return (
        <section className="py-18 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-16">
            <span className=" text-blue-600 font-semibold uppercase tracking-widest">
                Frequently Asked Questions
            </span>

            <h2 className="text-4xl font-bold text-[#1845B5] mt-4">
                Everything You Need
                <span className="text-blue-500"> To Know</span>
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                Find answers to the most common questions about salary advances,
                employer verification, repayments, eligibility, and platform security.
            </p>
            </div>

            {/* FAQ Cards */}
            <div className="space-y-5">
            {faqs.map((faq, index) => (
                <div
                key={index}
                className="
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-sm
                    border
                    border-gray-100
                    transition-all
                    duration-300
                "
                >
                <button
                    onClick={() =>
                    setActive(active === index ? null : index)
                    }
                    className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-7
                    text-left
                    "
                >
                    <h3 className="font-semibold text-lg text-[#1845B5]">
                    {faq.question}
                    </h3>

                    <div
                    className="
                        w-10
                        h-10
                        rounded-full
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                        text-blue-600
                    "
                    >
                    {active === index ? (
                        <Minus size={18} />
                    ) : (
                        <Plus size={18} />
                    )}
                    </div>
                </button>

                <div
                    className={`transition-all duration-500 overflow-hidden ${
                    active === index
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="px-7 pb-7">
                    <p className="text-gray-600 leading-8">
                        {faq.answer}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 bg-gradient-to-r from-[#1845B5] to-[#1640D6] rounded-3xl p-10 text-center">

            <h3 className="text-white text-2xl font-bold">
                Still Have Questions?
            </h3>

            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
                Our team is ready to help employees, employers, HR teams,
                and financial partners understand how the Salary Advance
                platform works.
            </p>

            <a href="/contact-us" className="mt-8 bg-none bg-white text-[#1845B5] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Contact Us
            </a>

            </div>

        </div>
        </section>
    );
}