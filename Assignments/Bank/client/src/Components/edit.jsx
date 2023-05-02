import { useState } from "react";
export default function Edit({ c, setEditData, setDeleteData, msg }) {

    const [diffBalance, setDiffBalance] = useState('');


    const onBalanceInputChange = (e) => {
        setDiffBalance(Number(e.target.value));
    };

    const addToBalance = () => {
        if (diffBalance > 0) {
            setEditData({ ...c, balance: c.balance + diffBalance });
            msg('Funds successfully added to user account.', 'ok');
        }
        setDiffBalance('')
    };

    const deductBalance = () => {
        if (diffBalance <= c.balance) {
            setEditData({ ...c, balance: c.balance - diffBalance });
            msg('User funds were successfully charged.', 'ok');
        } else {
            msg('User does not have enough funds.', 'error');
            return
        }
        setDiffBalance('')
    }

    const destroy = _ => {
        if (c.balance > 0) {
            msg('User with funds cannot be deleted.', 'error');
            return
        }

        setDeleteData(c)
        msg('User deleted.', 'ok');
    }

    return (
        <>
            <td>
                <div className="input-group">
                    <span className="input-group-text">€</span>

                    <input type="number" value={diffBalance} onChange={onBalanceInputChange} required min={0} className="form-control arrows" />
                </div>
            </td>
            <td>
                <button onClick={addToBalance} className="btn btn-success">
                    Add funds
                </button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deductBalance}>Subtract funds</button>
            </td>
            <td>
                <button className="btn btn-dark" onClick={destroy}>Delete user</button>
            </td>
        </>
    );
}