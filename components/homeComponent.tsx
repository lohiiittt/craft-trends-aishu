"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Menu, Instagram, Phone, MessageCircle } from "lucide-react";
import { useInView } from "framer-motion";

// Dummy data for bangles collection
const banglesCollection = [
  {
    id: 1,
    title: "PERIYACHI",
    price: "₹1,299",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "PARVATI",
    price: "₹1,499",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "AGNEYA",
    price: "₹999",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    title: "TVARITA",
    price: "₹1,899",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    title: "USHAS",
    price: "₹1,599",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    title: "ANUMATI",
    price: "₹1,299",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    title: "BHUMI",
    price: "₹2,499",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    title: "KAMAKSHA",
    price: "₹899",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    title: "KUMARI",
    price: "₹1,799",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 10,
    title: "BHAIRAVI",
    price: "₹3,999",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 11,
    title: "KAUSHIKI",
    price: "₹2,299",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 12,
    title: "RENUKA",
    price: "₹1,699",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 13,
    title: "JYESTHA",
    price: "₹1,199",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 14,
    title: "SINIVALI",
    price: "₹1,499",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 15,
    title: "CHANDI",
    price: "₹2,099",
    image: "/placeholder.svg?height=300&width=300",
  },
];

// Dummy data for reviews
const reviews = [
  { id: 1, image: "/placeholder.svg?height=400&width=300" },
  { id: 2, image: "/placeholder.svg?height=400&width=300" },
  { id: 3, image: "/placeholder.svg?height=400&width=300" },
  { id: 4, image: "/placeholder.svg?height=400&width=300" },
  { id: 5, image: "/placeholder.svg?height=400&width=300" },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Custom hook for scroll animation
function useScrollAnimation(
  threshold = 0.1
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return [ref, isInView];
}

export default function HomeComponent() {
  const [visibleCards, setVisibleCards] = useState(5);
  const [menuOpen, setMenuOpen] = useState(false);

  // Section refs for navigation
  const aboutRef = useRef<HTMLElement | null>(null);
  const productsRef = useRef<HTMLElement | null>(null);
  const reviewsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // Animation refs
  const [aboutAnimRef, aboutInView] = useScrollAnimation();
  const [productsAnimRef, productsInView] = useScrollAnimation();
  const [reviewsAnimRef, reviewsInView] = useScrollAnimation();
  const [contactAnimRef, contactInView] = useScrollAnimation();

  const loadMoreCards = () => {
    setVisibleCards((prev) => Math.min(prev + 5, banglesCollection.length));
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    setMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-rose-50 overflow-x-hidden w-full">
      {/* Navbar - Fixed to top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Craft Trend by Aishu Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <span className="ml-2 font-dancing text-rose-800 text-lg">
              Craft Trends By Aishu
            </span>
          </Link>

          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-rose-800 hover:bg-rose-100"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border-rose-200 w-48"
            >
              <DropdownMenuItem
                className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800"
                onClick={() => scrollToSection(aboutRef)}
              >
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800"
                onClick={() => scrollToSection(productsRef)}
              >
                Products
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800"
                onClick={() => scrollToSection(reviewsRef)}
              >
                Reviews
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact Us
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-12 relative bg-gradient-to-b from-rose-100 to-rose-50">
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/diwali-seamless-pattern-with-indian-ornament-flower-leaf_87850-187.jpg?uid=R186524750&ga=GA1.1.719821277.1694412611&semt=ais_hybrid&w=900')] bg-cover bg-center opacity-10 blur-[2px]"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-800 mb-6 font-dancing"
              >
                Craft Trends by Aishu
              </motion.h1>

              {/* Hero Image - Add your image here */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <Image
                  src="/images/bg.png"
                  alt="Handcrafted Bangles"
                  width={900}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-rose-700 max-w-2xl mx-auto font-poppins mb-6"
              >
                Exquisite Rajasthani Bangles Handcrafted with Love and Tradition
                , with a vision to craft meaningful, handcrafted bangles that
                capture personal stories and celebrate the moments , memories ,
                and milestones that define life.
              </motion.p>
            </div>
          </section>

          {/* About Us Section */}
          <section ref={aboutRef} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                ref={aboutAnimRef as React.RefObject<HTMLDivElement | null>}
                variants={fadeInUp}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-center mb-8 text-rose-800 font-dancing">
                  About Us
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-rose-700 mb-6 font-poppins">
                    I'm Divyansha , the idea behind these handmade accessories.
                    <br />
                    A Hobby turned into a full-blown passion—and now, a dream
                    come true. Every piece you see here is crafted by me, with
                    love, patience, and a whole lot of sparkle.
                    <br />
                    It all began with one girl, a few beads, and a handmade
                    bangle crafted lovingly for her mother.
                    <br />
                  </p>
                  <p className="text-rose-700 mb-6 font-poppins">
                    What started as a small spark at home has now grown into a
                    powerful flame—led by a team of talented village girls
                    turning tradition into trend.
                    <br />
                    From quiet corners of our homes to customers across the
                    world, our bangles carry stories, dreams, and the spirit of
                    women lifting each other up.
                    <br />
                    Every piece is handmade with heart, patience, and pride.
                    We're more than just a brand—we're a sisterhood, creating
                    beauty together and proving that you don't need a big city
                    to chase big dreams. Thank you for being part of our
                    journey. We can't wait to share our art with you—and the
                    world 🌍💫
                    {/* Welcome to Craft
                    Trends by Aishu, where tradition meets elegance. Our journey
                    began in the vibrant streets of Rajasthan, inspired by the
                    rich cultural heritage and artistic craftsmanship that has
                    been passed down through generations. */}
                  </p>
                  <p className="text-rose-700 mb-6 font-poppins">
                    {/* Each bangle in our collection is meticulously handcrafted by
                    skilled artisans who pour their heart and soul into creating
                    pieces that not only adorn your wrists but also tell stories
                    of our rich cultural heritage. */}
                    I believe that jewelry is more than just an accessory—it's a
                    story, a vibe, and sometimes even a mood! That's why each
                    bangle is unique, just like the person who wears it. Whether
                    you're dressing up for a special day or just want to add a
                    pop of charm to your everyday style, there's something here
                    for you.
                  </p>

                  <p className="text-rose-700 font-poppins">
                    Thank you for supporting handmade , and for being a part of
                    this journey. Your love means the world to this girl with a
                    dream and a pair of pliers 💖
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Collection Section */}
          <section ref={productsRef} className="py-16 bg-rose-50">
            <div className="container mx-auto px-4">
              <motion.div
                ref={productsAnimRef as React.RefObject<HTMLDivElement | null>}
                variants={fadeInUp}
                initial="hidden"
                animate={productsInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-center mb-8 text-rose-800 font-dancing">
                  Our Collection
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {banglesCollection
                    .slice(0, visibleCards)
                    .map((bangle, index) => (
                      <motion.div
                        key={bangle.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link href={`/product/${bangle.id}`}>
                          <Card className="overflow-hidden border-rose-200 hover:shadow-lg hover:border-rose-300 transition-all duration-300 h-full bg-white">
                            <CardContent className="p-0">
                              <Image
                                src={bangle.image || "/placeholder.svg"}
                                alt={bangle.title}
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px]"
                              />
                            </CardContent>
                            <CardFooter className="flex flex-col items-start p-4 bg-white">
                              <h3 className="font-medium text-rose-800 font-semibold">
                                {bangle.title}
                              </h3>
                              <p className="text-rose-600 font-poppins font-semibold">
                                {bangle.price}
                              </p>
                            </CardFooter>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                </div>

                {visibleCards < banglesCollection.length && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={loadMoreCards}
                      className="bg-rose-600 hover:bg-rose-700 text-white font-poppins px-6 py-2"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Reviews Section */}
          <section ref={reviewsRef} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                ref={reviewsAnimRef as React.RefObject<HTMLDivElement | null>}
                variants={fadeInUp}
                initial="hidden"
                animate={reviewsInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-center mb-8 text-rose-800 font-dancing">
                  Customer Reviews
                </h2>

                <Carousel className="max-w-4xl mx-auto">
                  <CarouselContent>
                    {reviews.map((review) => (
                      <CarouselItem
                        key={review.id}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={`Customer Review ${review.id}`}
                            width={300}
                            height={400}
                            className="w-full h-auto rounded-md border border-rose-200"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-rose-800 border-rose-300 hover:bg-rose-50" />
                  <CarouselNext className="text-rose-800 border-rose-300 hover:bg-rose-50" />
                </Carousel>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          ref={contactRef}
          className="bg-rose-800 text-rose-50 py-8 w-full"
        >
          <div className="container mx-auto px-4">
            <motion.div
              ref={contactAnimRef as React.RefObject<HTMLDivElement | null>}
              variants={fadeInUp}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              className="flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-6 font-dancing text-center">
                Contact Us
              </h3>
              <div className="text-center mb-6">
                <p className="mb-2 font-poppins">Craft Trends by Aishu</p>
                <p className="mb-2 font-poppins">aishuscraft@gmail.com</p>
                <p className="mb-2 font-poppins">
                  Kapasan, Chittorgarh, 312202
                </p>
              </div>

              <div className="flex space-x-6 mb-6">
                <a
                  href="https://www.instagram.com/crafttrendby_aishu?igsh=ZXF0emU4dTJmaWUy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-100 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://wa.me/916378335633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-100 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="tel:+916378335633"
                  className="text-rose-100 hover:text-white transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span className="sr-only">Phone</span>
                </a>
              </div>
              <div className="text-center text-rose-200 text-sm">
                <p className="font-poppins">
                  &copy; {new Date().getFullYear()} Craft Trends by Aishu. All
                  rights reserved.
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}
