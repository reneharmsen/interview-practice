'use client'

import { getData } from '@/lib/data'
import { Product } from '@/lib/definitions'
import { useEffect, useState } from 'react'

export default function SearchComponent({ query = '' }: { query?: string }) {
    const [value, setValue] = useState(query)
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getData()
                setProducts(data.products)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch products')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase())
    )

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="flex items-center justify-center mt-4">
                <input
                    type="text"
                    value={value}
                    placeholder="Search products..."
                    className="border rounded-lg p-2 w-full max-w-md"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>    
            
            {filteredProducts.length > 0 ? (
                <ul className="mt-4 space-y-2">
                    {filteredProducts.map((product) => (
                        <li 
                            key={product.id}
                            className="border rounded-lg p-4 hover:bg-gray-50"
                        >
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-lg font-bold mt-2">
                                ${product.price.toFixed(2)}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center mt-4 text-gray-600">
                    No products found matching your search.
                </p>
            )}
        </div>
    )
}