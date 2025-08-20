"use client"
import { X, Minus, Plus, ArrowRight, Trash2, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CartDrawer = () => {
    const router = useRouter()
    const {
        isCartOpen,
        closeCart,
        cartItems,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        clearCart
    } = useCart();

    const handleCheckout = () => {
        closeCart();
        router.push("/checkout")
    }

    return (
        <AnimatePresence>
            {isCartOpen && (
                <div className="fixed inset-0 z-50 bg-black/20" onClick={closeCart}>
                    <motion.div
                        initial={{ x: "100%" }}  // Start off-screen (right)
                        animate={{ x: 0 }}       // Slide into view
                        exit={{ x: "100%" }}     // Slide out to the right when closed
                        transition={{ type: "tween", duration: 0.4 }} // Smooth animation duration
                        className="fixed right-0 top-0 h-full w-full max-w-md border-l bg-background shadow-xl overflow-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex h-full flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b px-6 py-4">
                                <h2 className="text-lg font-semibold">Shopping Cart ({getTotalItems()})</h2>
                                <div className="flex items-center gap-2">
                                    {cartItems.length > 0 && (
                                        <Button variant="ghost" size="sm" onClick={clearCart}>
                                            <Trash2 className="h-4 w-4 mr-1" />
                                            Clear
                                        </Button>
                                    )}
                                    <Button variant="ghost" size="sm" onClick={closeCart}>
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-auto px-6 py-4">
                                {cartItems.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-[300px] text-center">
                                        <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
                                        <h3 className="text-lg font-medium">Your cart is empty</h3>
                                        <p className="text-muted-foreground mt-1">Add some items to your cart to see them here.</p>
                                        <Button variant="custom" className="mt-6" onClick={closeCart}>
                                            Continue Shopping
                                        </Button>
                                    </div>
                                ) : (
                                    <ul className="space-y-4">
                                        {cartItems.map(item => (
                                            <li key={item.id || item._id || `item-${item.name}`} className="flex gap-4 py-2">
                                                <div className="h-20 w-20 overflow-hidden rounded-md border bg-muted">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                        width={256}
                                                        height={256}
                                                    />
                                                </div>

                                                <div className="flex flex-1 flex-col">
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm font-medium">{item.name}</h3>
                                                        <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive">
                                                            <X className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                                                    <div className="mt-2 flex items-center justify-between">
                                                        <div className="flex items-center border rounded-md">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 rounded-none rounded-l-md p-0"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            >
                                                                <Minus className="h-3 w-3" />
                                                            </Button>
                                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 rounded-none rounded-r-md p-0"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Footer with checkout */}
                            {cartItems.length > 0 && (
                                <div className="border-t bg-muted/50 px-6 py-4">
                                    <div className="flex flex-col justify-between py-2">
                                        <span className='font-bold text-sm'>NOTE:</span>
                                        <span className="text-sm text-muted-foreground">
                                            {` This cart contains all the items you're interested in. When you proceed, a request for a quotation will be automatically sent to the dealer, who will get in touch with you regarding the pricing and availability. Please note, there are no charges at this stage—this is just the first step in getting your custom quote.`}
                                        </span>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="flex justify-between py-2">
                                        <span className="text-base font-medium">Total Qty</span>
                                        <span className="text-base font-medium">{getTotalItems()} Items</span>
                                    </div>
                                    <Button className="mt-4 w-full" size="lg" onClick={handleCheckout}>
                                        Proceed to Request for Quotation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>

                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
