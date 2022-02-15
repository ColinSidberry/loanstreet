import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddLoanForm from './AddLoanForm';
import GetLoanForm from './GetLoanForm';
import UpdateLoanForm from './UpdateLoanForm';
import "bootstrap/dist/css/bootstrap.css";
import LoanApi from './Api';

function App() {
  const [newLoan, setNewLoan] = useState(null);
  const [retrievedLoan, setRetrievedLoan] = useState(null);
  const [updatedLoan, setUpdatedLoan] = useState(null);

  async function addLoan(formData) {
    const loan = await LoanApi.addLoan(formData)
    setNewLoan(loan);
  }

  async function getLoan(formData) {
    const loan = await LoanApi.getLoan(formData)
    setRetrievedLoan(loan);
  }

  async function updateLoan(formData) {
    // const loan = await LoanApi.updateLoan(formData)
    // setUpdatedLoan(loan);
  }

  return (
    <div className="App">
      <AddLoanForm addLoan={addLoan} />
      <div>
        {newLoan !== null
          ? <p>Added loan {newLoan.id}</p>
          : <p></p>
        }
      </div>

      <GetLoanForm getLoan={getLoan} />
      <div>
        {retrievedLoan !== null
          ? <p>Retrieved loan has amount {retrievedLoan.amount}</p>
          : <p></p>
        }
      </div>

      <UpdateLoanForm updateLoan={updateLoan} />
      <div>
        {updatedLoan !== null
          ? <p>Updated loan at id {updatedLoan.id}</p>
          : <p></p>
        }
      </div>
    </div>
  );
}

export default App;
