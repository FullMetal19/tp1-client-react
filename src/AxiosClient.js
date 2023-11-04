import axios from "axios";

const  API_URL_BASE = 'http://127.0.0.1:8001';

const  AxiosClient = axios.create({
    baseURL: `${API_URL_BASE}/api`,
});

 AxiosClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

//  AxiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         try {
//             const { response } = error;

//             if (response.status === 401) {
//                 localStorage.removeItem("token");
//             }
//         } catch (e) {
//             console.error(e);
//         }
//         throw error;
//     }
// );

export default  AxiosClient;