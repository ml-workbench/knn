import { useState } from "react";

export default function parseCsv(csvText:string){
    const lines = csvText.trim().split("\n");
    const header = lines[0].split(",").map( h => h.trim());
    const rows = lines.splice(1,);
    const rowValues = rows.map(
        row => row.split(",").map(Number)
    );

    return {header , rowValues}

}



/*
console.log("CSV Content :\n" , text);
            
            
            var TwoDarrayExceptLastItem = rows.map(row => row.split(",").map(Number)); //changed string to number   
            console.log("2D Array :",TwoDarrayExceptLastItem); 
            // var euclideanDistance = rows.map(row => 
            // {
            //     const values = row.split(",").map(Number)

            //     return Math.sqrt(
            //         values.reduce((sum,item,i) => sum + (item - inputValue[i])**2 , 0)
            //     )
                
            // }
            // 
            //  */