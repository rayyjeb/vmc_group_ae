"use client"
import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import Highlight from "./highlights"


interface CarouselProps {
  images: { src: string; alt: string, desc: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    width: 300px;
    height: 400px;
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  /* Custom pagination bullet color */
  .swiper-pagination-bullet {
    background: #92C33E
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #92C33E
    opacity: 1;
  }
  `
  return (
    <section className="w-ace-y-4 container mx-auto">
      <style>{css}</style>
      <div className="mx-auto w-full ">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border-black/5  p-2 md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">

          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <Highlight text="INDUSTRIES WE SERVE" className="text-custom-text-100 mb-4" />
                <h3 className="text-4xl md:text-5xl tracking-tight text-custom-text-100">
                  Tailored Solutions <br /> for Every Business
                </h3>
                <p className="mt-4 text-custom-text-200 mb-8">Dedicated to Delivering Excellence and Empowering Client Growth</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative size-full rounded-3xl overflow-hidden">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full object-cover rounded-xl"
                        alt={image.alt}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-bl-3xl" />
                      {/* Text */}
                      <div className="absolute bottom-6 left-6  z-20">
                        <p className="text-3xl tracking-tighter text-white">
                          {image.alt}
                        </p>
                        <p className="text-xs text-white">{image.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative size-full rounded-3xl overflow-hidden">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full object-cover rounded-xl"
                        alt={image.alt}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-bl-3xl" />
                      {/* Text */}
                      <div className="absolute bottom-6 left-6  z-20">
                        <p className="text-3xl tracking-tighter text-white">
                          {image.alt}
                        </p>
                        <p className="text-xs text-white">{image.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
