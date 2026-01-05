import { useEffect, useState } from "react";
import { approvePlan, getAllPlans, rejectPlan } from "../../services/plan";


export default function AdminPlans(){
    const[plans, setPlans] = useState<any[]>([]);

    const loadPlans = async()=>{
        const res = await getAllPlans();
        setPlans(res.plans);
    };

    useEffect(()=>{
        loadPlans();
    },[]);


    return(
        <div className="bg-white p-4 rounded shadow mb-3">
            <h2>All Plans</h2>

            {plans.map((p) => (
          <div key={p._id} className="border p-2 mb-2">
          <h3>{p.title}</h3>
          <p>User: {p.user?.email}</p>
          <p>Status: {p.status}</p>

          {p.status === "pending" && (
            <>
            <div className="flex gap-2 mt-2">
            <button onClick={()=>approvePlan(p._id).then(loadPlans)}>Approve</button>
             <button onClick={()=>rejectPlan(p._id).then(loadPlans)}>Reject</button>
            </div>
            </>
          )}
           </div>
            ))}
        </div>
    );
}