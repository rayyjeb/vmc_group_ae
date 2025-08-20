"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Button } from '../ui/button';
import Highlight from '../ui/highlights';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

const ServicesNew = () => {
    // Track current image index for each feature
    const [carouselIndexes, setCarouselIndexes] = useState(Array(features.length).fill(0));
    const touchStartXRefs = React.useRef<(number | null)[]>(features.map(() => null));

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
        <div>
            <section className='text-left font-urbanist container mx-auto px-4 bg-background mt-24'>
                <Highlight text='OUR SERVICES' className='mb-2' />
                <motion.h2
                    className="text-4xl md:text-5xl text-custom-text-100  tracking-tighter text-left mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Solutions that drive results
                </motion.h2>
                <motion.p
                    className='text-custom-text-200 text-base mb-20'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Our commitment to quality, safety, and reliability has earned us the trust of hundreds of businesses across the UAE and GCC region since 2008.
                </motion.p>

                {/* Sticky Vertical Scroll with Feature List */}
                <div className='flex flex-col gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className='flex flex-col lg:flex-row justify-between items-center rounded-lg h-auto lg:h-[450px] bg-white border sticky top-24 overflow-hidden p-2 lg:p-4'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Left: Content (below image on mobile, left on desktop) */}
                            <div className='flex flex-col justify-between w-full lg:w-1/2 p-2 lg:p-4 pt-2 lg:pt-8 order-2 lg:order-1'>
                                <div>
                                    <motion.h3
                                        className='text-3xl text-left font-medium mb-2 tracking-tighter'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {feature.title}
                                    </motion.h3>
                                    <p className='text-custom-text-200 text-left text-sm mb-4'>
                                        {feature.description}
                                    </p>
                                    {/* Dynamic tags */}
                                    <div className="flex gap-2 mb-6">
                                        {feature.tags.map((tag, i) => (
                                            <span key={i} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm text-gray-700">
                                                <span role="img" aria-label={tag.label} className='pr-2'>{tag.icon}</span> {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Dynamic stats grid */}
                                    <div className="grid grid-cols-3 text-left gap-4 mb-6">
                                        {feature.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-xs text-gray-400">{stat.label}</div>
                                                <div className="font-bold text-xs md:text-lg">{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link href={"/contact-us"}>
                                    <Button className='w-fit'>
                                        Get Quote
                                    </Button>
                                </Link>
                            </div>
                            {/* Right: Image (on top for mobile, right for desktop) */}
                            <div
                                className='relative w-full lg:w-1/2 h-56 lg:h-full flex justify-center items-center mb-4 lg:mb-0 order-1 lg:order-2'
                                onTouchStart={(e) => {
                                    touchStartXRefs.current[index] = e.touches[0].clientX;
                                }}
                                onTouchEnd={(e) => {
                                    const touchStartX = touchStartXRefs.current[index];
                                    const touchEndX = e.changedTouches[0].clientX;
                                    if (touchStartX !== null && touchStartX !== undefined) {
                                        const diff = touchEndX - touchStartX;
                                        if (Math.abs(diff) > 50) { // threshold for swipe
                                            if (diff > 0) {
                                                handlePrev(index);
                                            } else {
                                                handleNext(index);
                                            }
                                        }
                                    }
                                    touchStartXRefs.current[index] = null; // reset
                                }}
                            >
                                {feature.images.map((img, imgIdx) => (
                                    <Image
                                        key={img}
                                        fill
                                        className={`
                                            object-cover rounded-lg
                                            ${carouselIndexes[index] === imgIdx ? 'block' : 'hidden'}
                                        `}
                                        src={img}
                                        alt={`${feature.title} image ${imgIdx + 1}`}
                                        priority={true}
                                    />
                                ))}
                                {/* Carousel dots */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                    {feature.images.map((_, imgIdx) => (
                                        <span
                                            key={imgIdx}
                                            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full cursor-pointer ${carouselIndexes[index] === imgIdx ? 'bg-brand' : 'bg-gray-300'}`}
                                            onClick={() => handleDotClick(index, imgIdx)}
                                        ></span>
                                    ))}
                                </div>
                                {/* Prev/Next buttons */}
                                <button
                                    className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white/30 bg-white  rounded-full p-1 lg:p-2"
                                    onClick={() => handlePrev(index)}
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white/30 bg-white rounded-full p-1 lg:p-2"
                                    onClick={() => handleNext(index)}
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default ServicesNew

