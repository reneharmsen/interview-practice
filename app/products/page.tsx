
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/definitions';

export  default function ProductsPage() {


  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch('/api/products')
        .then(res=>res.json())
        .then(json=> { 
          setResponse(json.map((p: Product) => {
            return {
              id: p.id,
              name: p.name,
              description: p.description,
              price: p.price
            }
          }));
          setLoading(false);
  });

  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl fon t-bold mb-6">Our Products</h1>
      {
       !loading &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow-md">
            <Link href={"products/" + p.id}> <h2 className="text-xl font-semibold mt-2">{p.name}</h2></Link>
            <p className="text-gray-600">{p.description}</p>

            <p className="text-lg font-bold mt-2">${p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      }
    </div>
  );
}