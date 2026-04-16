import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
    const { user } = useAuth();
    return (
        <>
            {" "}
            <h1 className="text-4xl font-bold">This is dashboard</h1>
            <p>{user?.name}</p>
        </>
    );
}
