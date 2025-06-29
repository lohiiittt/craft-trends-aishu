"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Phone, ArrowLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaWhatsapp } from "react-icons/fa";

// Dummy data for bangles collection (same as in home-component.tsx)
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
interface ProductPageProps {
  productId: string;
}

export default function ProductPage({ productId }: ProductPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [product, setProduct] = useState<(typeof banglesCollection)[0] | null>(
    null
  );
  useEffect(() => {
    // Find the product by ID
    const foundProduct = banglesCollection.find(
      (p) => p.id === Number.parseInt(productId)
    );
    setProduct(foundProduct || banglesCollection[0]); // Default to first product if not found
  }, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-rose-50">
        Loading...
      </div>
    );
  }

  const createWhatsAppMessage = () => {
    const baseUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://crafttrends.netlify.app/";
    const productUrl = `${baseUrl}/product/${product.id}`;

    const message = `Hi! I'm interested in purchasing this beautiful bangle:

🌟 *${product.title}*
💰 Price: *${product.price}*
🔗 Product Link: ${productUrl}

Could you please provide more details about availability and shipping?

Thank you! 😊`;

    return encodeURIComponent(message);
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
              <DropdownMenuItem className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800">
                <Link href="/" className="w-full">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800">
                <Link href="/#about" className="w-full">
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800">
                <Link href="/#products" className="w-full">
                  Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-rose-50 font-dancing text-rose-800">
                <Link href="/#contact" className="w-full">
                  Contact Us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20">
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-rose-700 hover:text-rose-600 mb-6 font-poppins"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>

          {/* Product Details */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm border border-rose-200">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <h1 className="text-3xl font-bold text-rose-800 mb-4 font-dancing">
                {product.title}
              </h1>
              <p className="text-2xl font-semibold text-rose-700 mb-6 font-poppins">
                {product.price}
              </p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-rose-800 mb-2 font-dancing">
                  Product Description
                </h2>
                <p className="text-rose-700 mb-4 font-poppins">
                  This exquisite {product.title.toLowerCase()} is handcrafted by
                  skilled artisans from Rajasthan. Each piece is unique and
                  showcases the rich cultural heritage of traditional Indian
                  craftsmanship.
                </p>
                <p className="text-rose-700 font-poppins">
                  Made with premium materials and intricate detailing, this
                  bangle is perfect for both everyday wear and special
                  occasions. The vibrant colors and elegant design make it a
                  versatile addition to any jewelry collection.
                </p>
              </div>

              <a
                href={`https://wa.me/916378335633?text=${createWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 rounded-md flex items-center gap-2 w-full justify-center">
                  <FaWhatsapp className="h-5 w-5" />
                  <span className="font-poppins text-lg">
                    Buy Now on WhatsApp
                  </span>
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Care Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-rose-200"
          >
            <h2 className="text-2xl font-bold text-rose-800 mb-4 font-dancing">
              Care Instructions
            </h2>
            <ul className="list-disc pl-5 text-rose-700 font-poppins space-y-2">
              <li>Store in a cool, dry place away from direct sunlight</li>
              <li>Avoid contact with water, perfumes, and chemicals</li>
              <li>Clean with a soft, dry cloth</li>
              <li>Remove before bathing or swimming</li>
              <li>Handle with care to prevent scratches or damage</li>
            </ul>
          </motion.div>

          {/* Delivery Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-rose-200"
          >
            <h2 className="text-2xl font-bold text-rose-800 mb-4 font-dancing">
              Delivery Details
            </h2>
            <div className="text-rose-700 font-poppins space-y-2">
              <p>• Free shipping on all orders within India</p>
              <p>• Standard delivery: 5-7 business days</p>
              <p>• Express delivery available (additional charges may apply)</p>
              <p>• International shipping available to select countries</p>
              <p>
                • All products are carefully packaged to ensure safe delivery
              </p>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="bg-rose-800 text-rose-50 py-8 w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 font-dancing text-center">
                Contact Us
              </h3>
              <div className="text-center mb-6">
                <p className="mb-2 font-poppins">Craft Trends by Aishu</p>
                <p className="mb-2 font-poppins">Jaipur, Rajasthan, India</p>
              </div>

              <div className="flex space-x-6 mb-6">
                <a
                  href="#"
                  className="text-rose-100 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-rose-100 hover:text-white transition-colors"
                >
                  <FaWhatsapp className="h-6 w-6" />
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="#"
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
