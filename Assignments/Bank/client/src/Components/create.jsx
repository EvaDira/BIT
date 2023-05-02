import { useState } from 'react';

export default function Create({ setCreateData, msg }) {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [balance, setBalance] = useState(0)

    const doName = e => {
        setName(e.target.value)
    }

    const doSurname = e => {
        setSurname(e.target.value)
    }


    const create = _ => {
        if (surname === '' || name === '') {
            msg('Please provide both your name and surname.', 'error');
            return
        } else {
            setCreateData({
                name,
                surname,
                balance
            })
            msg('New Client was successfully created.', 'ok');
        }

        setName('');
        setSurname('');
        setBalance(0);
    }


    return (

        <div className="card mt-4">
            <h5 className="card-header" style={{ fontWeight: 'bold' }}>Add New Client</h5>
            <div className="card-body">
                <div className="mb-4">
                    <label className="form-label" style={{ fontWeight: 'bold' }}>Client name</label>
                    <input type="text" className="form-control" value={name} onChange={doName} />
                    <div className="form-text">Please enter client name.</div>
                </div>
                <div className="mb-4">
                    <label className="form-label" style={{ fontWeight: 'bold' }}>Client surname</label>
                    <input type="text" className="form-control" value={surname} onChange={doSurname} />
                    <div className="form-text">Please enter client surname.</div>
                </div>
                <button className="btn btn-dark" onClick={create}>CREATE</button>

            </div>
        </div>

    );
}