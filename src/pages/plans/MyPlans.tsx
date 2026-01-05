import { useEffect, useState } from "react";
import { getMyPlans } from "../../services/plan";


export default function Myplans(){
  const[plans, setPlans] = useState<any[]>([]);

  useEffect(()=>{
   getMyPlans().then((res)=> setPlans(res.plans));

},[]);

return(
  <div>
    <h2>My Plans</h2>

  {plans.map((p) => (
    <div key={p._id} className="bg-white p-4 rounded shadow mb-3">
    <h3 className="font-bold">{p.title}</h3>
    <p>Goal: {p.goal}</p>
    <span
      className={`inline-block mt-2 px-2 py-1 text-sm rounded
      ${p.status === "approved" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"}`}
    >
      {p.status}
    </span>  
    </div>
  ))}
  </div>
);}
