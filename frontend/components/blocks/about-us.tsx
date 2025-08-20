
import Image from "next/image";
import Highlight from "../ui/highlights";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="w-full mt-24 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-16 items-center md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                        <div className="bg-muted rounded-md aspect-square">
                            <Image
                                className="h-full w-full object-cover rounded-md"
                                src="/Packages.webp"
                                alt="Construction background"
                                width={300} // Set an appropriate width
                                height={300} // Set an appropriate height
                                sizes="(max-width: 768px) 100vw, 300px"
                                quality={75}
                                loading="eager"
                            />
                        </div>
                        <div className="bg-muted rounded-md aspect-square">
                            <Image
                                className="h-full w-full object-cover rounded-md"
                                src="/eggs.webp"
                                alt="Construction background"
                                width={300} // Set an appropriate width
                                height={300} // Set an appropriate height
                                sizes="(max-width: 768px) 100vw, 300px"
                                quality={75}
                                loading="eager"
                            />
                        </div>
                        <div className="bg-muted rounded-md aspect-square">
                            <Image
                                className="h-full w-full object-cover rounded-md"
                                src="/fries.webp"
                                alt="Construction background"
                                width={300} // Set an appropriate width
                                height={300} // Set an appropriate height
                                sizes="(max-width: 768px) 100vw, 300px"
                                quality={75}
                                loading="eager"
                            />
                        </div>
                        <div className="bg-muted rounded-md aspect-square">
                            <Image
                                className="h-full w-full object-cover rounded-md"
                                src="/meat.webp"
                                alt="Dewalt Tools"
                                width={300}
                                height={300}
                                sizes="(max-width: 768px) 100vw, 300px"
                                quality={75}
                                loading="eager"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col order-1 md:order-2">
                        <div className="flex gap-4 flex-col">
                            <Highlight text="ABOUT US" className="text-custom-text-100" />
                            <p className="text-4xl md:text-5xl text-custom-text-100  tracking-tighter text-left">
                                VMC General Trading
                            </p>
                            <p className="text-base text-custom-text-200 mt-4 leading-relaxed text-muted-foreground text-left">
                                Since 2008, we have been at the forefront of revolutionizing food supply chains throughout the UAE and the broader GCC region. Our journey is defined by a steadfast commitment to delivering the highest standards of quality in every product and service we offer. By embracing innovation at every stage—from sourcing and logistics to distribution and customer engagement—we ensure that our partners and clients benefit from the latest advancements in the industry.                            </p>
                        </div>
                        <Link href={"/about-us"}>
                            <Button className="w-fit mt-6">
                                View More
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

