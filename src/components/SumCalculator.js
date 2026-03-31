
import React, { useState } from "react";


const SumCalculator=()=>{
    let [sum,setsum]=useState(0);
    function updateChange(e){
        let val=+e.target.value;

        setsum(sum+val);
   }

    return <div>
        <h1>Sum Calculator</h1>
        <input type="number" name="sum"  className="sumbox" onChange={updateChange}></input>
        <p>Sum:{sum}</p>
    </div>
}

export default SumCalculator;