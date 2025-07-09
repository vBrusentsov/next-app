export const revalidate = 10;

function getData() {
  return { time: new Date().toISOString() };
}

export default function ISRPage() {
  const data = getData();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8 text-gray-800">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-700">⏳ ISR Render</h1>
        <p>Generated and revalidated every 10 seconds:</p>
        <pre className="mt-2 p-2 bg-green-100 rounded font-mono text-sm">{data.time}</pre>
        <p className="mt-6 text-sm text-gray-500">Page is statically generated and updated periodically.</p>
      </div>
    </main>
  );
}
