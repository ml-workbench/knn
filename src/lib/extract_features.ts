export default function extract_features( rows:Number[][]){
    console.log(rows);
    const extractedRow = rows.map(
        row => row.slice(0,-1)
    );
    console.log(extractedRow);
}