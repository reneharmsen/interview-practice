import Link from 'next/link';
import { Product } from '@/lib/definitions';

async function getData(): Promise<{ products: Product[] }> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products`, {
    next: { revalidate: 1000 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  const { products } = await getData();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: Product) =>  (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <Link href={`products/${product.id}`}>
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            </Link>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}