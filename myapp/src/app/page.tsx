"use client"; // ✅ Must be the first line

import React, { useEffect, useState } from "react";
import { User } from "../../types/types"; // ✅ Ensure the correct path

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        console.log("Fetched users:", data); // ✅ Log API response
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <ul className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-lg">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="border-b border-gray-700 py-2">
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))
        ) : (
          <p className="text-gray-400">No users found.</p>
        )}
      </ul>
    </main>
  );
}
