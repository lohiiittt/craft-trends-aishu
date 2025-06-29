import ProductPage from "@/components/product-page"
import type { Metadata } from "next"

// Dummy data for bangles collection (same as in components)
const banglesCollection = [
  { id: 1, title: "PERIYACHI", price: "₹1,299", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, title: "PARVATI", price: "₹1,499", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, title: "AGNEYA", price: "₹999", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, title: "TVARITA", price: "₹1,899", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, title: "USHAS", price: "₹1,599", image: "/placeholder.svg?height=300&width=300" },
  { id: 6, title: "ANUMATI", price: "₹1,299", image: "/placeholder.svg?height=300&width=300" },
  { id: 7, title: "BHUMI", price: "₹2,499", image: "/placeholder.svg?height=300&width=300" },
  { id: 8, title: "KAMAKSHA", price: "₹899", image: "/placeholder.svg?height=300&width=300" },
  { id: 9, title: "KUMARI", price: "₹1,799", image: "/placeholder.svg?height=300&width=300" },
  { id: 10, title: "BHAIRAVI", price: "₹3,999", image: "/placeholder.svg?height=300&width=300" },
  { id: 11, title: "KAUSHIKI", price: "₹2,299", image: "/placeholder.svg?height=300&width=300" },
  { id: 12, title: "RENUKA", price: "₹1,699", image: "/placeholder.svg?height=300&width=300" },
  { id: 13, title: "JYESTHA", price: "₹1,199", image: "/placeholder.svg?height=300&width=300" },
  { id: 14, title: "SINIVALI", price: "₹1,499", image: "/placeholder.svg?height=300&width=300" },
  { id: 15, title: "CHANDI", price: "₹2,099", image: "/placeholder.svg?height=300&width=300" },
]

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = banglesCollection.find((p) => p.id === Number.parseInt(id)) || banglesCollection[0]

  return {
    title: `${product.title} - ${product.price} | Craft Trends by Aishu`,
    description: `Beautiful handcrafted ${product.title} bangle for ${product.price}. Exquisite Rajasthani craftsmanship with traditional designs. Shop authentic Indian jewelry online.`,
    keywords: [
      product.title.toLowerCase(),
      "handcrafted bangles",
      "rajasthani bangles",
      "indian jewelry",
      "traditional bangles",
      "craft trends aishu",
    ],
    openGraph: {
      title: `${product.title} - ${product.price}`,
      description: `Beautiful handcrafted ${product.title} bangle for ${product.price}. Exquisite Rajasthani craftsmanship.`,
      images: [
        {
          url: product.image,
          width: 600,
          height: 600,
          alt: product.title,
        },
      ],
      type: "website",
      siteName: "Craft Trends by Aishu",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - ${product.price}`,
      description: `Beautiful handcrafted ${product.title} bangle for ${product.price}. Exquisite Rajasthani craftsmanship.`,
      images: [product.image],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <ProductPage productId={id} />
}
