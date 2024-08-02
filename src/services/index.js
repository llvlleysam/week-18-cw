import axios from "axios";

const base_url = "http://localhost:1000"

export const httpRequest = axios.create({
    baseURL : base_url,
    // headers : {"content-type" : "application/json"}
});


