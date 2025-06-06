import { Product } from '@/lib/definitions';

export async function getProductData(): Promise<{ products: Product[] }> {
    const products: Product[] = [
        { id: 1, name: "Product 1", price: 10, description: "Description for Product 1" },
        { id: 2, name: "Product 2", price: 20, description: "Description for Product 2"  },
        { id: 3, name: "Product 3", price: 30, description: "Description for Product 3"  },
        { id: 4, name: "Product 4", price: 10, description: "Description for Product 4" },
        { id: 5, name: "Product 5", price: 20, description: "Description for Product 5"  },
        { id: 6, name: "Product 6", price: 30, description: "Description for Product 6"  }, 
    ];

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, 1000);
    });

    return { products };
}
    