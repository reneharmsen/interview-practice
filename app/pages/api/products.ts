import { Product } from "@/lib/definitions";
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const products: Product[] = [
        { id: 1, name: "Product A", price: 10, description: "Description for Product A" },
        { id: 2, name: "Product B", price: 20, description: "Description for Product B"  },
        { id: 3, name: "Product C", price: 30, description: "Description for Product C"  },
    ];
    res.status(200).json(products);
}