import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/user";

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      const res = await getAllUsers();
      console.log("Users response:", res);
      setUsers(res.users || res || []);
      setError(null);
    } catch (err: any) {
      console.error("Error loading users:", err);
      setError(err.response?.data?.message || "Failed to load users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        User Management 
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {users.length === 0 && (
        <p className="text-gray-500">No users found.</p>
      )}

      <div className="space-y-4">
        {users.map((u) => (
          <div
            key={u._id}
            className="bg-white p-5 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-800">{u.email}</p>

              <span
                className={`inline-block mt-1 text-xs px-3 py-1 rounded-full font-medium
                  ${
                    u.role === "admin"
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
              >
                {u.role.toUpperCase()}
              </span>
            </div>

            {u.role !== "admin" && (
              <button
                onClick={() => deleteUser(u._id).then(loadUsers)}
                className="bg-red-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-red-700 transition"
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
