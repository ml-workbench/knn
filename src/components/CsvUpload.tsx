"use client";
import extract_features from "@/lib/extract_features";
import parseCsv from "@/lib/parseCsv";
import { useState } from "react";

interface setHeaderProps{
  setHeaders : (h: string []) => void
}
export default function CSVUpload({setHeaders} : setHeaderProps) {
    // const [csvData , setCsvData] = useState<{header:string[] , rowValues:Number[][]}>();
    const [extractedData , setExtractedData] = useState<number[][] | null >(null);

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const parsedData = parseCsv(text);
      const trimmedHeader = parsedData.header.slice(0,-1);
      console.log(trimmedHeader)
      const input_features = extract_features(parsedData.rowValues);
      setExtractedData(input_features);
      setHeaders(trimmedHeader);
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
