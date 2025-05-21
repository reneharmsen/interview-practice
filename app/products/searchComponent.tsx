'use client';

import { getData } from '@/lib/data';
import { useState } from 'react';

export default function SearchComponent({query}: {query: string}) {
    

    return (
        <div className="flex items-center justify-center mt-4">
            <input
                type="text"
                placeholder="Search products..."
                className="border rounded-lg p-2 w-full max-w-md"
                onChange={(e) => {
                    // handle search term change
                }}
            />

        </div>
    );
}