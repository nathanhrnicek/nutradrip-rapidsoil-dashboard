"use client";

import { useMemo, useState } from "react";


export default function UploadPage() {
    const [fileName, setFileName] = useState<string>("");
  const [rows, setRows] = useState<Record<string, string>[]>([]);

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
          <input
  type="file"
  accept=".csv"
  onChange={async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    setFileName(f.name);

    const text = await f.text();
    const lines = text.split(/\r?\n/).filter(Boolean);

    if (lines.length < 2) {
      setRows([]);
      return;
    }

    const headers = lines[0].split(",").map((h) => h.trim());
    const preview = lines.slice(1, 11).map((line) => {
      const values = line.split(",");
      const obj: Record<string, string> = {};
      headers.forEach((h, i) => (obj[h] = (values[i] ?? "").trim()));
      return obj;
    });

    setRows(preview);
  }}
/>

          <button className="rounded-lg border px-4 py-2 text-sm">
            Upload
          </button>
          <button
  type="button"
  className="rounded-lg border px-4 py-2 text-sm"
  onClick={() => {
    setFileName("");
    setRows([]);
  }}
>
  Clear
</button>

        </div>

        <p className="mt-3 text-xs text-gray-500">
          {fileName && (
  <div className="mt-6">
    <div className="text-sm text-gray-400">Selected file</div>
    <div className="mt-1 text-sm">{fileName}</div>
  </div>
)}

{rows.length > 0 && (
  <div className="mt-6">
    <div className="text-sm text-gray-400">Preview (first {rows.length} rows)</div>

    <div className="mt-3 overflow-auto rounded-xl border">
      <table className="min-w-full text-sm">
        <thead className="bg-black/20">
          <tr>
            {Object.keys(rows[0]).map((k) => (
              <th key={k} className="px-3 py-2 text-left font-semibold whitespace-nowrap">
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} className="border-t border-white/10">
              {Object.keys(rows[0]).map((k) => (
                <td key={k} className="px-3 py-2 whitespace-nowrap">
                  {r[k]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

          (Placeholder – wiring comes next.)
        </p>
      </div>
    </main>
  );
}
