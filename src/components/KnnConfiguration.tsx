"use client";
import Button from "./Button";
import React, { useEffect, useState } from "react";

interface TaskProps {
  taskType: string;
  headers: string[];
}
export default function KnnConfiguration({ taskType, headers }: TaskProps) {
  const [kValue, setKValue] = useState(7); // default value
  const [formData, setFormData] = useState<string[]>([]);

  useEffect(() => {
    setFormData(headers.map(() => "")); //initialize empty formData string array on load of the component
  }, [headers]);

  const handleChange = (index: number, value: string) => {
    const updated = [...formData];
    updated[index] = value;
    setFormData(updated);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericInput = formData.map(Number);
    console.log(numericInput);
    console.log("K value:", kValue);
  };
  return (
    <div className="my-2 py-2 border border-black bg-white text-black shadow-none">
      <div className="flex items-center gap-2 text-lg font-bold tracking-wide">
        <div className="h-5 w-5" />
        KNN Configuration
      </div>

      <div className="text-sm px-7 text-gray-700">
        Configure the parameters for the K-Nearest Neighbors algorithm
      </div>

      {/* Select Task Part */}
      <div className="px-7 my-4">
        <div className="grid gap-6 ">
          <div className="grid gap-2">
            <label
              htmlFor="task-type"
              className="block font-semibold text-gray-800 mb-1"
            >
              Task Type
            </label>
            <select
              id="task-type"
              name="task-type"
              value={taskType}
              className="block w-full px-4 py-2 border border-gray-300 bg-white text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Task Type</option>
              <option value="classification">Classification</option>
              <option value="regression">Regression</option>
            </select>
          </div>

          {/* Select Target Column Part */}
          <div className="grid gap-2">
            <label
              htmlFor="task-type"
              className="block font-semibold text-gray-800 mb-1"
            >
              Target Column (Output Variable)
            </label>
            <select
              id="task-type"
              name="task-type"
              value={taskType}
              className="block w-full px-4 py-2 border border-gray-300 bg-white text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Column</option>
              <option value="dynamic">dynamic</option>
              <option value="dynamic">dynamic</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-2 mx-6">
        <div className="mt-4">
          <label className="block font-semibold text-gray-800 mb-1">
            K value (Number of Neighbors) {kValue}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={kValue}
            onChange={(e) => setKValue(Number(e.target.value))}
            className="w-[40rem] accent-black mx-2"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-4 rounded-md max-w-md ml-0 mt-4"
        >
          <h2 className="text-lg font-semibold mb-4">Enter Test Input</h2>

          <div className="space-y-3">
            {headers.map((header, index) => (
              <div key={index} className="flex items-center gap-2">
                <label className="w-28 text-gray-700">{header}:</label>
                <input
                  type="number"
                  value={formData[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded"
                  required
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Run KNN
          </button>
        </form>
      </div>
    </div>
  );
}
