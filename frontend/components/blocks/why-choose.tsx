// components/blocks/why-choose.tsx

import Highlight from "../ui/highlights";

const features = [
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#92C33E" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
            </svg>
        ),
        title: "Wide Product Range",
        desc: "From frozen foods to daily essentials, we offer a diverse selection of high-quality food materials.",
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#92C33E" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
        title: "Freshness Guaranteed",
        desc: "We ensure all chilled, frozen, and dry products are stored and delivered at optimal freshness.",
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#92C33E" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21C7 21 2 17 2 12V7l10-5 10 5v5c0 5-5 9-10 9z" />
            </svg>
        ),
        title: "Trusted by Businesses",
        desc: "Our products power the kitchens of top restaurants, hotels, supermarkets, and distributors.",
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#92C33E" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
            </svg>
        ),
        title: "Custom Supply Solutions",
        desc: "Whether bulk or retail, we offer tailored packaging and logistics to match your business needs.",
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#92C33E" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 1v22M5 6h14M5 18h14" />
            </svg>
        ),
        title: "Hygiene & Safety First",
        desc: "All our food handling, packaging, and transport processes follow the highest safety standards.",
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#92C33E" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 8-8" />
            </svg>
        ),
        title: "Proven Track Record",
        desc: "Years of reliable service and strong partnerships across the food distribution industry.",
    },
];

export default function WhyChoose() {
    return (
        <section
            className="relative py-20 px-4 md:px-12 mt-24"
            style={{
                background: "url('/bg.webp') center/cover no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <Highlight text="WHY US" className="text-white mb-4" />
                        <h2 className="text-4xl md:text-5xl text-white mb-4 tracking-tighter">Why choose VMC?</h2>
                    </div>
                    <p className="text-custom-text-200 max-w-xl text-lg">
                        We take pride in delivering high-quality, food solutions. With years of experience and a team of certified experts.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white/90 rounded-xl p-6 shadow-lg flex flex-col gap-3"
                        >
                            <div>{f.icon}</div>
                            <h3 className="font-semibold text-base  md:text-lg text-gray-900">{f.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
