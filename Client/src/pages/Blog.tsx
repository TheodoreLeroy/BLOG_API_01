/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosClient';
import { useState, useEffect } from 'react';
function Blog() {
    const navigate = useNavigate();
    const getAccessToken = () => localStorage.getItem("accessToken");
    const [blogs, setBlogs] = useState<any[]>([]);
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate('/');
    };

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axiosInstance.get("/Blog/blogs");
                console.log(axiosInstance.get("/Blog/blogs"));
                if (response.status === 200) {
                    console.log(response.data);
                    setBlogs(response.data); // Update state
                }
            } catch (error: any) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []); // Empty dependency array means this runs once on mount


    return (
        <>
            <button className="w-fit h-fit bg-red-500 cursor-pointer" onClick={handleLogout}>Logout</button>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Blog List</h1>
                {/* Map through your blogs here */}
                {blogs.map((blog: any) => (
                    <div key={blog.id} className="border-b py-2">
                        {blog.title}
                    </div>
                ))}
            </div>
        </>

    );
}

export default Blog;