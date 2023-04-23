function CalTable({ cRMs }: { cRMs: number[] }) {
    return (
        <body className="w-500 px-20 py-5">
            <header>
                <div>1 Rep Max (100%):  {cRMs[0]}</div>
                <br />
                <div>2 Rep Max (94%):  {cRMs[1]}</div>
                <br />
                <div>3 Rep Max (91%):  {cRMs[2]}</div>
                <br />
                <div>4 Rep Max (88%):  {cRMs[3]}</div>
                <br />
                <div>5 Rep Max (86%):  {cRMs[4]}</div>
                <br />
                <div>6 Rep Max (83%):  {cRMs[5]}</div>
                <br />
                <div>7 Rep Max (80%):  {cRMs[6]}</div>
                <br />
                <div>8 Rep Max (78%):  {cRMs[7]}</div>
                <br />
                <div>9 Rep Max (75%):  {cRMs[8]}</div>
                <br />
                <div>10 Rep Max (73%):  {cRMs[9]}</div>
            </header>
        </body>
    );
}
export default CalTable