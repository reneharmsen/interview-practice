import { Product } from '@/lib/definitions';
import { getData } from '@/lib/data';
import Link from 'next/link';


export default async function Page() {

  const data = await getData();

  return (
    <div className="container mx-auto p-4">
      { <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products?.map((product: Product) =>  (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <Link href={`products/${product.id}`}>
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            </Link>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div> }
    </div>
  );
}