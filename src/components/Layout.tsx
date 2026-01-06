import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function Layout(){
    return(
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Top Navigation*/}
            <Header/>


            {/* Page Content*/ }
            <main className="flex-1 container mx-auto px-6 py-8">
                <Outlet></Outlet>
            </main>
        </div>
    );
}