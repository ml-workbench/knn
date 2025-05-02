import CSVUpload from "@/components/CsvUpload";
import KnnConfiguration from "@/components/KnnConfiguration";

export default function knn() {
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


      <CSVUpload />

    </div>
    <KnnConfiguration taskType=""/>
    </>
  );
}
