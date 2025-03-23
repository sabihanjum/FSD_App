import { useEffect, useState } from "react";

// Define the User type
type User = {
    id: number;
    name: string;
    email: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]); // <-- Specify the type here

    useEffect(() => {
        fetch("/api/users")
        .then((res) => res.json())
      .then((data: User[]) => setUsers(data)); // <-- Specify the expected data type
    }, []);

    return (
    <div>
        <h1>Users List</h1>
        <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
        ))}
        </ul>
    </div>
    );
}
