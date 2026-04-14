import { Button } from "../common/Button";
import { Input } from "../common/Input";
import {useState} from 'react'

export const LoginForm = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", { username, password });
  };
    return (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6 w-full">
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Sign In</Button>
        </form>
    );
};
