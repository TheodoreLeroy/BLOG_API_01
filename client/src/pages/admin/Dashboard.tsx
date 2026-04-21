import { Button } from "@/components/commons/Button";
import { useAuth } from "@/hooks/useAuth";
import { use } from "react";

export default function Dashboard() {
    const { user, logout } = useAuth();
    return (
        <>
            {" "}
            <h1 className="text-4xl font-bold">This is dashboard</h1>
            <div className="w-60 h-fit">
                <Button
                    type="button"
                    variant="danger"
                    message="Logout"
                    onClick={logout}
                />
            </div>
            <ul>
                <li>{user.id}</li>
                <li>{user.username}</li>
                <li>{user.role}</li>
            </ul>
        </>
    );
}
