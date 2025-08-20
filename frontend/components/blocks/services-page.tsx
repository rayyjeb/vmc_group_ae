"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: 'Food Packaging Solutions',
        description: 'Custom and standard packaging solutions for all your food products with eco-friendly options.',
        images: ['/Packages.webp', '/package.webp', '/thermo.webp'],
        link: '/services/food-packaging',
        buttonText: 'Learn More',
        tags: [
            { icon: '🥡', label: 'Eco-friendly' },
            { icon: '📦', label: 'Custom Sizes' },
            { icon: '🌱', label: 'Biodegradable' }
        ],
        stats: [
            { label: 'PACKAGING TYPES', value: '20+' },
            { label: 'CLIENTS', value: '150+' },
            { label: 'MATERIALS', value: 'Paper, Plastic, Bio' },
            { label: 'LEAD TIME', value: '2 Weeks' },
            { label: 'MOQ', value: '1,000 Units' },
            { label: 'EXPORT COUNTRIES', value: '10+' }
        ]
    },
    {
        title: 'Frozen Food Distribution',
        description: 'Complete cold chain management and distribution across UAE and GCC countries.',
        images: ['/meat.webp', '/fries.webp', '/eggs.webp'],
        link: '/services/frozen-food-distribution',
        buttonText: 'Learn More',
        tags: [
            { icon: '❄️', label: 'Cold Chain' },
            { icon: '🚚', label: 'Logistics' },
            { icon: '🕒', label: '24/7 Delivery' }
        ],
        stats: [
            { label: 'CITIES COVERED', value: '25+' },
            { label: 'FLEET SIZE', value: '50 Trucks' },
            { label: 'TEMP RANGE', value: '-18°C to 5°C' },
            { label: 'DISTRIBUTION CENTERS', value: '4' },
            { label: 'ANNUAL VOLUME', value: '10,000 Tons' },
            { label: 'ON-TIME RATE', value: '98%' }
        ]
    },
    {
        title: 'Raw Food Supply',
        description: 'Bulk and wholesale supply of premium quality raw food ingredients.',
        images: ['/pista.webp', '/rice.webp'],
        link: '/services/raw-food-supply',
        buttonText: 'Learn More',
        tags: [
            { icon: '🌾', label: 'Bulk Supply' },
            { icon: '🥦', label: 'Fresh Ingredients' },
            { icon: '🏷️', label: 'Wholesale' }
        ],
        stats: [
            { label: 'PRODUCTS', value: '100+' },
            { label: 'SUPPLIERS', value: '30+' },
            { label: 'MIN ORDER', value: '10Kg' },
            { label: 'DELIVERY TIME', value: '3 Days' },
            { label: 'CERTIFICATIONS', value: 'ISO, HACCP' },
            { label: 'REGIONS SERVED', value: 'UAE, GCC' }
        ]
    },
    {
        title: 'Daily Essentials',
        description: 'Bulk supply and private label solutions for daily essentials such as detergents, toilet paper, tissues, and cleaning products.',
        images: ['/tissue.webp', '/detergent.webp'],
        link: '/services/daily-essentials',
        buttonText: 'Learn More',
        tags: [
            { icon: '🧻', label: 'Toilet Paper' },
            { icon: '🧴', label: 'Detergents' },
            { icon: '🧼', label: 'Cleaning Products' }
        ],
        stats: [
            { label: 'PRODUCTS', value: '40+' },
            { label: 'BRANDS SUPPORTED', value: '20+' },
            { label: 'MIN ORDER', value: '500 Units' },
            { label: 'DELIVERY TIME', value: '1 Week' },
            { label: 'PRIVATE LABEL', value: 'Available' },
            { label: 'REGIONS SERVED', value: 'UAE, GCC' }
        ]
    },
    {
        title: 'Import/Export Services',
        description: 'Facilitating international trade with comprehensive import/export solutions.',
        images: ['/VAN3.webp', '/carton.webp'],
        link: '/services/import-export',
        buttonText: 'Learn More',
        tags: [
            { icon: '🌍', label: 'Global Reach' },
            { icon: '🛳️', label: 'Shipping' },
            { icon: '📦', label: 'Customs' }
        ],
        stats: [
            { label: 'COUNTRIES', value: '40+' },
            { label: 'EXPORT VOLUME', value: '5,000 Tons' },
            { label: 'IMPORT VOLUME', value: '3,000 Tons' },
            { label: 'PARTNERS', value: '60+' },
            { label: 'CLEARANCE TIME', value: '48 Hours' },
            { label: 'SUPPORT', value: '24/7' }
        ]
    },

]

const ServicesPage = () => {
    const [carouselIndexes, setCarouselIndexes] = useState(Array(features.length).fill(0));
    const touchStartXRefs = useRef<(number | null)[]>(features.map(() => null));

    const handlePrev = (featureIdx: number) => {
        setCarouselIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[featureIdx] = (newIndexes[featureIdx] - 1 + features[featureIdx].images.length) % features[featureIdx].images.length;
            return newIndexes;
        });
    };

    const handleNext = (featureIdx: number) => {
        setCarouselIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[featureIdx] = (newIndexes[featureIdx] + 1) % features[featureIdx].images.length;
            return newIndexes;
        });
    };

    const handleDotClick = (featureIdx: number, imgIdx: number) => {
        setCarouselIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[featureIdx] = imgIdx;
            return newIndexes;
        });
    };

    return (
        <main className="in-h-screen pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-48 pb-12 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl tracking-tighter text-custom-text-100 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Solutions that Drive Results
                </motion.h1>
                <motion.p
                    className="text-custom-text-200 text-lg max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Since 2008, we’ve empowered hundreds of businesses across the UAE and GCC with quality, safety, and reliability.
                </motion.p>
                <Button asChild className="mt-2">
                    <Link href="/contact-us">
                        Get a Free Quote <ArrowRight className="ml-2 size-3.5   " />
                    </Link>
                </Button>
            </section>

            {/* Services Grid */}
            <section id="services-list" className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            className="flex flex-col rounded-3xl shadow-lg bg-white border border-gray-100 overflow-hidden group transition-shadow hover:shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Image Carousel */}
                            <div
                                className="relative w-full h-56 md:h-64 lg:h-72 flex items-center justify-center bg-gray-50"
                                tabIndex={0}
                                aria-label={`Image carousel for ${feature.title}`}
                                onTouchStart={(e) => {
                                    touchStartXRefs.current[index] = e.touches[0].clientX;
                                }}
                                onTouchEnd={(e) => {
                                    const touchStartX = touchStartXRefs.current[index];
                                    const touchEndX = e.changedTouches[0].clientX;
                                    if (touchStartX !== null && touchStartX !== undefined) {
                                        const diff = touchEndX - touchStartX;
                                        if (Math.abs(diff) > 50) {
                                            if (diff > 0) {
                                                handlePrev(index);
                                            } else {
                                                handleNext(index);
                                            }
                                        }
                                    }
                                    touchStartXRefs.current[index] = null;
                                }}
                            >
                                {feature.images.map((img, imgIdx) => (
                                    <Image
                                        key={img}
                                        src={img}
                                        alt={`${feature.title} image ${imgIdx + 1}`}
                                        fill
                                        className={`
                                            object-cover transition-all duration-300
                                            ${carouselIndexes[index] === imgIdx ? 'block' : 'hidden'}
                                        `}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={true}
                                    />
                                ))}
                                {/* Carousel Controls */}
                                <button
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                                    aria-label="Previous image"
                                    onClick={() => handlePrev(index)}
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                                    aria-label="Next image"
                                    onClick={() => handleNext(index)}
                                >
                                    <ChevronRight />
                                </button>
                                {/* Dots */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                    {feature.images.map((_, imgIdx) => (
                                        <button
                                            key={imgIdx}
                                            className={`w-3 h-3 rounded-full border-2 ${carouselIndexes[index] === imgIdx ? "bg-brand border-brand" : "bg-gray-200 border-gray-300"}`}
                                            aria-label={`Show image ${imgIdx + 1}`}
                                            onClick={() => handleDotClick(index, imgIdx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full p-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-custom-text-100">{feature.title}</h2>
                                    <p className="text-custom-text-200 mb-4">{feature.description}</p>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {feature.tags.map((tag, i) => (
                                            <span key={i} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm text-gray-700">
                                                <span role="img" aria-label={tag.label} className="pr-2">{tag.icon}</span> {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {feature.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-xs text-gray-400">{stat.label}</div>
                                                <div className="font-bold text-base md:text-lg">{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* <div className="flex gap-3 mt-2">
                                    <Button asChild>
                                        <Link href={feature.link}>
                                            {feature.buttonText} <ArrowRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href="/contact">
                                            Get Quote
                                        </Link>
                                    </Button>
                                </div> */}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;

