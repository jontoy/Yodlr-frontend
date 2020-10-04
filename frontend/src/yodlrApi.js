import axios from "axios";
import config from "./config";
const DATABASE_URL =
  process.env.REACT_APP_BASE_URL ||
  config.DATABASE_URL ||
  "http://localhost:3001";

class YodlrApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (
        await axios({
          method: verb,
          url: `${DATABASE_URL}/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData,
        })
      ).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  static async signup(data) {
    let res = await this.request(`users`, data, "post");
    return res.token;
  }
  static async getUsers(params = {}) {
    let res = await this.request(`users`, params);
    return res;
  }
  static async getUser(id) {
    let res = await this.request(`users/${id}`);
    return res;
  }
  static async updateUser(id, data) {
    let res = await this.request(`users/${id}`, data, "put");
    return res;
  }
  static async deleteUser(id) {
    let res = await this.request(`users/${id}`, "delete");
    return res;
  }
}

export default YodlrApi;
