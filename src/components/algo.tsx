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
    return RMs
}
export default algo