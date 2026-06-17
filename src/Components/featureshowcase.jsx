import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Smartphone,
    Building2,
    ShieldCheck,
    } from "lucide-react";

    import ussdImg from "../assets/images/ussd.png";
    import dashboardImg from "../assets/images/dashboard.jpg";
    import securityImg from "../assets/images/security.jpg";

    export default function featureshowcase() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
        icon: <Smartphone size={24} />,
        image: ussdImg,
        title: "USSD",
        description:
            "Employees can request salary advances from any mobile phone without internet access. Simply dial the USSD code and follow the prompts.",
        points: [
            "Works on any phone",
            "No internet required",
            "24/7 accessibility",
        ],
        },

        {
        icon: <Building2 size={24} />,
        image: dashboardImg,
        title: "Employer Dashboard",
        description:
            "HR teams and employers can manage employees, approvals, repayments, and records through a centralized dashboard.",
        points: [
            "Employee management",
            "Approval workflows",
            "Payroll integration",
        ],
        },

        {
        icon: <ShieldCheck size={24} />,
        image: securityImg,
        title: "Secure Verification",
        description:
            "Every employee is verified through employer records, helping reduce risk while ensuring responsible lending.",
        points: [
            "Employer-backed",
            "Document verification",
            "Reduced risk",
        ],
        },
    ];

    const active = features[activeFeature];

    return (
        <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* HEADER */}
            <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Platform Features
            </span>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#1845B5] mt-4">
                Everything You Need In One Platform
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                Built for employees, employers and HR teams to simplify
                salary advance management from application to repayment.
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-5">

                {features.map((feature, index) => (
                <motion.div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    onMouseEnter={() => setActiveFeature(index)}
                    whileHover={{ x: 10 }}
                    className={`
                    cursor-pointer
                    rounded-3xl
                    p-6
                    border
                    transition-all
                    duration-500

                    ${
                        activeFeature === index
                        ? "bg-[#1845B5] border-[#1845B5] text-white shadow-2xl"
                        : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    }
                    `}
                >
                    <div className="flex items-start gap-4">

                    <div
                        className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center
                        ${
                            activeFeature === index
                            ? "bg-white/20"
                            : "bg-blue-50 text-[#1845B5]"
                        }
                        `}
                    >
                        {feature.icon}
                    </div>

                    <div>
                    <h3 className={`font-bold text-blue-600 text-xl
                        ${
                            activeFeature === index
                            ? "text-white"
                            : "text-[#1845B5]"
                        }
                    `}
                    >
                        {feature.title}
                    </h3>

                        <p
                        className={`mt-2 ${
                            activeFeature === index
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                        >
                        {feature.description}
                        </p>
                    </div>

                    </div>
                </motion.div>
                ))}

            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

                <AnimatePresence mode="wait">

                <motion.div
                    key={activeFeature}
                    initial={{
                    opacity: 0,
                    x: 120,
                    }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    }}
                    exit={{
                    opacity: 0,
                    x: -120,
                    }}
                    transition={{
                    duration: 0.6,
                    }}
                    className="relative"
                >

                    {/* IMAGE */}
                    <div className="group overflow-hidden rounded-[35px] shadow-2xl">

                    <motion.img
                        src={active.image}
                        alt={active.title}
                        animate={{
                        y: [0, -10, 0],
                        }}
                        transition={{
                        repeat: Infinity,
                        duration: 4,
                        }}
                        className="
                        w-full
                        h-[550px]
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                        "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    </div>

                    {/* INFO CARD */}
                    <motion.div
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                    }}
                    className="
                        absolute
                        bottom-6
                        left-6
                        right-6
                        bg-white
                        rounded-3xl
                        p-6
                        shadow-2xl
                    "
                    >

                    <h3 className="text-2xl font-bold text-[#1845B5]">
                        {active.title}
                    </h3>

                    <p className="text-gray-600 mt-3">
                        {active.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-5">

                        {active.points.map((point, index) => (
                        <span
                            key={index}
                            className="
                            bg-blue-50
                            text-[#1845B5]
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-medium
                            "
                        >
                            {point}
                        </span>
                        ))}

                    </div>

                    </motion.div>

                </motion.div>

                </AnimatePresence>

            </div>

            </div>
        </div>
        </section>
    );
}
