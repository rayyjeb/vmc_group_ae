"use client"
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import emailjs from "emailjs-com"
import * as z from "zod";
import {
    AlertCircle,
    CheckCircle2,
    MapPin,
    User,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
const CheckoutPage = () => {
    const { cartItems, clearCart, getTotalItems } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const navigate = useRouter();
    const { toast } = useToast();
    const formSchema = z.object({
        companyName: z.string().min(1, "Company Name is required"),
        firstName: z.string().min(1, "First Name is required"),
        email: z.string().email("Invalid email"),
        phone: z.string().min(8, "Phone number is required"),
        address: z.string().min(5, "Street Address is required"),
        city: z.string().min(2, "City is required"),
        state: z.string().min(2, "State is required"),
        postalCode: z.string().min(4, "Postal Code is required"),
        country: z.string().min(2, "Country is required"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        document.title = "Checkout | VMC Group"
    }, []);

    // If cart is empty, redirect to homepage
    if (cartItems.length === 0 && !isComplete) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 container mx-auto px-4 py-12 pt-32">
                    <div className="max-w-lg mx-auto text-center py-12">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                        <p className="text-muted-foreground mb-6">
                            Add some items to your cart before proceeding to checkout.
                        </p>
                        <Button onClick={() => navigate.push('/products')}>
                            Browse Producrs
                        </Button>
                    </div>
                </main>
            </div>
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        setIsSubmitting(true);
        if (Object.keys(data).length === 0) {
            console.error("No data to submit");
            return;
        }
        // Prepare email data
        const emailData = {
            companyName: data.companyName,
            firstName: data.firstName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode,
            country: data.country,
            // Update cartItems to generate a table row for each item
            cartItems: cartItems.map((item, index) =>
                `<tr><td>${index + 1}</td><td>${item.name}</td><td>${item.quantity}</td></tr>`
            ).join(''),

            total: getTotalItems(),
        };
        // Send email using EmailJS with the updated cartItems data
        emailjs.send(
            'service_ra5q1dg',
            'template_sjfyfzz',
            emailData,
            'MlcjcWPprc-EiZMsC'
        )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setIsSubmitting(false);
                    setIsComplete(true);
                    clearCart();
                    if (typeof window !== 'undefined') {
                        window.scrollTo(0, 0);
                    }
                },
                (error) => {
                    console.log('FAILED...', error);
                    setIsSubmitting(false);
                    toast({
                        title: "Error",
                        description: "Failed to submit order. Please try again.",
                        variant: "destructive",
                    });
                }
            );
    };


    if (isComplete) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 container mx-auto px-4 py-12">
                    <div className="max-w-lg mx-auto text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
                        <p className="text-muted-foreground mb-8">
                            Thank you for your Enquiry. Your request has been received and is being processed.
                            You will receive a confirmation email shortly.
                        </p>
                        <div className="py-4 px-6 bg-muted rounded-lg text-left mb-8">
                            <h3 className="font-medium mb-2">Order Details</h3>
                            <p className="text-sm text-muted-foreground">Order #: {Math.floor(Math.random() * 10000000)}</p>
                            <p className="text-sm text-muted-foreground">Date: {new Date().toLocaleDateString()}</p>
                        </div>
                        <Button onClick={() => navigate.push('/')} className="mr-4">
                            Return Home
                        </Button>
                        <Button variant="link" onClick={() => navigate.push('/products')}>
                            Continue Shopping
                        </Button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 container mx-auto px-4 py-12 pt-28 font-Urbanist">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Order Summary - Right column */}
                        <div className="lg:col-span-1 order-first lg:order-last">
                            <div className="border rounded-lg p-6 bg-card sticky top-24">
                                <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                                <div className="space-y-4 mb-4">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex justify-between">
                                            <div className="flex-1">
                                                <span className="font-medium">{item.name}</span>
                                            </div>
                                            <span className="text-muted-foreground ml-2">×{item.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                <Separator className="my-4" />

                                <div className="space-y-2">
                                    <div className="flex flex-col justify-between py-2">
                                        <span className='font-bold text-sm'>NOTE:</span>
                                        <span className="text-sm text-muted-foreground">
                                            This cart contains all the items you&apos;re interested in. When you proceed, a request for a quotation will be automatically sent to the dealer, who will get in touch with you regarding the pricing and availability. Please note, there are no charges at this stage—this is just the first step in getting your custom quote.
                                        </span>
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>{getTotalItems()} Units</span>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Form - Left column */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-8">
                                    {/* Contact Information */}
                                    <div>
                                        <h2 className="text-lg font-medium mb-4 flex items-center">
                                            <User className="h-5 w-5 mr-2" />
                                            Contact Information
                                        </h2>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="space-y-2 sm:col-span-2">
                                                <Label htmlFor="phone">Company Name  <span className="text-red-500">*</span></Label>
                                                <Input {...register("companyName")} className={errors.companyName ? "border-red-500" : ""} />
                                                {typeof errors.companyName?.message === "string" && (
                                                    <p className="text-red-500 text-sm">{errors.companyName.message as string}</p>
                                                )}

                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name  <span className="text-red-500">*</span></Label>
                                                <Input type="firstName" {...register("firstName")} className={errors.firstName && "border-red-500"} />
                                                {errors.firstName && <p className="text-red-500 text-sm">{String(errors.firstName.message)}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Email *</Label>
                                                <Input type="email" {...register("email")} className={errors.email && "border-red-500"} />
                                                {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Phone *</Label>
                                                <Input {...register("phone")} className={errors.phone && "border-red-500"} />
                                                {errors.phone && <p className="text-red-500 text-sm">{String(errors.phone.message)}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shipping Information */}
                                    <div>
                                        <h2 className="text-lg font-medium mb-4 flex items-center">
                                            <MapPin className="h-5 w-5 mr-2" />
                                            Address
                                        </h2>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label>Street Address *</Label>
                                                <Input {...register("address")} className={errors.address && "border-red-500"} />
                                                {errors.address && <p className="text-red-500 text-sm">{String(errors.address.message)}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                                                <Input id="address2" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>City *</Label>
                                                <Input {...register("city")} className={errors.city && "border-red-500"} />
                                                {errors.city && <p className="text-red-500 text-sm">{String(errors.city.message)}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label>State *</Label>
                                                <Input {...register("state")} className={errors.state && "border-red-500"} />
                                                {errors.state && <p className="text-red-500 text-sm">{String(errors.state.message)}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="postalCode">Postal Code  <span className="text-red-500">*</span></Label>
                                                <Input {...register("postalCode")} className={errors.postalCode && "border-red-500"} />
                                                {errors.postalCode && <p className="text-red-500 text-sm">{String(errors.postalCode.message)}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="country">Country  <span className="text-red-500">*</span></Label>
                                                <Input {...register("country")} className={errors.country && "border-red-500"} />
                                                {errors.country && <p className="text-red-500 text-sm">{String(errors.country.message)}</p>}
                                            </div>
                                        </div>
                                    </div>


                                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                                        {isSubmitting ? "Processing..." : "Place Request"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutPage;
