export default function CSVUpload(){
    return(
        <div className="border p-4 rounded max-w-md mx-auto">
            <label className="block mb-2 font-semibold">Upload CSV File</label>
            <input type="file" accept=".csv" />
        </div>
    );
}