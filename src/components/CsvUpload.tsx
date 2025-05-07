"use client";
import parseCsv from "@/lib/parseCsv";

interface setHeaderProps{
  setHeaders : (h: string []) => void
  setRows : (h: number [][]) => void
}
export default function CSVUpload({setHeaders,setRows} : setHeaderProps) {
  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string; //simple text string 
      const unCutParsedData = parseCsv(text); //rows parsed into numbers     //header1 , header 2 , header3 , header4
      console.log(unCutParsedData)

      setHeaders(unCutParsedData.unCutHeader)
      setRows(unCutParsedData.unCutRowValues)
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
