import ProductPage from "@/components/product-page"

export default function Page({ params }: { params: { id: string } }) {
  return <ProductPage productId={params.id} />
}
