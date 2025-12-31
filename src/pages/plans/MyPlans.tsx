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

    {plans.map((p)=>(
      <div key={p._id} className="border p-2 mb-2">
      <h3>{p.title}</h3>
      <p>Goal:{p.goal}</p>
      <p>Status:{p.status}</p>
      </div>

    ))}
  </div>
);

}