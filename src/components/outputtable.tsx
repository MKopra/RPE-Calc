function OutputTable({ selectSet, RMs }: { selectSet: string, RMs: number[] }) {
    const set1 = selectSet == "Set of 1"
    const set2 = selectSet == "Set of 2"
    const set3 = selectSet == "Set of 3"
    const set4 = selectSet == "Set of 4"
    const set5 = selectSet == "Set of 5"
    const set6 = selectSet == "Set of 6"
    const set7 = selectSet == "Set of 7"
    const set8 = selectSet == "Set of 8"
    if (set1)
        return (
            <body>
                <header>
                    <div>RPE 10:  {RMs[0]}</div>
                    <br />
                    <div>RPE 9:  {RMs[1]}</div>
                    <br />
                    <div>RPE 8:  {RMs[2]}</div>
                    <br />
                    <div>RPE 7:  {RMs[3]}</div>
                    <br />
                    <div>RPE 6:  {RMs[4]}</div>
                    <br />
                    <div>RPE 5:  {RMs[5]}</div>
                </header>
            </body>
        );
    if (set2)
        return (
            <body  >
                <header>
                    <div>RPE 10:  {RMs[1]}</div>
                    <br />
                    <div>RPE 9:  {RMs[2]}</div>
                    <br />
                    <div>RPE 8:  {RMs[3]}</div>
                    <br />
                    <div>RPE 7:  {RMs[4]}</div>
                    <br />
                    <div>RPE 6:  {RMs[5]}</div>
                    <br />
                    <div>RPE 5:  {RMs[6]}</div>
                </header>
            </body>
        );
    if (set3)
        return (
            <body>
                <header>
                    <div>RPE 10:  {RMs[2]}</div>
                    <br />
                    <div>RPE 9:  {RMs[3]}</div>
                    <br />
                    <div>RPE 8:  {RMs[4]}</div>
                    <br />
                    <div>RPE 7:  {RMs[5]}</div>
                    <br />
                    <div>RPE 6:  {RMs[6]}</div>
                    <br />
                    <div>RPE 5:  {RMs[7]}</div>
                </header>
            </body>
        );
    if (set4)
        return (
            <body>
                <header>
                    <div>RPE 10:  {RMs[3]}</div>
                    <br />
                    <div>RPE 9:  {RMs[4]}</div>
                    <br />
                    <div>RPE 8:  {RMs[5]}</div>
                    <br />
                    <div>RPE 7:  {RMs[6]}</div>
                    <br />
                    <div>RPE 6:  {RMs[7]}</div>
                    <br />
                    <div>RPE 5:  {RMs[8]}</div>
                </header>
            </body>
        );
    if (set5)
        return (
            <body>
                <header>
                    <div>RPE 10:  {RMs[4]}</div>
                    <br />
                    <div>RPE 9:  {RMs[5]}</div>
                    <br />
                    <div>RPE 8:  {RMs[6]}</div>
                    <br />
                    <div>RPE 7:  {RMs[7]}</div>
                    <br />
                    <div>RPE 6:  {RMs[8]}</div>
                    <br />
                    <div>RPE 5:  {RMs[9]}</div>
                </header>
            </body>
        );
    if (set6)
        return (
            <body >
                <header >
                    <div>RPE 10:  {RMs[5]}</div>
                    <br />
                    <div>RPE 9:  {RMs[6]}</div>
                    <br />
                    <div>RPE 8:  {RMs[7]}</div>
                    <br />
                    <div>RPE 7:  {RMs[8]}</div>
                    <br />
                    <div>RPE 6:  {RMs[9]}</div>
                    <br />
                    <div>RPE 5:  {RMs[10]}</div>
                </header>
            </body>
        );
    if (set7)
        return (
            <body>
                <header>
                    <div>RPE 10:  {RMs[6]}</div>
                    <br />
                    <div>RPE 9:  {RMs[7]}</div>
                    <br />
                    <div>RPE 8:  {RMs[8]}</div>
                    <br />
                    <div>RPE 7:  {RMs[9]}</div>
                    <br />
                    <div>RPE 6:  {RMs[10]}</div>
                    <br />
                    <div>RPE 5:  {RMs[11]}</div>
                </header>
            </body>
        );
    if (set8)
        return (
            <body>
                <header>
                    <div>RPE 10:  {RMs[7]}</div>
                    <br />
                    <div>RPE 9:  {RMs[8]}</div>
                    <br />
                    <div>RPE 8:  {RMs[9]}</div>
                    <br />
                    <div>RPE 7:  {RMs[10]}</div>
                    <br />
                    <div>RPE 6:  {RMs[11]}</div>
                    <br />
                </header>
            </body>
        );

    return <div></div>
}
export default OutputTable
