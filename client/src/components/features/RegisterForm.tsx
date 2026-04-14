import React, { useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";

export const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Password doesn't match!");
            return;
        }
        console.log("Signing data:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 w-full text-left"
        >
            <Input
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />
            <div className="pt-2">
                <Button type="submit">Register</Button>
            </div>
        </form>
    );
};
