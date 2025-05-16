export default function ProductPage({ params }) {
  const { id } = params;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Add more product details here */}
    </div>
  );
}