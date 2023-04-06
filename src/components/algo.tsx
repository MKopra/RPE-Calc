function algo(onerepmax: number, tworepmax: number, threerepmax: number, fourrepmax: number, fiverepmax: number) {
    const multip = [1.0, 0.94, 0.91, 0.883, 0.86, 0.833, 0.803, 0.777, 0.753, 0.733, 0.7, 0.67, 0.65]
    let RMs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    RMs[0] = onerepmax
    RMs[1] = RMs[0] * multip[1]
    RMs[2] = RMs[0] * multip[2]
    RMs[3] = RMs[0] * multip[3]
    RMs[4] = RMs[0] * multip[4]
    RMs[5] = RMs[0] * multip[5]
    RMs[6] = RMs[0] * multip[6]
    RMs[7] = RMs[0] * multip[7]
    RMs[8] = RMs[0] * multip[8]
    RMs[9] = RMs[0] * multip[9]
    RMs[10] = RMs[0] * multip[10]
    RMs[11] = RMs[0] * multip[11]


    if (onerepmax == 0 && tworepmax != 0) {
        RMs[0] = tworepmax / multip[1]
        RMs[1] = RMs[0] * multip[1]
        RMs[2] = RMs[0] * multip[2]
        RMs[3] = RMs[0] * multip[3]
        RMs[4] = RMs[0] * multip[4]
        RMs[5] = RMs[0] * multip[5]
        RMs[6] = RMs[0] * multip[6]
        RMs[7] = RMs[0] * multip[7]
        RMs[8] = RMs[0] * multip[8]
        RMs[9] = RMs[0] * multip[9]
        RMs[10] = RMs[0] * multip[10]
        RMs[11] = RMs[0] * multip[11]
    }
    if (onerepmax == 0 && tworepmax == 0 && threerepmax != 0) {
        RMs[0] = threerepmax / multip[2]
        RMs[1] = RMs[0] * multip[1]
        RMs[2] = RMs[0] * multip[2]
        RMs[3] = RMs[0] * multip[3]
        RMs[4] = RMs[0] * multip[4]
        RMs[5] = RMs[0] * multip[5]
        RMs[6] = RMs[0] * multip[6]
        RMs[7] = RMs[0] * multip[7]
        RMs[8] = RMs[0] * multip[8]
        RMs[9] = RMs[0] * multip[9]
        RMs[10] = RMs[0] * multip[10]
        RMs[11] = RMs[0] * multip[11]
    }
    if (onerepmax == 0 && tworepmax == 0 && threerepmax == 0 && fourrepmax != 0) {
        RMs[0] = fourrepmax / multip[3]
        RMs[1] = RMs[0] * multip[1]
        RMs[2] = RMs[0] * multip[2]
        RMs[3] = RMs[0] * multip[3]
        RMs[4] = RMs[0] * multip[4]
        RMs[5] = RMs[0] * multip[5]
        RMs[6] = RMs[0] * multip[6]
        RMs[7] = RMs[0] * multip[7]
        RMs[8] = RMs[0] * multip[8]
        RMs[9] = RMs[0] * multip[9]
        RMs[10] = RMs[0] * multip[10]
        RMs[11] = RMs[0] * multip[11]
    }
    if (onerepmax == 0 && tworepmax == 0 && threerepmax == 0 && fourrepmax == 0 && fiverepmax != 0) {
        RMs[0] = fiverepmax / multip[4]
        RMs[1] = RMs[0] * multip[1]
        RMs[2] = RMs[0] * multip[2]
        RMs[3] = RMs[0] * multip[3]
        RMs[4] = RMs[0] * multip[4]
        RMs[5] = RMs[0] * multip[5]
        RMs[6] = RMs[0] * multip[6]
        RMs[7] = RMs[0] * multip[7]
        RMs[8] = RMs[0] * multip[8]
        RMs[9] = RMs[0] * multip[9]
        RMs[10] = RMs[0] * multip[10]
        RMs[11] = RMs[0] * multip[11]
    }
    if (tworepmax != 0)
        RMs[1] = tworepmax
    if (threerepmax != 0)
        RMs[2] = threerepmax
    if (fourrepmax != 0)
        RMs[3] = fourrepmax
    if (fiverepmax != 0)
        RMs[4] = fiverepmax
    RMs[0] = parseFloat(RMs[0].toFixed(1))
    RMs[1] = parseFloat(RMs[1].toFixed(1))
    RMs[2] = parseFloat(RMs[2].toFixed(1))
    RMs[3] = parseFloat(RMs[3].toFixed(1))
    RMs[4] = parseFloat(RMs[4].toFixed(1))
    RMs[5] = parseFloat(RMs[5].toFixed(1))
    RMs[6] = parseFloat(RMs[6].toFixed(1))
    RMs[7] = parseFloat(RMs[7].toFixed(1))
    RMs[8] = parseFloat(RMs[8].toFixed(1))
    RMs[9] = parseFloat(RMs[9].toFixed(1))
    RMs[10] = parseFloat(RMs[10].toFixed(1))
    RMs[11] = parseFloat(RMs[11].toFixed(1))
    
    return RMs
}
export default algo