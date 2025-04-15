import { sanityFetch } from "@/sanity/lib/fetch"
import { allproducts } from "@/sanity/lib/queries"
import Image from "next/image"

type product = {
  _id: string,
  name: string,
  description: string,
  price: number,
  discountPercentage: number,
  priceWithoutDiscount: number,
  rating: number,
  ratingCount: number,
  tags: string[],
  sizes: string[],  
  imageUrl: string
}

export default async function Home(){
  const products : product[] = await sanityFetch({query: allproducts})

  return( 
    <div>
      <h1>
        Products
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-sm flex flex-col items-center">
            <Image src={product.imageUrl} height={500} width={500} alt={product.name} className="w-60" />
            <h2 className="text-xl font-bold text-center">{product.name}</h2>
            <p className="text-gray-500 text-center">{product.description}</p>
            <p className="text-gray-500 text-center">{product.price}</p>
            <p className="text-gray-500">{product.discountPercentage}</p>
            <p className="text-gray-500">{product.priceWithoutDiscount}</p>
            <p className="text-gray-500">{product.rating}</p>
            <p className="text-gray-500">{product.ratingCount}</p>
            <p className="text-gray-500">{product.tags.join(", ")}</p>
            <p className="text-gray-500">{product.sizes.join(", ")}</p>
          </div>
        ))}
      </div>

    </div>
  )
}