import type { Metadata, ResolvingMetadata } from 'next'
import { getProductData } from '@/lib/data'
import { Product } from '@/lib/definitions'
import { notFound } from 'next/navigation'
import { ProductStock } from '@/app/components/productStock'

import { Suspense } from 'react'

export const dynamicParams = true;

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return [{id:"1"}, {id:"2"}, {id:"3"}]
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params

  return {
    title: id
  }
}

export default async function ProductPage({ params }: Props) {
  const id  = (await params).id
  const parsedId = Number(id)

  if (isNaN(parsedId)) notFound() 

  const data= await getProductData()
  const product: Product | undefined = data.products.find(p => p.id === parsedId)

  if (!product) notFound() 

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      
      {/* <Suspense fallback={<p>... checking stock ...</p>}>git pull
        <ProductStock/>
      </Suspense>       */}

      <p>This page was (pre)rendered at {new Date().toLocaleTimeString()}.</p>
      ----------------
      <p>dynamicParams: {dynamicParams ? "true" : "false"}</p>
    </div>
  );
}

