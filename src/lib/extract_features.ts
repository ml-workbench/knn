export default function extract_features( rows:number[][]){
    console.log(rows);
    const extractedRow = rows.map(
        row => row.slice(0,-1)
    );
    return extractedRow;
}