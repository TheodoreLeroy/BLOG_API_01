import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5034/api",
});

// Send request to api
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");

        // check if user have token => attach to header
        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Server return response
axiosInstance.interceptors.response.use(
    (response) => {
        // If user login => give new access token
        if (response?.config.url === "/auth/login") {
            const accessToken = response?.data.accessToken;
            localStorage.setItem("accessToken", accessToken);
        }
        return response;
    },
    (error) => {
        // Unauthorize 401 => go to error page
        if (error.response?.status === 401) {
            // Kick to error page
            window.location.href = "/error";
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
