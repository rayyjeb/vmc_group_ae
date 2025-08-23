import Link from "next/link";
import { Button } from "../ui/button";
import Highlight from "../ui/highlights";

export default function Hero() {
    return (
        <div className="p-2" style={{ position: "relative" }}>
            <div
                style={{
                    height: "90vh",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "20px",
                    }}
                >
                    <source src="/video/demo1.mp4" type="video/mp4" />
                </video>
                {/* Overlay for darkening the image, optional */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    }}
                >
                    <Highlight className="mb-2 sm:mb-4 text-xs sm:text-sm md:text-base" text="EMPOWERING QUALITY SERVICE SINCE 2008" />
                    <div className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
                        <h1 className="text-white">
                            Preserving
                            <span className="text-brand"> Goodness</span>
                        </h1>
                        <h1 className="text-white">
                            Packaging
                            <span className="text-brand"> Excellence</span>
                        </h1>
                    </div>
                    <p className="px-5 md:px-0 mt-4 text-sm sm:text-base md:text-lg">
                        Serving the best food solutions in UAE and Middle East since 2008
                    </p>
                    <div className="flex items-center gap-2 mt-5">
                        <Button
                            asChild
                            size="sm">
                            <Link href="/products">
                                <span className="font-medium" >View Products</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            variant={"outline"}
                        >
                            <Link href="about-us">
                                <span className="font-medium">Know more</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}