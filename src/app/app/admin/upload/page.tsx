export default function UploadPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Upload Rapid Soil CSV</h1>
        <a className="underline text-sm" href="/app">Back to Dashboard</a>
      </header>

      <div className="mt-6 rounded-xl border p-5">
        <p className="text-sm text-gray-600">
          This page will upload Calibrated Rapid Soil CSV files.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <input type="file" accept=".csv" />
          <button className="rounded-lg border px-4 py-2 text-sm">
            Upload
          </button>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          (Placeholder – wiring comes next.)
        </p>
      </div>
    </main>
  );
}
