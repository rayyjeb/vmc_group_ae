import React from "react";
import Image from "next/image";

// Example brand data
const brands = [
    {
        name: "Nemo",
        logo: "/logo/1.png",
    },
    {
        name: "Shawarma Bello",
        logo: "/logo/2.png",
    },
    {
        name: "Diplomata",
        logo: "/logo/3.png",
    },
    {
        name: "Perdix",
        logo: "/logo/4.png",
    },
    {
        name: "Sadia",
        logo: "/logo/5.png",
    },
    {
        name: "Nat",
        logo: "/logo/6.png",
    },
    {
        name: "AjinoMoto",
        logo: "/logo/7.png",
    },
    {
        name: "Jenan",
        logo: "/logo/8.png",
    },
    {
        name: "Hayat",
        logo: "/logo/9.png",
    },
    {
        name: "Seara",
        logo: "/logo/10.png",
    },
    {
        name: "Mama Sita's",
        logo: "/logo/11.png",
    },
    {
        name: "Koch Foods",
        logo: "/logo/12.png",
    },
    {
        name: "Sinnara",
        logo: "/logo/13.png",
    },
    {
        name: "Amir",
        logo: "/logo/14.png",
    },
    {
        name: "Al Badia",
        logo: "/logo/15.png",
    },
    {
        name: "Aurora",
        logo: "/logo/16.png",
    },
    {
        name: "Urussa",
        logo: "/logo/17.png",
    },
    {
        name: "Bellaves",
        logo: "/logo/18.png",
    },
];

const BrandGallery = () => {
    return (
        <main className="bg-white min-h-screen pt-48">
            <section className="container mx-auto px-4 py-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl tracking-tighter text-custom-text-100 mb-4">
                        Our Brand Gallery
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore the diverse range of trusted brands we proudly represent
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {brands.map((brand) => (
                        <a
                            key={brand.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-6 text-center hover:bg-gray-100"
                        >
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={120}
                                height={80}
                                className="mx-auto mb-4 object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                            <h2 className="text-lg font-semibold text-custom-text-100 group-hover:text-brand mb-2">
                                {brand.name}
                            </h2>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BrandGallery;