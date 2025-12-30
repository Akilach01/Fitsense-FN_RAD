import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPlan } from "../../services/plan";


export default function CreatePlan(){
    const navigate = useNavigate();

    const[title, setTitle] = useState("");
    const[goal, setGoal] = useState("");
    const[duration, setDuration] = useState("");

    const handleCreate = async()=>{
        try {
            await createPlan({title, goal, duration});
            alert("plan created, waiting for approval");
            navigate("/plans/me");
            
        } catch (err) {
            console.error(err);
            alert("failed to create plan");
        }
    };

    return(
        <div>
            <h2>Create a fitness plan</h2>
            
            <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

           <input
            placeholder="Goal"
            value={goal}
             onChange={(e) => setGoal(e.target.value)}
            />

             <input
            placeholder="Duration (weeks)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            />

            <button onClick={handleCreate}>Create</button>
        </div>
    );
}