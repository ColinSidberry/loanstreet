import React, { useState } from "react";

/** Form for editing names.
 *
 * State:
 * - formData: { firstName, lastName }
 */

//FIXME: Address this issue -> react_devtools_backend.js:4061 Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
function UpdateLoanForm({ updateLoan }) {
    const INITIAL_DATA = {
        id:"",
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
        evt.preventDefault();
        
        for (let key in formData) {
            if (formData[key] === "") {
                delete formData[key];
            }
        }
        console.debug("formData is: ", formData);

        if (Object.keys(formData).length > 1){
            try {
                await updateLoan(formData)
                setFormData(INITIAL_DATA);
            } catch (err) {
                setErrors(err)
            }
        }
    }

    return (
        <div className="row justify-content-center">
            <h1 className="m-4">Update a Loan By ID</h1>
            <form className="col-8 border" onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="id">Loan to Update:</label>
                    <input
                        className="col-4"
                        id="id"
                        name="id"
                        placeholder="Enter a loan ID"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="amount">Update amount to:</label>
                    <input
                        className="col-4"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="interestRate">Update Interest Rate to:</label>
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
                    <label className="col-12" htmlFor="term">Update Term to:</label>
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
                    <label className="col-12" htmlFor="monthPayment">Update Monthly Payment Amount to($):</label>
                    <input
                        className="col-4"
                        id="monthPayment"
                        name="month_payment"
                        type="monthPayment"
                        value={formData.month_payment}
                        onChange={handleChange}
                    />
                </div>
                <button className="m-4 btn btn-primary">Update Loan!</button>
                {errors && <p>{errors.toString()}</p>}
            </form>
        </div >
    );
}

export default UpdateLoanForm;