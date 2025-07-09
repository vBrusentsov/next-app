'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/fetch-products';

export default function ProductsCSR() {
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(p => {
      setProducts(p);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen bg-sky-50 p-8 text-gray-800">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold text-sky-600 mb-4">🌐 CSR Products</h1>

        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-2">
            {products.map(p => (
              <li key={p.id} className="p-2 bg-sky-100 rounded">{p.name}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
