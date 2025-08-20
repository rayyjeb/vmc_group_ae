import React from 'react'
import Image from 'next/image'

interface ServiceCardProps {
    title: string
    titleStyle?: string
    description: string
    items: string[]
    image: string
    imageLeft?: boolean
    buttonColor?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    titleStyle = '',
    description,
    items,
    image,
    imageLeft = true,
}) => {
    return (
        <div className={`flex flex-col md:flex-row ${imageLeft ? '' : 'md:flex-row-reverse'} gap-28  my-8`}>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full h-[320px] bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, 420px"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
                <p className={`text-2xl md:text-5xl font-bold mb-2 ${titleStyle}`}>{title}</p>
                <p className="text-lg mb-4 leading-relaxed text-white">{description}</p>
                <ul className="list-disc pl-5 mb-4 text-lg text-white">
                    {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServiceCard