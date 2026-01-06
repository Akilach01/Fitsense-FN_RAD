import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/user";


export default function AdminUsers(){
    const [users, setUsers] = useState<any[]>([]);

    const loadUsers = async()=>{
        const res =  await getAllUsers();
        setUsers(res.users);
    };

    useEffect(()=>{
        loadUsers();

    }, []);

    return (
  <div className="max-w-3xl mx-auto mt-6">
    <h2 className="text-2xl font-bold mb-4">All Users</h2>

    {users.length === 0 && (
      <p className="text-gray-500">No users found.</p>
    )}

    <div className="space-y-3">
      {users.map((u) => (
        <div
          key={u._id}
          className="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{u.email}</p>
            <span
              className={`text-sm px-2 py-1 rounded 
                ${
                  u.role === "admin"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
            >
              {u.role}
            </span>
          </div>

          {u.role !== "admin" && (
            <button
              onClick={() => deleteUser(u._id).then(loadUsers)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);

}