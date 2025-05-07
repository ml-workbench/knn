export default function runKnnAlgorithm(kValue : number , inputVector : number[],trainingData:number[][]){
    console.log("Euclidean called ",inputVector,"\n\n\n\n\n",trainingData)

    //step 1: calculate ED
    const calculateEuclideanDistance = (row : number[] , inputVector: number[]): number =>{
        let sum = 0;
        for(let i=0; i<row.length-1; i++){
            sum += Math.pow(row[i] - inputVector[i],2)
        }
        console.log(sum)
        return Math.sqrt(sum)
    }

    //step 2: calculate distance between inputVector and each TrainingData
    const distances = trainingData.map((row) => {
        return {
            row,
            distance : calculateEuclideanDistance(row,inputVector)
        }
    })

    //step 3: find the k closet rows
    const label = distances.map(
        (rowData) => {
            rowData.distance
        }
    )

    
}