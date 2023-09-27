import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 *This class contains all the API calls in one place
 *Better for organization and debugging
 */
export class Api {
    /**
     * This function is curtosy of Rythm school.
     * Call request to make the API call.
     * @param {*} endpoint - the route, or part of the url after the domain.
     * @param {*} data - an object containing the data to be sent to the api in requests
     * @param {*} method - the request method like GET, POST or PATCH
     * @returns the part of the response data contained in the 'data' property
     */
    static async request(endpoint, data = {}, method = "get") {

        const url = `${BASE_URL}/${endpoint}`;
        const params = method === "get" ? data : {};

        try {
            return (await axios({ url, method, data, params})).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }


    static async register(email, firstName, lastName) {
        const profile = {
            email: email,
            firstName: firstName,
            lastName: lastName,
        };

        try {
            const user = await this.request("users", profile, "post");
            return [user, false];

        } catch (error) {
            return [false, error];
        }
    }


    static async getUser(userid) {
        try {
            const user = await this.request(`users/${userid}`);
            return [user, false];

        } catch (error) {
            return [false, error];
        }
    }

    static async editUser(id, email, firstName, lastName, state) {
        const profile = {
            id : id,
            email: email,
            firstName: firstName,
            lastName: lastName,
            state : state,
        };

        try {
            const user = await this.request(`users/${id}`, profile, "put");
            return [user, false];

        } catch (error) {
            return [false, error];
        }
    }

    static async listUsers() {
        try {
            const users = await this.request(`users`);
            return [users, false];

        } catch (error) {
            return [false, error];
        }
    }
}