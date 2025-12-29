import { useAuth } from "../context/authContext";


export default function Home(){
    const{user} = useAuth();


    return(
        <div>
            <h1 className="text-xl font-bold">Welcome</h1>
            <p>Email:{user?.email}</p>
            <p>Role:{user?.role}</p>
        </div>
    );
}