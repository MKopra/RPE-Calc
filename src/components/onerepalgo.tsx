function onerepalgo(selectSet: string, weightLifted: number) {
    const multip = [1.0, 0.94, 0.91, 0.883, 0.86, 0.833, 0.803, 0.777, 0.753, 0.733, 0.7, 0.67, 0.65]
    let oRMs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if (selectSet == "Set of 1") {
            oRMs[0] = weightLifted
            oRMs[1] = oRMs[0] * multip[1]
            oRMs[2] = oRMs[0] * multip[2]
            oRMs[3] = oRMs[0] * multip[3]
            oRMs[4] = oRMs[0] * multip[4]
            oRMs[5] = oRMs[0] * multip[5]
            oRMs[6] = oRMs[0] * multip[6]
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 2") {
            oRMs[0] = weightLifted/(multip[1])
            oRMs[1] = weightLifted
            oRMs[2] = oRMs[0] * multip[2]
            oRMs[3] = oRMs[0] * multip[3]
            oRMs[4] = oRMs[0] * multip[4]
            oRMs[5] = oRMs[0] * multip[5]
            oRMs[6] = oRMs[0] * multip[6]
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 3") {
            oRMs[0] = weightLifted/(multip[2])
            oRMs[1] = weightLifted/(multip[1])
            oRMs[2] = weightLifted
            oRMs[3] = oRMs[0] * multip[3]
            oRMs[4] = oRMs[0] * multip[4]
            oRMs[5] = oRMs[0] * multip[5]
            oRMs[6] = oRMs[0] * multip[6]
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 4") {
            oRMs[0] = weightLifted/(multip[3])
            oRMs[1] = weightLifted/(multip[2])
            oRMs[2] = weightLifted/(multip[1])
            oRMs[3] = weightLifted
            oRMs[4] = oRMs[0] * multip[4]
            oRMs[5] = oRMs[0] * multip[5]
            oRMs[6] = oRMs[0] * multip[6]
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 5") {
            oRMs[0] = weightLifted/(multip[4])
            oRMs[1] = weightLifted/(multip[3])
            oRMs[2] = weightLifted/(multip[2])
            oRMs[3] = weightLifted/(multip[1])
            oRMs[4] = weightLifted
            oRMs[5] = oRMs[0] * multip[5]
            oRMs[6] = oRMs[0] * multip[6]
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 6") {
            oRMs[0] = weightLifted/(multip[5])
            oRMs[1] = weightLifted/(multip[4])
            oRMs[2] = weightLifted/(multip[3])
            oRMs[3] = weightLifted/(multip[2])
            oRMs[4] = weightLifted/(multip[1])
            oRMs[5] = weightLifted
            oRMs[6] = oRMs[0] * multip[6]
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 7") {
            oRMs[0] = weightLifted/(multip[6])
            oRMs[1] = weightLifted/(multip[5])
            oRMs[2] = weightLifted/(multip[4])
            oRMs[3] = weightLifted/(multip[3])
            oRMs[4] = weightLifted/(multip[2])
            oRMs[5] = weightLifted/(multip[1])
            oRMs[6] = weightLifted
            oRMs[7] = oRMs[0] * multip[7]
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }
    if (selectSet == "Set of 8") {
            oRMs[0] = weightLifted/(multip[7])
            oRMs[1] = weightLifted/(multip[6])
            oRMs[2] = weightLifted/(multip[5])
            oRMs[3] = weightLifted/(multip[4])
            oRMs[4] = weightLifted/(multip[3])
            oRMs[5] = weightLifted/(multip[2])
            oRMs[6] = weightLifted/(multip[1])
            oRMs[7] = weightLifted
            oRMs[8] = oRMs[0] * multip[8]
            oRMs[9] = oRMs[0] * multip[9]
            oRMs[10] = oRMs[0] * multip[10]
            oRMs[11] = oRMs[0] * multip[11] }

    oRMs[0] = parseFloat(oRMs[0].toFixed(1))
    oRMs[1] = parseFloat(oRMs[1].toFixed(1))
    oRMs[2] = parseFloat(oRMs[2].toFixed(1))
    oRMs[3] = parseFloat(oRMs[3].toFixed(1))
    oRMs[4] = parseFloat(oRMs[4].toFixed(1))
    oRMs[5] = parseFloat(oRMs[5].toFixed(1))
    oRMs[6] = parseFloat(oRMs[6].toFixed(1))
    oRMs[7] = parseFloat(oRMs[7].toFixed(1))
    oRMs[8] = parseFloat(oRMs[8].toFixed(1))
    oRMs[9] = parseFloat(oRMs[9].toFixed(1))
    oRMs[10] = parseFloat(oRMs[10].toFixed(1))
    oRMs[11] = parseFloat(oRMs[11].toFixed(1))
    
    return oRMs
}
export default onerepalgo