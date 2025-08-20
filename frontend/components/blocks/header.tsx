"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { useScroll, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useCart } from "@/context/CartContext"
const menuItems = [
    { name: 'Products', href: '/products' },
    { name: 'Brands', href: '/brands' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollYProgress } = useScroll()
    const pathname = usePathname()
    const isHome = pathname === "/"
    const { openCart, getTotalItems } = useCart()

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.10)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', (scrolled) && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn(
                            'relative flex items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
                            (isHome && scrolled) && 'lg:py-4'
                        )}
                    >
                        {/* Left: Desktop Menu (hidden on mobile, but container always present) */}
                        <div className="w-1/3 flex items-center">
                            <ul className={cn(
                                "hidden lg:flex gap-8 text-sm transition-colors duration-300",
                                (isHome && !scrolled) ? "text-white hover:text-white/60" : "text-muted-foreground"
                            )}>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "hover:text-accent-foreground block duration-150",
                                                (isHome && !scrolled) ? "text-white hover:text-white/60" : "text-muted-foreground"
                                            )}
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Center: Logo */}
                        <div className="flex-1 flex justify-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2"
                            >
                                <Image
                                    src={(isHome && !scrolled) ? "/logo-white.webp" : "/logo.webp"}
                                    width={64}
                                    height={64}
                                    alt="logo"
                                    className="transition-all duration-300"
                                />
                            </Link>
                        </div>

                        {/* Right: Hamburger on mobile, actions on desktop */}
                        <div className="w-1/3 flex items-center justify-end gap-4">
                            {/* Cart Button - visible on all devices */}
                            <button
                                onClick={openCart}
                                aria-label="Open Cart"
                                className={cn(
                                    "relative cursor-pointer p-2.5 transition-colors duration-300",
                                    (isHome && !scrolled) ? "text-white" : "text-muted-foreground"
                                )}
                            >
                                <ShoppingCart className="size-6" />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-brand text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>

                            {/* Hamburger menu button - only on mobile */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className={cn(
                                    "relative z-20 block cursor-pointer p-2.5 lg:hidden transition-colors duration-300",
                                    (isHome && !scrolled) ? "text-white" : "text-muted-foreground"
                                )}
                            >
                                <Menu className={cn(
                                    "group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200",
                                    (isHome && !scrolled) ? "text-white" : "text-muted-foreground"
                                )} />
                                <X className={cn(
                                    "group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                                    (isHome && !scrolled) ? "text-white" : "text-muted-foreground"
                                )} />
                            </button>
                            {/* Desktop actions */}
                            <div className="absolute top-20 bg-background/50 backdrop-blur-2xl bg- group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:hidden">
                                    <ul className={cn(
                                        "space-y-6 text-base transition-colors duration-300",
                                        (isHome && !scrolled) ? "text-white" : "text-muted-foreground"
                                    )}>
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMenuState(false)}
                                                    className={cn(
                                                        "hover:text-accent-foreground block duration-150",
                                                        (isHome && !scrolled) ? "text-white hover:text-white/60" : "text-muted-foreground"
                                                    )}
                                                >
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:hidden flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0  ">
                                    <Button asChild size="sm" className="w-full" onClick={() => setMenuState(false)}>
                                        <Link href="/contact-us">
                                            <span>Contact Us</span>
                                        </Link>
                                    </Button>
                                </div>

                            </div>
                            <div className="lg:flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit hidden ">
                                <Button asChild size="sm" onClick={() => setMenuState(false)}>
                                    <Link href="/contact-us">
                                        <span>Contact Us</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
