import { Product } from '@/lib/definitions';


import SearchComponent from './searchComponent';
import Link from 'next/link';


export default async function Page() {

  const data = await getData();

  return (
    
    <div>

      { 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SearchComponent />   
        </div> 
      }
    </div>
  );
}