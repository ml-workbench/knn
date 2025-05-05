"use client";
import extract_features from "@/lib/extract_features";
import parseCsv from "@/lib/parseCsv";
import { read } from "fs";
import { useState } from "react";

export default function CSVUpload() {
    // const [csvData , setCsvData] = useState<{header:string[] , rowValues:Number[][]}>();

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const parsedData = parseCsv(text);
      const input_features = extract_features(parsedData.rowValues);
      const 

    };

    reader.readAsText(file);
  };

  return (
    <div className="border p-4 rounded max-w-md mx-auto">
      <label className="block mb-2 font-semibold">Upload CSV File</label>
      <input type="file" accept=".csv" onChange={handleCsvUpload} />
    </div>
  );
}
