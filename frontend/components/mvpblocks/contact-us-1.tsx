"use client"

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Loader2, Mail, Phone } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SparklesCore } from '../ui/sparkles';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Earth from '../ui/globe';

export default function ContactUs1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Perform form submission logic here
      console.log('Form submitted:', { name, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
      <div
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #92C33E, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #92C33E, transparent 70%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl overflow-hidden ">
          <div className="grid md:grid-cols-2">
            <div className="relative p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2"
              >
                <h2 className="mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Contact
                </h2>
                <span className="relative z-10 w-full text-4xl font-bold italic tracking-tight text-primary md:text-5xl">
                  Us
                </span>

                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={500}
                  className="absolute inset-0 top-0 h-24 w-full"
                  particleColor="#92C33E"
                />
              </motion.div>
              <div className='flex flex-col gap-1 mt-2'>
                <div className='flex items-center gap-2 hover:text-custom-text-100 cursor-pointer'>
                  <Mail className='size-3.5 text-custom-text-100' />
                  <p className='text-custom-text-200'>info@vmcgroupuae.com</p>
                </div>
                <div className='flex items-center gap-2 hover:text-custom-text-100  cursor-pointer'>
                  <Phone className='size-3.5 text-custom-text-100' />
                  <p className='text-custom-text-200'>04-2298205 | 052-3113329</p>
                </div>
              </div>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                    className="h-40 resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#92C33E] to-[#92C33E]/5 p-6 text-3xl tracking-tight text-white md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  Have a Question? We’ve Got Answers
                  <div className="absolute -bottom-20 -right-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-bottom-28 md:-right-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      baseColor={[0.573, 0.765, 0.243]}
                      markerColor={[0.573, 0.765, 0.243]}
                      glowColor={[0.573, 0.765, 0.243]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
