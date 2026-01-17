export default function GrowerHome() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Grower Dashboard</h1>
        <a className="underline text-sm" href="/app">Back to Dashboard</a>
      </header>

      <div className="mt-6 rounded-xl border p-5">
        <p className="text-sm text-gray-600">
          This view will show each grower their fields, status, rankings, and charts.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          (Placeholder – we’ll wire real data after upload parsing.)
        </p>
      </div>
    </main>
  );
}
