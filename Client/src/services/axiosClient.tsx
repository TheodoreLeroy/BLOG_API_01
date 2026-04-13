import axios from 'axios';

// Generate axios instance
const axiosInstance = axios.create({
    baseURL: "http://localhost:5034/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Get access token from appication local storage
const getAccessToken = () => localStorage.getItem("accessToken");


// Let axios interceptor auto attach token for each request
axiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();

    // Check if token have or not?
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
},
    (error) => Promise.reject(error)
);

// Axios interceptor for checking reponse from server
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        //const role = error.response?.role;
        // Check if token expire or not accepted
        if (error.response?.status === 401) {
            // Remove token from storage
            localStorage.removeItem('accessToken');
            // Redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;