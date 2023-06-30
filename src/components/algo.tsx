function algo(onerepmax: any, tworepmax: any, threerepmax: any, fourrepmax: any, fiverepmax: any) {
    const multip = [1.0, 0.94, 0.91, 0.883, 0.86, 0.833, 0.803, 0.777, 0.753, 0.733, 0.7, 0.67, 0.65]
    let RMs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    RMs[0] = onerepmax
    for (let i = 0; i < multip.length; i++)
            RMs[i] = (((RMs[0]) * multip[i]))
    


    if (onerepmax == 0 && tworepmax != 0) {
        RMs[0] = tworepmax / multip[1]
        for (let i = 0; i < multip.length; i++)
            RMs[i] = (((RMs[0]) * multip[i]))
    }
    if (onerepmax == 0 && tworepmax == 0 && threerepmax != 0) {
        RMs[0] = threerepmax / multip[2]
        for (let i = 0; i < multip.length; i++)
            RMs[i] = (((RMs[0]) * multip[i]))
    }
    if (onerepmax == 0 && tworepmax == 0 && threerepmax == 0 && fourrepmax != 0) {
        RMs[0] = fourrepmax / multip[3]
        for (let i = 0; i < multip.length; i++)
            RMs[i] = (((RMs[0]) * multip[i]))
    }
    if (onerepmax == 0 && tworepmax == 0 && threerepmax == 0 && fourrepmax == 0 && fiverepmax != 0) {
        RMs[0] = fiverepmax / multip[4]
        for (let i = 0; i < multip.length; i++)
            RMs[i] = (((RMs[0]) * multip[i]))
    }
    if (tworepmax != 0)
        RMs[1] = tworepmax
    if (threerepmax != 0)
        RMs[2] = threerepmax
    if (fourrepmax != 0)
        RMs[3] = fourrepmax
    if (fiverepmax != 0)
        RMs[4] = fiverepmax
    
    for (let i = 0; i < RMs.length; i++)
        RMs[i] = parseFloat(RMs[i].toFixed(1))
        //console.log("RMs",RMs)

    
    return RMs
}
export default algo