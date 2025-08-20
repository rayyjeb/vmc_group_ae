import Image from "next/image";
import Highlight from "../ui/highlights";

const brandLogos = Array.from({ length: 18 }, (_, i) => `/logo/${i + 1}.png`);

export default function Brands() {
    return (
        <section className="bg-background mt-24">
            <div className="container mx-auto px-4">
                <div className='flex flex-col md:w-1/2 gap-4'>
                    <Highlight text='BRANDS WE SELL' className='text-custom-text-100 ' />
                    <p className='text-4xl md:text-5xl max-w-sm tracking-tight text-custom-text-100'>
                        Discover Trusted Brands We Sell
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center mt-12">
                    {brandLogos.map((src, idx) => {
                        // If it's the last cell, show "and many more"
                        if (idx === brandLogos.length - 1) {
                            return (
                                <div
                                    key="and-many-more"
                                    className="flex h-full justify-center items-center select-none cursor-crosshair p-4 hover:text-text-brand bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 text-center"
                                >
                                    <span className="text-lg tracking-tighter text-custom-text-100 opacity-70 group-hover:text-brand transition-colors duration-200">
                                        100+ More Brands
                                    </span>
                                </div>
                            );
                        }
                        // Otherwise, show the logo
                        return (
                            <div
                                key={src}
                                className="group flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                            >
                                <Image
                                    src={src}
                                    alt={`Brand logo ${idx + 1}`}
                                    width={150}
                                    height={100}
                                    className="object-contain  group-hover:grayscale-0 transition duration-300"
                                    priority={idx < 4}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
