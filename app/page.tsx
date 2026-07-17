"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, Truck, CreditCard, Globe, Instagram, Mail, Phone } from "lucide-react";

import heroBanner from "../src/assets/images/hero_banner_1784266109455.jpg";
import suitEmerald from "../src/assets/images/suit_emerald_1784266122169.jpg";
import suitMaroon from "../src/assets/images/suit_maroon_1784266133228.jpg";
import suitIvory from "../src/assets/images/suit_ivory_1784266144424.jpg";

export default function Page() {
  const whatsappNumber = "919086000130";
  
  const createWhatsAppLink = (message: string) => 
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-sm font-medium tracking-widest uppercase hidden md:block">
            Srinagar, Kashmir
          </div>
          <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-tight text-stone-900">
            KASHMIRI DESIGNER SUITS <sup className="text-xs font-normal">®</sup>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium tracking-wide">
            <a href="#collection" className="hover:text-stone-500 transition-colors">Collection</a>
            <a href="#order" className="hover:text-stone-500 transition-colors hidden md:block">How to Order</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-200">
          <Image
            src={heroBanner}
            alt="Kashmiri Designer Suits Campaign"
            fill
            priority
            className="object-cover object-center md:object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-200 tracking-[0.2em] uppercase text-sm mb-6"
          >
            Style for every story
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-10"
          >
            The New Era of <br className="hidden md:block"/> Kashmiri Craft
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a 
              href="#collection" 
              className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-stone-200 transition-colors"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section id="collection" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">Latest Drops</h2>
            <p className="text-stone-500 max-w-md">Contemporary silhouettes featuring authentic Kashmiri hand-embroidery. Designed for the modern wardrobe.</p>
          </div>
          <a 
            href={createWhatsAppLink("Hi! I would like to see the full catalog of your latest drops.")}
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wide uppercase border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors"
          >
            Request Full Catalog
          </a>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Product 1 */}
          <motion.div variants={fadeUp} className="group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 mb-6">
              <Image 
                src={suitEmerald} 
                alt="Emerald Green Embroidered Suit" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <a 
                  href={createWhatsAppLink("Hi, I'm interested in the Emerald Green suit from the Latest Drops.")}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white text-stone-900 px-6 py-3 text-sm font-semibold tracking-wide uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">The Emerald Collection</h3>
                <p className="text-sm text-stone-500">Hand-embroidered · Jewel Tone</p>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div variants={fadeUp} className="group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 mb-6">
              <Image 
                src={suitMaroon} 
                alt="Deep Maroon Embroidered Suit" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <a 
                  href={createWhatsAppLink("Hi, I'm interested in the Deep Maroon suit from the Latest Drops.")}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white text-stone-900 px-6 py-3 text-sm font-semibold tracking-wide uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">Deep Maroon Edition</h3>
                <p className="text-sm text-stone-500">Intricate Detailing · Festive</p>
              </div>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div variants={fadeUp} className="group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 mb-6">
              <Image 
                src={suitIvory} 
                alt="Ivory & Gold Embroidered Suit" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <a 
                  href={createWhatsAppLink("Hi, I'm interested in the Ivory & Gold suit from the Latest Drops.")}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white text-stone-900 px-6 py-3 text-sm font-semibold tracking-wide uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">Ivory & Gold Series</h3>
                <p className="text-sm text-stone-500">Minimalist · Contemporary</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              Kashmiri craftsmanship meeting modern design. Made for the world.
            </h2>
            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              We believe in preserving heritage without compromising on contemporary aesthetics. 
              Every suit is a testament to the meticulous art of Kashmiri embroidery, thoughtfully 
              translated into modern silhouettes for the global wardrobe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-stone-900">Curated For You</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto md:h-[600px]">
          <div className="relative group overflow-hidden bg-stone-200 lg:col-span-2 h-[400px] md:h-auto">
            <Image 
              src={suitEmerald} 
              alt="Festive & Wedding Collection" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">Festive & Wedding</h3>
              <p className="mb-8 opacity-90">Opulent embroidery for special occasions</p>
              <a href={createWhatsAppLink("I'd like to explore the Festive & Wedding collection.")} className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors">Explore</a>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6 lg:col-span-1 h-[800px] md:h-auto">
            <div className="relative group overflow-hidden bg-stone-200 h-full">
              <Image 
                src={suitIvory} 
                alt="Everyday Luxury Collection" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="font-serif text-2xl font-bold mb-6">Everyday Luxury</h3>
                <a href={createWhatsAppLink("I'd like to explore the Everyday Luxury collection.")} className="border border-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors">Explore</a>
              </div>
            </div>
            <div className="relative group overflow-hidden bg-stone-200 h-full">
              <Image 
                src={suitMaroon} 
                alt="Winter Velvets Collection" 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="font-serif text-2xl font-bold mb-6">Winter Velvets</h3>
                <a href={createWhatsAppLink("I'd like to explore the Winter Velvets collection.")} className="border border-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-16 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div className="flex flex-col items-center">
              <ShoppingBag className="w-6 h-6 mb-4 text-stone-700" strokeWidth={1.5} />
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Fixed Rate Pricing</h4>
              <p className="text-stone-500 text-xs">Transparent & fair</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-6 h-6 mb-4 text-stone-700" strokeWidth={1.5} />
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Easy Delivery & Return</h4>
              <p className="text-stone-500 text-xs">Hassle-free process</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="w-6 h-6 mb-4 text-stone-700" strokeWidth={1.5} />
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">COD / Bank Transfer</h4>
              <p className="text-stone-500 text-xs">Flexible payments</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 mb-4 text-stone-700" strokeWidth={1.5} />
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Ships Worldwide</h4>
              <p className="text-stone-500 text-xs">To your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Order */}
      <section id="order" className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">How to Order</h2>
          <p className="text-stone-500">A personalized shopping experience, direct with our team.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-stone-200" />
          
          <div className="relative">
            <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 relative z-10">1</div>
            <h4 className="font-bold mb-2">Browse</h4>
            <p className="text-sm text-stone-500">Explore our latest drops and catalog</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 relative z-10">2</div>
            <h4 className="font-bold mb-2">Connect</h4>
            <p className="text-sm text-stone-500">DM, WhatsApp, or Email us your pick & size</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 relative z-10">3</div>
            <h4 className="font-bold mb-2">Confirm</h4>
            <p className="text-sm text-stone-500">Complete payment via COD or Bank Transfer</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 relative z-10">4</div>
            <h4 className="font-bold mb-2">Delivered</h4>
            <p className="text-sm text-stone-500">Shipped anywhere in the world</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Instagram className="w-10 h-10 mx-auto mb-8 opacity-80" strokeWidth={1.5} />
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Join our community</h2>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto">
            Over 14,000+ followers and thousands of happy customers globally. Follow our journey.
          </p>
          <a 
            href="https://www.instagram.com/kashmiridesignersuits/?hl=en" 
            target="_blank" rel="noopener noreferrer"
            className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors"
          >
            @kashmiridesignersuits
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="font-serif text-xl font-bold text-stone-900">KASHMIRI DESIGNER SUITS <sup className="text-xs font-normal">®</sup></span>
            <span className="text-stone-500">Style for every story</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-stone-600">
            <a href="mailto:kashmiridesignersuits@gmail.com" className="flex items-center gap-2 hover:text-stone-900 transition-colors">
              <Mail className="w-4 h-4" />
              kashmiridesignersuits@gmail.com
            </a>
            <a href={createWhatsAppLink("Hi!")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stone-900 transition-colors">
              <Phone className="w-4 h-4" />
              +91 9086000130
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Kashmiri Designer Suits. All rights reserved.</p>
          <p>Based in Srinagar, Kashmir. Ships Worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
