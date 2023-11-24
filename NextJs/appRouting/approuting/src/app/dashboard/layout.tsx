import React from "react";
interface DashboardLayoutProps{
    children:React.ReactNode
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props)=>{
    return <>
        <div className="nav flex justify-between px-10 py-4 bg-slate-800 text-white">
            <h2>Logo</h2>
            <ul className="flex space-x-3">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>

        <div className="flex">
            <div className="sidebar bg-black h-screen w-[15vw] text-white shadow-lg">
                <ul className="flex flex-col space-y-4 pt-8 px-2 text-2xl">
                    <li>Profile</li>
                    <li>Payments</li>
                    <li>Users</li>
                    <li>Orders</li>
                </ul>
            </div>
        <div className="p-10">
            <h1 className="text-4xl">
            {props.children}
            </h1>
           
        </div>
        </div>
    </>
}

export default DashboardLayout;