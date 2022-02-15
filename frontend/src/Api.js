import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class LoanApi {
    static async addLoan(formData) {
        console.debug('formData: ', formData);
        let response = await axios.post(`${BASE_API_URL}/`, formData);
        console.log("api response: ", response.data.loan);
        if (response.data.errors) {
            throw new Error(response.data.errors);
        } else {
            return response.data.loan;
        }
    }

    static async getLoan(formData) {
        console.debug('formData: ', formData);
        let response = await axios.get(`${BASE_API_URL}/${formData.id}`);
        console.log("api response: ", response.data.loan);
        if (response.data.errors) {
            throw new Error(response.data.errors);
        } else {
            return response.data.loan;
        }
    }

    static async updateLoan(formData) {
        console.debug('formData: ', formData);
        let id = formData.id;
        delete formData.id;

        let response = await axios.patch(`${BASE_API_URL}/${id}`, formData);
        console.log("api response: ", response.data.loan);
        if (response.data.errors) {
            throw new Error(response.data.errors);
        } else {
            return response.data.loan;
        }
    }
}

export default LoanApi;
