import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5034/api",
});
// Axios: Only send request and receive response
// Axios request
axiosInstance.interceptors.request.use((config) => {
    // Get access token from local storage
    const accessToken = localStorage.getItem("accessToken");

    // Check if user have token then attach to header
    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

// Axios response
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    },
);
