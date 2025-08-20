import React from 'react'
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
const Slider = () => {
    return (
        <div>
            <section className="bg-background mt-4">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm">Providing Quality Brands</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
                            <InfiniteSlider gap={112} className="w-full">
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-16 w-auto max-w-full dark:invert"
                                        src="/logo/1.png"
                                        alt="Logo 1"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/2.png"
                                        alt="Logo 2"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/3.png"
                                        alt="Logo 3"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/4.png"
                                        alt="Logo 4"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/5.png"
                                        alt="Logo 5"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/6.png"
                                        alt="Logo 6"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/7.png"
                                        alt="Logo 7"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <Image
                                        className="mx-auto h-12 w-auto max-w-full dark:invert"
                                        src="/logo/8.png"
                                        alt="Logo 8"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Slider