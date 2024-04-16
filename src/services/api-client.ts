import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/"
})

export {CanceledError};