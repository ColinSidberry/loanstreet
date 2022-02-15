import React, { useState } from "react";

/** Form for editing names.
 *
 * State:
 * - formData: { firstName, lastName }
 */


function AddLoanForm({ addLoan }) {
    const INITIAL_DATA = {
        amount: "",
        interest_rate: "",
        term: "",
        month_payment: "",
    }
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState(null);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    async function handleSubmit(evt) {
        console.debug("formData is: ", formData);
        evt.preventDefault();
        try {
            await addLoan(formData)
            setFormData(INITIAL_DATA);
        } catch (err) {
            setErrors(err)
        }
    }

    return (
        <div className="row justify-content-center">
            <h1 className="m-4">Add a New Loan</h1>
            <form className="col-8 border" onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="amount">Loan Amount ($):</label>
                    <input
                        className="col-4"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="interestRate">Interest Rate:</label>
                    <input
                        className="col-4"
                        id="interestRate"
                        name="interest_rate"
                        type="interestRate"
                        value={formData.interest_rate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="term">Term:</label>
                    <input
                        className="col-4"
                        id="term"
                        name="term"
                        type="term"
                        value={formData.term}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="monthPayment">Monthly Payment Amount ($):</label>
                    <input
                        className="col-4"
                        id="monthPayment"
                        name="month_payment"
                        type="monthPayment"
                        value={formData.month_payment}
                        onChange={handleChange}
                    />
                </div>
                <button className="m-4 btn btn-primary">Add Loan!</button>
                {errors && <p>{errors.toString()}</p>}
            </form>
        </div >
    );
}

export default AddLoanForm;