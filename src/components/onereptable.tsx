function OneRepTable({ oRMs }: { oRMs: number[] }) {
        return (
            <body className="w-500 px-20 py-5">
                <header>
                    <div>1 Rep Max (100%):  {oRMs[0]}</div>
                    <br />
                    <div>2 Rep Max (94%):  {oRMs[1]}</div>
                    <br />
                    <div>3 Rep Max (91%):  {oRMs[2]}</div>
                    <br />
                    <div>4 Rep Max (88%):  {oRMs[3]}</div>
                    <br />
                    <div>5 Rep Max (86%):  {oRMs[4]}</div>
                    <br />
                    <div>6 Rep Max (83%):  {oRMs[5]}</div>
                    <br />
                    <div>7 Rep Max (80%):  {oRMs[6]}</div>
                    <br />
                    <div>8 Rep Max (78%):  {oRMs[7]}</div>
                    <br />
                    <div>9 Rep Max (75%):  {oRMs[8]}</div>
                    <br />
                    <div>10 Rep Max (73%):  {oRMs[9]}</div>
                </header>
            </body>
        );
}
export default OneRepTable
