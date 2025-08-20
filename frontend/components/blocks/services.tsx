import React from 'react'
import Highlight from '../ui/highlights'
import ServiceCard from '../shared/service'

const Services = () => {
    return (
        <div className='bg-accent h-full mt-24'>
            <div className='container mx-auto pt-24'>
                <div className='flex flex-col gap-4 text-white '>
                    <Highlight text="OUR SERVICES" />
                    <h1 className='text-5xl'> We bring the best solutions <br /> when it comes to food</h1>
                </div>
                <div className='flex flex-col gap-24 py-40'>
                    <ServiceCard
                        title="Frozen Items"
                        titleStyle="text-brand"
                        description="Complete cold chain management and distribution across UAE and GCC countries."
                        items={[
                            "24/7 Cold Chain",
                            "Temperature Monitoring",
                            "Express Delivery",
                        ]}
                        image="https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg"
                        imageLeft={true}
                    />
                    <ServiceCard
                        title="Food Packaging"
                        titleStyle="text-brand"
                        description="Custom and standard packaging solutions for all your food products with eco-friendly options."
                        items={[
                            "Custom Design",
                            "Eco-Friendly",
                            "Food Safe Materials",
                        ]}
                        image="https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg"
                        imageLeft={false}
                    />
                    <ServiceCard
                        title="Raw Food Supply"
                        titleStyle="text-brand"
                        description="Bulk and wholesale supply of premium quality raw food ingredients."
                        items={[
                            "Premium Quality",
                            "Bulk Supply",
                            "Competitive Pricing",
                        ]}
                        image="https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg"
                        imageLeft={true}
                    />
                    <ServiceCard
                        title="Import/Export Services"
                        titleStyle="text-brand"
                        description="Facilitating international trade with comprehensive import/export solutions."
                        items={[
                            "Global Network",
                            "Customs Clearance",
                            "Documentation",
                        ]}
                        image="https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg"
                        imageLeft={false}
                    />
                    <ServiceCard
                        title="Private Labeling"
                        titleStyle="text-brand"
                        description="Complete private label manufacturing services for your brand."
                        items={[
                            "Brand Development",
                            "Quality Assurance",
                            "Market Ready",
                        ]}
                        image="https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg"
                        imageLeft={true}
                    />
                    <ServiceCard
                        title="B2B Consulting"
                        titleStyle="text-brand"
                        description="Expert consulting services for food industry businesses and startups."
                        items={[
                            "Market Analysis",
                            "Strategy Planning",
                            "Growth Solutions",
                        ]}
                        image="https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg"
                        imageLeft={false}
                    />
                </div>

            </div>
        </div>
    )
}

export default Services