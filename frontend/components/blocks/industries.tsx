import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const Industries = () => {
    const images = [
        { src: "/office.webp", alt: "Offices", desc: "For productive workspaces" },
        { src: "/bakeries.webp", alt: "Bakeries", desc: "For fresh baking needs" },
        { src: "/cafe.webp", alt: "Cafe", desc: "For vibrant cafés" },
        { src: "/hotels.webp", alt: "Hotels", desc: "For guest comfort" },
        { src: "/restaurants.webp", alt: "Restaurants", desc: "For great dining" },
        { src: "/uni.webp", alt: "University", desc: "For campus life" },
    ]

    return (
        <div className="mt-24">
            <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
            />
        </div>
    )
}

export default Industries