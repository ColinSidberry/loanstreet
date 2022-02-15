import React, { useState } from "react";

/** Form for editing names.
 *
 * State:
 * - formData: { firstName, lastName }
 */


function GetLoanForm({ getLoan }) {
    const INITIAL_DATA = {
        id: "",
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
        try {
            await getLoan(formData)
            setFormData(INITIAL_DATA);
        } catch (err) {
            setErrors(err)
        }
    }

    return (
        <div className="row justify-content-center">
            <h1 className="m-4">Get Loan By ID</h1>
            <form className="col-8 border" onSubmit={handleSubmit}>
                <div className="form-group mt-4">
                    <label className="col-12" htmlFor="id">Loan to retrieve:</label>
                    <input
                        className="col-4"
                        id="id"
                        name="id"
                        placeholder="Enter a loan id."
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>
                <button className="m-4 btn btn-primary">Get Loan!</button>
                {errors && <p>{errors.toString()}</p>}
            </form>
        </div >
    );
}

export default GetLoanForm;