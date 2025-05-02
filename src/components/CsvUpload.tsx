"use client";
import { read } from "fs";

export default function CSVUpload(){    

    const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(!file) return;

        const reader = new FileReader();
        reader.onload = () =>{
            const text = reader.result as string;
            console.log("CSV Content :\n" , text);
            
            const lines = text.split("\n");
            console.log("Lines = ",lines);

            const header = lines[0].split(",").map(h => h.trim());
            console.log("Column = ",header);
            
            const rows = lines.slice(1.200)
            console.log("Rows = ",rows);
            
            
        }
        
        reader.readAsText(file);
    }

    
    return(
        <div className="border p-4 rounded max-w-md mx-auto">
            <label className="block mb-2 font-semibold">Upload CSV File</label>
            <input type="file" accept=".csv" onChange={handleCsvUpload}/>
        </div>
    );
}