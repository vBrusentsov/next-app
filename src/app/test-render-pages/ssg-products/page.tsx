import { fetchProducts } from '@/lib/fetch-products';

export default async function Page() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-blue-50 p-8 text-gray-800">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">🪵 SSG Products</h1>
        <ul className="space-y-2">
          {products.map(p => (
            <li key={p.id} className="p-2 bg-blue-100 rounded">{p.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}