
import React from 'react';
import { Package, Truck, Utensils, Globe, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ServicesOverview = () => {
    const services = [
        {
            icon: Package,
            title: 'Food Packaging Solutions',
            description: 'Custom and standard packaging solutions for all your food products with eco-friendly options.',
            features: ['Custom Design', 'Eco-Friendly', 'Food Safe Materials'],
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50'
        },
        {
            icon: Truck,
            title: 'Frozen Food Distribution',
            description: 'Complete cold chain management and distribution across UAE and GCC countries.',
            features: ['24/7 Cold Chain', 'Temperature Monitoring', 'Express Delivery'],
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-50'
        },
        {
            icon: Utensils,
            title: 'Raw Food Supply',
            description: 'Bulk and wholesale supply of premium quality raw food ingredients.',
            features: ['Premium Quality', 'Bulk Supply', 'Competitive Pricing'],
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-50'
        },
        {
            icon: Globe,
            title: 'Import/Export Services',
            description: 'Facilitating international trade with comprehensive import/export solutions.',
            features: ['Global Network', 'Customs Clearance', 'Documentation'],
            color: 'from-purple-500 to-indigo-500',
            bgColor: 'bg-purple-50'
        },
        {
            icon: ShieldCheck,
            title: 'Private Labeling',
            description: 'Complete private label manufacturing services for your brand.',
            features: ['Brand Development', 'Quality Assurance', 'Market Ready'],
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50'
        },
        {
            icon: Users,
            title: 'B2B Consulting',
            description: 'Expert consulting services for food industry businesses and startups.',
            features: ['Market Analysis', 'Strategy Planning', 'Growth Solutions'],
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-pink-50'
        }
    ];

    return (
        <section className=" relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Section Header */}

                {/* Enhanced Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Animated Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                                <CardContent className="p-8 relative z-10">
                                    {/* Enhanced Icon Container */}
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.4s' }}></div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-vmc-navy mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-vmc-navy/70 mb-6 leading-relaxed text-lg">
                                        {service.description}
                                    </p>

                                    {/* Enhanced Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-vmc-navy/80 group-hover:text-vmc-navy transition-colors duration-300">
                                                <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Button */}
                                    <div className="flex items-center text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>


            </div>
        </section>
    );
};

export default ServicesOverview;
