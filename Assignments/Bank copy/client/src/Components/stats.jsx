export default function Stats({ data }) {

    if (null === data) {
        return (
            <h2>LOADING....</h2>
        )
    }

    return (
        <div className="stat mt-5">
            <div className="stats">
                <h2>Statistika</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Total clients:</th>
                            <th>Total funds:</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="cl-number">
                            <td>{data.length ? data.length : 0}</td>
                            <td>{data.reduce((acc, curr) => acc + curr.balance, 0)}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}