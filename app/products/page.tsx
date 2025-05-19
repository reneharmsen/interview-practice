'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { Product } from '@/lib/definitions';

const fetcher = (url: string) => fetch(url)
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  });

export default function ProductsPage() {
  const { data: products, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  if (error) return <div>Failed to load products</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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