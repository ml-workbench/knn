interface TaskProps {
  taskType: string;
}
export default function KnnConfiguration({ taskType }: TaskProps) {
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
            <label htmlFor="task-type" className="block font-semibold text-gray-800 mb-1">
              Task Type
            </label>
            <select id="task-type"
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
            <label htmlFor="task-type" className="block font-semibold text-gray-800 mb-1">
              Target Column (Output Variable)
            </label>
            <select id="task-type"
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
    </div>
  );
}
