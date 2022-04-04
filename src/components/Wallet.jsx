import React, {useState} from "react";

export default function Wallet() {
    const [transactions, setTransactions] = useState([]);

    function handleDepositClick() {
        return setTransactions([...transactions, 10])
    }

    function handleWithdrawClick() {
        return setTransactions([...transactions, -10])
    }

    function handleClearClick() {
        return setTransactions([])
    }

    return <div data-testid="wallet">
        <h2>Wallet:</h2>
        <button onClick={handleDepositClick}>Deposit 10</button>
        <button onClick={handleWithdrawClick}>Withdraw 10</button>
        <h2>Total: {transactions.reduce((partialSum, a) => partialSum + a, 0)}</h2>
        <button onClick={handleClearClick}>Reset</button>
        <ul>
            {
                transactions.map((transaction, index) => {
                    if (transaction > 0) {
                        return <li key={index}>You added {transaction.toString()}</li>
                    }
                    return <li key={index}>You withdrew {Math.abs(transaction.toString())}</li>
                })
            }
        </ul>
    </div>;
}