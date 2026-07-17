"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, Truck, CreditCard, Globe, Instagram, Mail, Phone } from "lucide-react";

import heroBanner from "../src/assets/images/hero_banner_1784266109455.jpg";
import suitEmerald from "../src/assets/images/suit_emerald_1784266122169.jpg";
import suitMaroon from "../src/assets/images/suit_maroon_1784266133228.jpg";
import suitIvory from "../src/assets/images/suit_ivory_1784266144424.jpg";

import igFeed1 from "../src/assets/images/ig_feed_1_1784266453047.jpg";
import igFeed2 from "../src/assets/images/ig_feed_2_1784266466913.jpg";
import igFeed3 from "../src/assets/images/ig_feed_3_1784266480853.jpg";
import igFeed4 from "../src/assets/images/ig_feed_4_1784266491783.jpg";
import campaignLookbook from "../src/assets/images/campaign_lookbook_1784267083945.jpg";
import logo from "../src/assets/logo/image.png";

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
          <div className="hidden md:flex items-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-stone-200 shadow-sm">
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
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
      <section className="relative min-h-screen w-full flex flex-col lg:flex-row pt-20 overflow-hidden bg-stone-50 border-b border-stone-200">
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 -rotate-90 hidden 2xl:block text-stone-200 text-[12rem] font-serif font-bold opacity-30 whitespace-nowrap pointer-events-none z-0 select-none">
          KASHMIRI
        </div>

        {/* Left Side: Typography */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:pl-24 lg:pr-8 py-16 lg:py-0 relative z-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-stone-900"></div>
            <span className="text-stone-900 tracking-[0.3em] uppercase text-xs font-semibold">
              Kashmiri Designer Suits
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-[6.5rem] xl:text-[8rem] text-stone-900 font-bold leading-[0.9] tracking-tight mb-8 relative z-20"
          >
            The New<br />
            Era Of<br />
            <span className="italic font-light text-stone-500">Craft.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-500 max-w-sm mb-12 text-lg leading-relaxed"
          >
            Style for every story. Discover contemporary silhouettes featuring authentic Kashmiri hand-embroidery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
          >
            <a 
              href="#collection" 
              className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-stone-800 transition-colors w-full sm:w-auto"
            >
              Explore Collection
            </a>
            <a 
              href={createWhatsAppLink("Hi! I would like to order a designer suit.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-stone-200 text-stone-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-stone-900 hover:bg-stone-100 transition-colors w-full sm:w-auto"
            >
              Custom Order
            </a>
          </motion.div>
        </div>
        
        {/* Right Side: Imagery */}
        <div className="flex-[1.2] relative h-[60vh] lg:h-auto w-full order-first lg:order-last flex items-center justify-center p-6 lg:p-12 lg:pr-24 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full min-h-[500px] max-h-[850px] bg-stone-200 overflow-hidden shadow-sm"
          >
            <Image
              src={heroBanner}
              alt="Kashmiri Designer Suits Campaign"
              fill
              priority
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Overlapping secondary image for editorial feel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-12 left-0 lg:-left-12 xl:-left-24 w-40 h-56 md:w-56 md:h-72 border-[8px] border-stone-50 bg-stone-200 overflow-hidden hidden sm:block shadow-xl z-30"
          >
             <Image
              src={igFeed1}
              alt="Embroidery Detail"
              fill
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
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

      {/* The Artisanal Process */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-stone-200">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full bg-stone-200 overflow-hidden"
            >
              <Image
                src={igFeed1}
                alt="Intricate Kashmiri Embroidery"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">The Art of Detail</h2>
              <p className="text-stone-500 text-lg leading-relaxed mb-8">
                Every thread tells a story. From the delicate needlework of <span className="text-stone-900 font-medium">Sozni</span> to the regal metallic allure of <span className="text-stone-900 font-medium">Tilla</span>, and the bold, colorful strokes of <span className="text-stone-900 font-medium">Aari</span>—our pieces celebrate the centuries-old legacy of Kashmiri artisans.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-stone-300 font-serif text-2xl font-bold">01</span>
                  <div>
                    <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-1">Authentic Craft</h4>
                    <p className="text-stone-500 text-sm">Handcrafted locally in Srinagar, ensuring traditional techniques remain untouched by fast fashion.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-stone-300 font-serif text-2xl font-bold">02</span>
                  <div>
                    <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-1">Modern Silhouettes</h4>
                    <p className="text-stone-500 text-sm">Heritage embroidery adapted onto clean, contemporary cuts suitable for any global setting.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Lookbook / Campaign */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={campaignLookbook}
            alt="Season Campaign"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/30" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-white tracking-[0.3em] uppercase text-xs font-bold mb-4 block drop-shadow-md">Autumn / Winter</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight drop-shadow-lg">The Valley Edit</h2>
        </motion.div>
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

      {/* Social Proof & Instagram Feed */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-3">#KashmiriDesignerSuits</h2>
              <p className="text-stone-500">Over 14,000+ followers and thousands of happy customers globally.</p>
            </div>
            <a 
              href="https://www.instagram.com/kashmiridesignersuits/?hl=en" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-stone-900 text-stone-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Follow Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[igFeed1, igFeed2, igFeed3, igFeed4].map((img, idx) => (
              <a 
                key={idx}
                href="https://www.instagram.com/kashmiridesignersuits/?hl=en"
                target="_blank" rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-stone-100 block"
              >
                <Image 
                  src={img} 
                  alt={`Instagram feed image ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-stone-900 text-white border-t border-stone-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-4">The Inner Circle</h2>
            <p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Join our exclusive mailing list for early access to new drops, limited edition pieces, and behind-the-scenes stories from our artisans.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent border border-stone-700 text-white px-6 py-3 focus:outline-none focus:border-stone-400 transition-colors placeholder:text-stone-600"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-stone-900 px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-stone-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
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
