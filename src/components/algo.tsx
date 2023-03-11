function math(selectSet: string, onerepmax: number, tworepmax: number, threerepmax: number) {
    const RMs = [0,0,0,0,0,0,0,0,0,0,0]
    const multip= [1.0, 0.94, 0.91, 0.883, 0.86, 0.833, 0.803, 0.777, 0.753, 0.733, 0.7]
    const sets= [selectSet == "Set of 1", selectSet == "Set of 2", selectSet == "Set of 3", selectSet == "Set of 4", selectSet == "Set of 5", selectSet == "Set of 6", selectSet == "Set of 7", selectSet == "Set of 8"]
    const RPE= [10,9,8,7,6,5]
    const x:number = 0
    
    if(onerepmax == 0 && tworepmax != 0)
        RMs[0] = tworepmax / multip[1] 
    else if(onerepmax == 0 && tworepmax == 0 && threerepmax != 0)
        RMs[0] = threerepmax / multip[2] 
    else if(tworepmax != 0)
        RMs[1] = tworepmax
    else if(threerepmax != 0)
        RMs[2] = threerepmax
    else if (threerepmax == 0)
        for (let x=0; x < 11; x++) {
            RMs[x] = (RMs[0])*(multip[x])
            if(sets[1] == true)
                console.log(RMs[x])
                return (
                    <header>
                        <div>RPE10 = {RMs[x]}</div>
                        <br />
                        <div>RPE9 = {RMs[x+1]}</div>
                        <br />
                        <div>RPE8 = {RMs[x+2]}</div>
                        <br />
                        <div>RPE7 = {RMs[x+3]}</div>
                        <br />
                        <div>RPE6 = {RMs[x+4]}</div>
                        <br />
                        <div>RPE5 = {RMs[x+5]}</div>
                    </header>
                );
        };
        
}
export default math