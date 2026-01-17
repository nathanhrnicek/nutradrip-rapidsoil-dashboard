export default function AppHome() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">NutraDrip Rapid Soil Dashboard</h1>
        <nav className="flex gap-4 text-sm">
          <a className="underline" href="/app/admin/upload">Upload</a>
          <a className="underline" href="/app/grower">Grower View</a>
        </nav>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4">
          <div className="text-sm text-gray-500">Fields</div>
          <div className="mt-2 text-3xl font-semibold">—</div>
          <div className="mt-1 text-sm text-gray-600">Populated after CSV ingestion</div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-gray-500">Needs Attention</div>
          <div className="mt-2 text-3xl font-semibold">—</div>
          <div className="mt-1 text-sm text-gray-600">Auto-ranked from Rapid Soils</div>
        </div>

        <div className="rounded-xl border p-4">
          <div className="text-sm text-gray-500">Last Upload</div>
          <div className="mt-2 text-3xl font-semibold">—</div>
          <div className="mt-1 text-sm text-gray-600">Shows most recent batch</div>
        </div>
      </section>

      <section className="mt-10 rounded-xl border p-5">
        <h2 className="text-lg font-semibold">What this dashboard will do</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
          <li>Upload Calibrated Rapid Soil CSVs</li>
          <li>Auto-match fields and detect DI vs Irrigated pairs</li>
          <li>Show clean rankings + readable charts (Cl separated)</li>
          <li>Support grower access (later)</li>
        </ul>
      </section>
    </main>
  );
}
