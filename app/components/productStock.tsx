export const ProductStock = async() => {
    await new Promise ((resolve) => setTimeout(resolve, 10))
    return <div>Product is in stock!</div>
}