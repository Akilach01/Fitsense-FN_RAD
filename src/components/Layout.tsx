import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function Layout(){
    return(
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Top Navigation*/}
            <Header/>


            {/* Page Content*/ }
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
        </div>
    );
}