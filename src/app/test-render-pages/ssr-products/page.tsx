export const dynamic = 'force-dynamic';

function getData() {
  return { time: new Date().toISOString() };
}

export default function SSRPage() {
  const data = getData();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8 text-gray-800">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">⚡ SSR Render</h1>
        <p>Generated on each request:</p>
        <pre className="mt-2 p-2 bg-purple-100 rounded font-mono text-sm">{data.time}</pre>
        <p className="mt-6 text-sm text-gray-500">Page is rendered dynamically on server per request.</p>
      </div>
    </main>
  );
}
