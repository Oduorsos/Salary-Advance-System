import partner3 from "../assets/logos/logo2.jpeg";
import partner1 from "../assets/logos/I&m.png";
import partner2 from "../assets/logos/safaricom.png";

export default function PartnersMarquee() {
const partners = [
        {
        name: "Swizzsoft Systems",
        logo: partner3,
        type: "Corporate Partner",
        },
        {
        name: "I&M Bank",
        logo: partner1,
        type: "Financial Partner",
        },
        {
        name: "Safaricom",
        logo: partner2,
        type: "Employer Partner",
        }
    ];

    return (
        <>
        <style>
            {`
            @keyframes marquee {
                from {
                transform: translateX(0);
                }

                to {
                transform: translateX(-50%);
                }
            }

            @keyframes floatCard {
                0%,100% {
                transform: translateY(0px);
                }

                50% {
                transform: translateY(-10px);
                }
            }

            .partners-track {
                display: flex;
                width: max-content;
                animation: marquee 28s linear infinite;
            }

            .partners-track:hover {
                animation-play-state: paused;
            }

            .partner-card {
                animation: floatCard 4s ease-in-out infinite;
            }

            .partner-card:nth-child(2n) {
                animation-delay: 1s;
            }

            .partner-card:nth-child(3n) {
                animation-delay: 2s;
            }
            `}
        </style>

        <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Header */} 
            <div className="text-center mb-12"> 
                <span className="text-blue-600 font-semibold uppercase tracking-wider"> 
                    Trusted Partners 
                </span> 
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1845B5] mt-3"> 
                    Growing Together With Industry Leaders 
                </h2> 
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto"> 
                    We collaborate with employers, payroll providers, 
                    SACCOs, HR teams and financial institutions to empower employees. 
                </p> 
            </div>

            {/* Logos Marquee */}
            <div className="relative overflow-hidden">

                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white via-white to-transparent z-10" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white via-white to-transparent z-10" />

                <div className="partners-track gap-8">

                {[...partners, ...partners].map((partner, index) => (
                    <div
                    key={index}
                    className="
                        partner-card
                        min-w-[300px]
                        bg-white/90
                        backdrop-blur-lg
                        border border-blue-50
                        hover:border-blue-300
                        rounded-3xl
                        px-8
                        py-6
                        flex
                        items-center
                        gap-5
                        shadow-lg
                        hover:shadow-2xl
                        hover:scale-105
                        transition-all
                        duration-500
                    "
                    >

                    {/* Logo */}
                    <div
                        className="
                        w-30
                        h-30
                        bg-white
                        rounded-2xl
                        border
                        border-gray-100
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        shrink-0
                        "
                    >
                        <img
                        src={partner.logo}
                        alt={partner.name}
                        className="
                            w-full
                            h-full
                            object-contain
                            p-2
                            transition-all
                            duration-500
                            hover:scale-110
                        "
                        />
                    </div>

                    {/* Info */}
                    <div>

                        <h4 className="font-bold text-[#1845B5]">
                        {partner.name}
                        </h4>

                        <p className="text-gray-500 mt-1">
                        {partner.type}
                        </p>

                    </div>

                    </div>
                ))}

                </div>

            </div>

            </div>
        </section>
        </>
    );
}