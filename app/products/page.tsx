'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/definitions';

export default function ProductsPage() {

  const [response, setResponse] = useState<string | null>(null);
  const data: Array<Product> = [];

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch('app/api/products'); // Calls your API route
      const data = await res.json();
      setResponse(data.message);
    };
  
    callApi()
  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">

            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}