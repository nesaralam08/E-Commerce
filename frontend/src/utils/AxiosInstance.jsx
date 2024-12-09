import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://e-commerce-gules-six.vercel.app',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default AxiosInstance