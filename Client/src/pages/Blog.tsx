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
                if (response.status === 200) {
                    setBlogs(response.data); // Update state
                }
            } catch (error: any) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []); // Empty dependency array means this runs once on mount

    const listItem = blogs.map(blog => <li key={blog.id}>
        <h2>{blog.blogTitle}</h2>
        <p>{blog.blogContent}</p>
    </li>)
    console.log(blogs);
    return (
        <>
            <button className="h-fit w-fit cursor-pointer bg-red-500" onClick={handleLogout}>Logout</button>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Blog List</h1>
                {/* Map through your blogs here */}
                {listItem}
            </div>
        </>

    );
}

export default Blog;