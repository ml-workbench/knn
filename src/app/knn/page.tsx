"use client";
import CSVUpload from "@/components/CsvUpload";
import KnnConfiguration from "@/components/KnnConfiguration";
import { useState } from "react";

export default function Knn() {
  const [Header , setHeader ] = useState<string[]>([]);
  const [Rows, setRows] = useState<number [][]>([]);
    const [kValue, setKValue] = useState(7); // default value
  

  return (
    <>
    <div className="text-center py-24 border border-black bg-white text-black">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">KNN Regression Tool</h2>
        <p className="text-gray-700">
          Upload your dataset in CSV format and use the K-Nearest Neighbors
          algorithm to make predictions. This tool currently supports regression
          only.
        </p>
      </div>
      <CSVUpload setHeaders={setHeader} setRows={setRows}/>
    </div>
    {Header.length > 0 && (
      <KnnConfiguration taskType={"regression"}Headers={Header} kValue={kValue} trainingData={Rows}/>
    )}
    
    </>
  );
}
