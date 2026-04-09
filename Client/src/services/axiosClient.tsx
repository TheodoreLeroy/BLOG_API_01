import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost/5034/api",
});

const getAccessToken = () => localStorage.getItem("accessToken");

axiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
})

export default axiosInstance;