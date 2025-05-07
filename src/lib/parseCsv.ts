import { useState } from "react";

export default function parseCsv(csvText:string){
    const lines = csvText.trim().split("\n");
    const unCutHeader = lines[0].split(",").map( h => h.trim());
    const rows = lines.splice(1,);
    const unCutRowValues = rows.map(
        row => row.split(",").map(val => Number(val.trim()))
    );

    console.log("uncut row values " + unCutRowValues+"\n\n\n")

    return {unCutHeader , unCutRowValues}

}
