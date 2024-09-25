import { useContext } from "react";
import { AuthContext } from "./AuthCon";

 export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}