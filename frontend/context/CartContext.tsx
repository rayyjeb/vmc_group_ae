"use client"
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product } from '@/types/products';
import { toast } from 'sonner';

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'vmc-cart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load cart from localStorage on initial render
    useEffect(() => {
        // Load cart from localStorage on initial render
        try {
            if (typeof window !== 'undefined') {
                const storedCart = localStorage.getItem(CART_STORAGE_KEY);
                if (storedCart) {
                    setCartItems(JSON.parse(storedCart));
                }
            }
        } catch (error) {
            console.error('Failed to parse cart from localStorage:', error);
        }
        setIsInitialized(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        // Save cart to localStorage whenever it changes
        if (isInitialized && typeof window !== 'undefined') {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        }
    }, [cartItems, isInitialized]);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            // Use _id if id is not available
            const productId = product.id || product._id;
            const existingItem = prevItems.find(item =>
                item.id === productId || item._id === productId
            );

            if (existingItem) {
                toast.success(`${product.name} quantity increased`);
                return prevItems.map(item =>
                    (item.id === productId || item._id === productId)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                toast.success(`${product.name} added to your cart`);
                // Ensure the item always has an id field for consistent keys
                return [...prevItems, {
                    ...product,
                    id: productId, // Always set id to ensure consistency
                    quantity: 1
                }];
            }
        });

        openCart();
    };

    const removeFromCart = (productId: string) => {
        setCartItems(prevItems => {
            const itemToRemove = prevItems.find(item => item.id === productId);
            if (itemToRemove) {
                toast.success(`${itemToRemove.name} removed from your cart`);
            }
            return prevItems.filter(item => item.id !== productId);
        });
    };

    const updateQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        toast.success("Cart cleared");
    };

    const getTotalItems = () =>
        cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                openCart,
                closeCart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
