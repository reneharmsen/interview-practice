import { Product } from "@/lib/definitions";

export function GET() {
    const products: Product[] = [
        { id: 1, name: "Product A", price: 10, description: "Description for Product A" },
        { id: 2, name: "Product B", price: 20, description: "Description for Product B"  },
        { id: 3, name: "Product C", price: 30, description: "Description for Product C"  },
    ];
    
    return Response.json({products});
}   