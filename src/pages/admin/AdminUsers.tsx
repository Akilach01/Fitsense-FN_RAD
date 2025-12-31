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

    return(
       <div>
        <h2>All Users</h2>

        {users.map((u) =>(
         <div key={u._id} className="border p-2 mb-2">
            <p>{u.email} - {u.role}</p>

          {u.role !== "admin" && (
            <button onClick={()=> deleteUser(u._id).then(loadUsers)}>Delete</button> 
          )}
          </div>
        ))}
       </div> 
    );
}