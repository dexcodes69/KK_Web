export default function BedPreview({ selectedProducts }) {
  const baseImage = "https://cdn.shopify.com/s/files/1/1463/0170/files/mattress-top-bed.jpg?v=66"

  // Define rendering order: flat-sheet should be lowest, duvet highest
  const sortPriority = {
    "flat-sheet": 1,
    "fitted-sheet": 2,
    "pillow": 3,
    "duvet": 4,
  }

  const sortedProducts = [...selectedProducts].sort((a, b) => {
    return (sortPriority[a.id] || 99) - (sortPriority[b.id] || 99)
  })

  return (
    <div className="relative aspect-square max-w-2xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
      {/* Base Image */}
      <img src={baseImage || "/placeholder.svg"} alt="Bed Base" className="w-full h-full object-contain" />

      {/* Render products in proper order */}
      {sortedProducts.map((product) => (
        <svg key={product.id} className="absolute inset-0 w-full h-full" viewBox="0 0 640 640">
          <mask id={`mask-${product.id}`}>
            <image width="640" height="640" href={product.images.mask} />
          </mask>
          <image width="640" height="640" href={product.images.image} mask={`url(#mask-${product.id})`} />
        </svg>
      ))}
    </div>
  )
}
