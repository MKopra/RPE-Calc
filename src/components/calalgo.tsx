function calalgo(selectSet: string, calweightlifted: number, bodyweight: number) {
    const multip = [1.0, 0.94, 0.91, 0.883, 0.86, 0.833, 0.803, 0.777, 0.753, 0.733, 0.7, 0.67, 0.65]
    let cRMsd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    if (selectSet == "Set of 1") {
        cRMsd[0] = calweightlifted
        for (let i = 0; i < multip.length; i++)
            cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)
            }
    if (selectSet == "Set of 2") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[1])- bodyweight)
            cRMsd[1] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)
             }
    if (selectSet == "Set of 3") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[2])-bodyweight)
            cRMsd[2] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)
             }
    if (selectSet == "Set of 4") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[3])-bodyweight)
            cRMsd[3] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)
           }
    if (selectSet == "Set of 5") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[4])-bodyweight)
            cRMsd[4] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)}
    if (selectSet == "Set of 6") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[5])-bodyweight)
            cRMsd[5] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)}
    if (selectSet == "Set of 7") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[6])-bodyweight)
            cRMsd[6] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)}
    if (selectSet == "Set of 8") {
            cRMsd[0] = ((calweightlifted + bodyweight)/(multip[7])-bodyweight)
            cRMsd[7] = calweightlifted
            for (let i = 0; i < multip.length; i++)
                cRMsd[i] = (((cRMsd[0] + bodyweight) * multip[i])-bodyweight)}

    cRMsd[0] = parseFloat(cRMsd[0].toFixed(1))
    cRMsd[1] = parseFloat(cRMsd[1].toFixed(1))
    cRMsd[2] = parseFloat(cRMsd[2].toFixed(1))
    cRMsd[3] = parseFloat(cRMsd[3].toFixed(1))
    cRMsd[4] = parseFloat(cRMsd[4].toFixed(1))
    cRMsd[5] = parseFloat(cRMsd[5].toFixed(1))
    cRMsd[6] = parseFloat(cRMsd[6].toFixed(1))
    cRMsd[7] = parseFloat(cRMsd[7].toFixed(1))
    cRMsd[8] = parseFloat(cRMsd[8].toFixed(1))
    cRMsd[9] = parseFloat(cRMsd[9].toFixed(1))
    cRMsd[10] = parseFloat(cRMsd[10].toFixed(1))
    cRMsd[11] = parseFloat(cRMsd[11].toFixed(1))
    
    return cRMsd
}
export default calalgo