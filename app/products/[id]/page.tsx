import { getProductData } from '@/lib/data'
import { Product } from '@/lib/definitions'
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }) {
  const { id } = params
  const parsedId = Number(id)

  if (isNaN(parsedId)) notFound() 

  const data= await getProductData()
  const product: Product | undefined = data.products.find(p => p.id === parsedId)

  if (!product) notFound() 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{product.id}</h1>
      <p></p>
      {/* Add more product details here */}
    </div>
  );
}

