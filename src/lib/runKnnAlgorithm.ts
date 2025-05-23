export default function runKnnAlgorithm(kValue : number , inputVector : number[],trainingData:number[][]){

    //step 1: calculate ED
    const calculateEuclideanDistance = (row : number[] , inputVector: number[]): number =>{
        let sum = 0;
        for(let i=0; i<row.length-1; i++){
            sum += Math.pow(row[i] - inputVector[i],2)
        }
        return Math.sqrt(sum)
    }

    //step 2: calculate distance between inputVector and each TrainingData
    const distances = trainingData.map((row) => {
        return {
            row,
            distance : calculateEuclideanDistance(row,inputVector)
        }
    })
    
    distances.sort((a,b) => a.distance - b.distance);
    
    const kNearest = distances.slice(0,kValue);
    
    const targetValue = kNearest.reduce((sum,item) => sum + item.row[item.row.length -1], 0) / kNearest.length;
    return targetValue
    
}