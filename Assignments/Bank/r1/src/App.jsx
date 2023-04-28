import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import './App.scss';
import Clients from './Components/clients';
import Create from './Components/create';
import { crudCreate, crudDelete, crudRead, crudUpdate } from './Utilities/localStorage';
import { bank } from './Components/icon';
import Messages from './Components/messages';
import { v4 as uuidv4 } from 'uuid';



const key = 'ClientsBase';

function App() {

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [messages, setMessages] = useState([]);



  useEffect(() => {
    setData(crudRead(key))
  }, [lastUpdateTime]);


  useEffect(() => {
    if (null === createData) {
      return
    }
    crudCreate(key, createData)
    setLastUpdateTime(Date.now());
  }, [createData])

  useEffect(() => {
    if (null === editData) {
      return;
    }
    crudUpdate(key, editData, editData.id);
    setLastUpdateTime(Date.now());
  }, [editData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    crudDelete(key, deleteData.id);
    setLastUpdateTime(Date.now());
  }, [deleteData])

  const msg = (text, type) => {
    const id = uuidv4();
    setMessages(m => [...m, { text, type, id }]);
    setTimeout(() => {
      setMessages(m => m.filter(m => m.id !== id));
    }, 5000)
  }


  return (
    <>
      <nav className="navbar navbar-light bg-secondary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 color-white" style={{ fontWeight: 'bold' }}> {bank} DiGit Bank</span>

        </div>


      </nav>


      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <Create setCreateData={setCreateData} msg={msg} />
            </div>
            <div class="col-8">
              <Clients data={data} setEditData={setEditData} setDeleteData={setDeleteData} msg={msg} />

            </div>

          </div>

        </div>

      </div>
      <Messages messages={messages} />

    </>
  );

}
export default App;
